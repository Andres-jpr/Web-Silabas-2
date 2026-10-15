/**
 * Motor de Animaciones, Efectos Visuales y Partículas Cósmicas
 */

class AnimationEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.stars = [];
    this.animationFrameId = null;
  }

  // Inicializar fondo dinámico de estrellas cósmicas
  initBackgroundCanvas(canvasElement) {
    if (!canvasElement) return;
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');

    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    // Crear 120 estrellas con diferentes profundidades
    this.stars = [];
    const count = Math.min(130, Math.floor((window.innerWidth * window.innerHeight) / 9000));
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 1.8 + 0.4,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        baseAlpha: Math.random() * 0.6 + 0.3,
        alphaOffset: Math.random() * Math.PI * 2,
        color: ['#00F0FF', '#8B5CF6', '#F43F5E', '#FFFFFF', '#FBBF24'][Math.floor(Math.random() * 5)]
      });
    }

    this.renderStars();
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  renderStars() {
    if (!this.ctx || !this.canvas) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const now = Date.now() * 0.002;

    for (let star of this.stars) {
      star.x += star.speedX;
      star.y += star.speedY;

      // Wrap around screen
      if (star.x < 0) star.x = this.canvas.width;
      if (star.x > this.canvas.width) star.x = 0;
      if (star.y < 0) star.y = this.canvas.height;
      if (star.y > this.canvas.height) star.y = 0;

      const alpha = Math.max(0.1, star.baseAlpha + Math.sin(now + star.alphaOffset) * 0.25);

      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = star.color;
      this.ctx.globalAlpha = alpha;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = star.color;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }
    this.ctx.globalAlpha = 1.0;

    this.animationFrameId = requestAnimationFrame(() => this.renderStars());
  }

  // Disparo de confeti estelar
  triggerConfetti(isBigWin = false) {
    if (typeof confetti === 'function') {
      if (isBigWin) {
        // Disparo masivo de confeti en abanico
        const count = 200;
        const defaults = { origin: { y: 0.7 } };

        function fire(particleRatio, opts) {
          confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
          });
        }

        fire(0.25, { spread: 26, startVelocity: 55, colors: ['#00F0FF', '#8B5CF6', '#FBBF24'] });
        fire(0.2, { spread: 60, colors: ['#EC4899', '#3B82F6', '#10B981'] });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 1.2, shapes: ['star', 'circle'] });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.5 });
        fire(0.1, { spread: 120, startVelocity: 45 });
      } else {
        // Disparo moderado para aciertos
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#00F0FF', '#8B5CF6', '#FBBF24', '#FFFFFF'],
          shapes: ['circle', 'square']
        });
      }
    }
  }

  // Animación de impacto en la zona de drop
  pulseZone(element, isSuccess) {
    if (!element) return;
    const animationClass = isSuccess ? 'zone-flash-success' : 'zone-flash-error';
    element.classList.remove('zone-flash-success', 'zone-flash-error');
    void element.offsetWidth; // Force reflow
    element.classList.add(animationClass);

    setTimeout(() => {
      element.classList.remove(animationClass);
    }, 600);
  }

  // Mostrar mensaje flotante de combo arcade
  showFloatingScore(text, x, y, color = '#00F0FF') {
    const floatEl = document.createElement('div');
    floatEl.className = 'floating-score-tag';
    floatEl.innerText = text;
    floatEl.style.left = `${x}px`;
    floatEl.style.top = `${y}px`;
    floatEl.style.color = color;
    floatEl.style.textShadow = `0 0 16px ${color}`;

    document.body.appendChild(floatEl);

    if (window.gsap) {
      window.gsap.fromTo(floatEl, 
        { scale: 0.4, opacity: 0, y: 0 },
        { 
          scale: 1.3, 
          opacity: 1, 
          y: -70, 
          duration: 0.85, 
          ease: "back.out(2)",
          onComplete: () => floatEl.remove() 
        }
      );
    } else {
      setTimeout(() => floatEl.remove(), 900);
    }
  }
}

export const animationEngine = new AnimationEngine();

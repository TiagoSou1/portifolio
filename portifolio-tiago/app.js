(() => {
  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const progressBar = document.querySelector('.scroll-progress span');
  const glow = document.querySelector('.cursor-glow');
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelector('[data-year]').textContent = new Date().getFullYear();

  const updateScroll = () => {
    const available = document.documentElement.scrollHeight - window.innerHeight;
    const progress = available > 0 ? window.scrollY / available : 0;
    root.style.setProperty('--progress', Math.min(Math.max(progress, 0), 1));
    header.classList.toggle('scrolled', window.scrollY > 18);
    if (progressBar) progressBar.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
  };
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });

  if (glow && !reducedMotion) {
    window.addEventListener('pointermove', (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    }, { passive: true });
  }

  const closeMenu = () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
    mobileNav?.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
    mobileNav?.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });
  mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const navLinks = [...document.querySelectorAll('.desktop-nav a')];
  const navTargets = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  navTargets.forEach((section) => navObserver.observe(section));

  const stage = document.querySelector('[data-stage]');
  const tiltCard = document.querySelector('[data-tilt]');
  const pointer = { x: 0, y: 0 };
  if (stage && tiltCard && !reducedMotion) {
    stage.addEventListener('pointermove', (event) => {
      const bounds = stage.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
      stage.style.setProperty('--tilt-x', `${-pointer.y * 4.5}deg`);
      stage.style.setProperty('--tilt-y', `${pointer.x * 5.5}deg`);
    });
    stage.addEventListener('pointerleave', () => {
      pointer.x = 0; pointer.y = 0;
      stage.style.setProperty('--tilt-x', '0deg');
      stage.style.setProperty('--tilt-y', '0deg');
    });
  }

  if (!reducedMotion && window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('[data-project-card]').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        card.style.transform = `perspective(1100px) rotateX(${-y * 1.8}deg) rotateY(${x * 2.2}deg) translateY(-3px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  const canvas = document.querySelector('[data-sphere]');
  if (!canvas || !stage) return;
  const context = canvas.getContext('2d');
  if (!context) return;

  const pointCount = 74;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const points = Array.from({ length: pointCount }, (_, index) => {
    const y = 1 - ((index + .5) / pointCount) * 2;
    const radius = Math.sqrt(1 - y * y);
    const angle = index * goldenAngle;
    return { x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius };
  });

  let width = 0;
  let height = 0;
  let elapsed = 0;
  let frame = 0;
  const resize = () => {
    const bounds = stage.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = bounds.width; height = bounds.height;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const render = () => {
    context.clearRect(0, 0, width, height);
    if (!reducedMotion) elapsed += .0032;
    const radius = Math.min(width, height) * .37;
    const centerX = width * .51;
    const centerY = height * .48;
    const rotationY = elapsed + pointer.x * .38;
    const rotationX = -.16 + pointer.y * .26;
    const cosY = Math.cos(rotationY), sinY = Math.sin(rotationY);
    const cosX = Math.cos(rotationX), sinX = Math.sin(rotationX);
    const projected = points.map((point) => {
      const rotatedX = point.x * cosY - point.z * sinY;
      const rotatedZ = point.x * sinY + point.z * cosY;
      const rotatedY = point.y * cosX - rotatedZ * sinX;
      const finalZ = point.y * sinX + rotatedZ * cosX;
      const perspective = 1 + finalZ * .16;
      return { x: centerX + rotatedX * radius * perspective, y: centerY + rotatedY * radius * perspective, z: finalZ };
    });

    for (let first = 0; first < projected.length; first += 1) {
      for (let second = first + 1; second < projected.length; second += 1) {
        const source = points[first], target = points[second];
        const distance = Math.hypot(source.x - target.x, source.y - target.y, source.z - target.z);
        if (distance > .48) continue;
        const front = Math.max(0, (projected[first].z + projected[second].z + 2) / 4);
        context.beginPath(); context.moveTo(projected[first].x, projected[first].y); context.lineTo(projected[second].x, projected[second].y);
        context.strokeStyle = `rgba(69,211,255,${.035 + front * .16})`; context.lineWidth = .7; context.stroke();
      }
    }

    [...projected].sort((a, b) => a.z - b.z).forEach((point, index) => {
      const front = (point.z + 1) / 2;
      const pulse = reducedMotion ? 1 : .82 + Math.sin(elapsed * 8 + index) * .18;
      context.beginPath(); context.arc(point.x, point.y, 1.25 + front * 2.1 * pulse, 0, Math.PI * 2);
      context.fillStyle = index % 9 === 0 ? `rgba(255,190,92,${.45 + front * .5})` : `rgba(102,232,255,${.2 + front * .75})`;
      context.fill();
    });
    if (!reducedMotion) frame = requestAnimationFrame(render);
  };

  const resizeObserver = new ResizeObserver(() => { resize(); if (reducedMotion) render(); });
  resizeObserver.observe(stage); resize(); render();
  window.addEventListener('pagehide', () => cancelAnimationFrame(frame), { once: true });
})();

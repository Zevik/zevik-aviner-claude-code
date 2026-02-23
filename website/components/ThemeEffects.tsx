'use client';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

/* ─── Helpers ─────────────────────────────────────────────────────── */

function addRevealObserver(className: string): IntersectionObserver {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('h1,h2,h3,p,.card,section').forEach((el, i) => {
    el.classList.add(className);
    (el as HTMLElement).style.transitionDelay = `${i * 0.04}s`;
    observer.observe(el);
  });
  return observer;
}

function removeRevealClasses(className: string) {
  document.querySelectorAll(`.${className}`).forEach((el) => {
    el.classList.remove(className, 'revealed');
    (el as HTMLElement).style.transitionDelay = '';
  });
}

/* ─── ANIME: Parallax + blur reveal + crosshair cursor ───────────── */
function setupAnime(): () => void {
  document.body.style.cursor = 'crosshair';

  const observer = addRevealObserver('theme-reveal-blur');

  function onScroll() {
    const y = window.scrollY;
    document.querySelectorAll<HTMLElement>('h1,h2,.card').forEach((el) => {
      const factor = 0.08;
      el.style.transform = `translateY(${y * factor}px)`;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  return () => {
    document.body.style.cursor = '';
    window.removeEventListener('scroll', onScroll);
    observer.disconnect();
    removeRevealClasses('theme-reveal-blur');
    document.querySelectorAll<HTMLElement>('h1,h2,.card').forEach((el) => {
      el.style.transform = '';
    });
  };
}

/* ─── FLUXUS: Staggered title delays ─────────────────────────────── */
function setupFluxus(): () => void {
  const titles = document.querySelectorAll<HTMLElement>('h1,h2,h3');
  titles.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transition = `opacity 0.6s ease ${i * 0.15}s`;
    requestAnimationFrame(() => { el.style.opacity = '1'; });
  });

  return () => {
    titles.forEach((el) => {
      el.style.opacity = '';
      el.style.transition = '';
    });
  };
}

/* ─── ACTION PAINTING: floating paint splatters ──────────────────── */
function setupAction(): () => void {
  const colors = ['#ef4444', '#3b82f6', '#f59e0b', '#10b981', '#8b5cf6'];
  const splatters: HTMLElement[] = [];

  for (let i = 0; i < 8; i++) {
    const el = document.createElement('div');
    el.className = 'paint-splatter';
    const size = 40 + Math.random() * 120;
    el.style.cssText = `
      width:${size}px; height:${size}px;
      background:${colors[i % colors.length]};
      left:${Math.random() * 90}vw;
      top:${Math.random() * 80}vh;
      animation-delay:${Math.random() * 6}s;
      animation-duration:${6 + Math.random() * 6}s;
      border-radius:${30 + Math.random() * 40}% ${60 + Math.random() * 30}% ${40 + Math.random() * 40}% ${50 + Math.random() * 30}%;
      filter:blur(${2 + Math.random() * 4}px);
    `;
    document.body.appendChild(el);
    splatters.push(el);
  }

  return () => {
    splatters.forEach((el) => el.remove());
  };
}

/* ─── OUTSIDER: harsh parallax + aggressive fade-in-up ──────────── */
function setupOutsider(): () => void {
  const observer = addRevealObserver('theme-reveal');

  function onScroll() {
    const y = window.scrollY;
    document.querySelectorAll<HTMLElement>('.card,section').forEach((el) => {
      el.style.transform = `translateY(${y * 0.12}px) skewY(${Math.sin(y * 0.002) * 0.5}deg)`;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', onScroll);
    observer.disconnect();
    removeRevealClasses('theme-reveal');
    document.querySelectorAll<HTMLElement>('.card,section').forEach((el) => {
      el.style.transform = '';
    });
  };
}

/* ─── ETCHING: slow IntersectionObserver reveal ─────────────────── */
function setupEtching(): () => void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, i * 120);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('h1,h2,h3,p,.card').forEach((el) => {
    el.classList.add('theme-reveal');
    observer.observe(el);
  });

  return () => {
    observer.disconnect();
    removeRevealClasses('theme-reveal');
  };
}

/* ─── INSULAR: slow parallax "scroll scroll" ─────────────────────── */
function setupInsular(): () => void {
  function onScroll() {
    const y = window.scrollY;
    const main = document.querySelector<HTMLElement>('main');
    if (main) main.style.transform = `translateY(${y * 0.04}px)`;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', onScroll);
    const main = document.querySelector<HTMLElement>('main');
    if (main) main.style.transform = '';
  };
}

/* ─── NAIVE: Staggered spring bounce reveal ─────────────────────── */
function setupNaive(): () => void {
  const observer = addRevealObserver('theme-reveal-bounce');

  return () => {
    observer.disconnect();
    removeRevealClasses('theme-reveal-bounce');
  };
}

/* ─── POP ART: custom circle cursor + ben-day dots ──────────────── */
function setupPopart(): () => void {
  const cursor = document.createElement('div');
  cursor.className = 'popart-cursor';
  document.body.appendChild(cursor);

  const dots = document.createElement('div');
  dots.className = 'ben-day-dots';
  document.body.appendChild(dots);

  function onMove(e: MouseEvent) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }

  document.body.style.cursor = 'none';
  document.addEventListener('mousemove', onMove);

  return () => {
    document.body.style.cursor = '';
    document.removeEventListener('mousemove', onMove);
    cursor.remove();
    dots.remove();
  };
}

/* ─── FAUVISM: abstract animated shapes ─────────────────────────── */
function setupFauvism(): () => void {
  const colors = ['#e74c3c', '#f39c12', '#27ae60', '#8e44ad', '#e67e22', '#2ecc71'];
  const container = document.createElement('div');
  container.className = 'fauvism-shapes';
  document.body.appendChild(container);

  const shapes: HTMLElement[] = [];
  for (let i = 0; i < 6; i++) {
    const el = document.createElement('div');
    el.className = 'fauvism-shape';
    const size = 200 + Math.random() * 300;
    el.style.cssText = `
      width:${size}px; height:${size}px;
      background:${colors[i % colors.length]};
      left:${Math.random() * 80}vw;
      top:${Math.random() * 80}vh;
    `;
    container.appendChild(el);
    shapes.push(el);
  }

  const interval = setInterval(() => {
    shapes.forEach((el) => {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const color = colors[Math.floor(Math.random() * colors.length)];
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.background = color;
    });
  }, 5000);

  return () => {
    clearInterval(interval);
    container.remove();
  };
}

/* ─── UKIYO-E: slow parallax + cursor shrink on hover ───────────── */
function setupUkiyoe(): () => void {
  const cursor = document.createElement('div');
  cursor.className = 'ukiyoe-cursor';
  document.body.appendChild(cursor);

  function onMove(e: MouseEvent) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }

  function onEnterHoverable() { cursor.classList.add('hover'); }
  function onLeaveHoverable() { cursor.classList.remove('hover'); }

  document.addEventListener('mousemove', onMove);
  document.querySelectorAll<HTMLElement>('button,a').forEach((el) => {
    el.addEventListener('mouseenter', onEnterHoverable);
    el.addEventListener('mouseleave', onLeaveHoverable);
  });

  function onScroll() {
    const y = window.scrollY;
    document.querySelectorAll<HTMLElement>('h1,h2,.card').forEach((el) => {
      el.style.transform = `translateY(${y * 0.03}px)`;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  return () => {
    cursor.remove();
    document.removeEventListener('mousemove', onMove);
    document.querySelectorAll<HTMLElement>('button,a').forEach((el) => {
      el.removeEventListener('mouseenter', onEnterHoverable);
      el.removeEventListener('mouseleave', onLeaveHoverable);
    });
    window.removeEventListener('scroll', onScroll);
    document.querySelectorAll<HTMLElement>('h1,h2,.card').forEach((el) => {
      el.style.transform = '';
    });
  };
}

/* ─── MAIN COMPONENT ────────────────────────────────────────────── */
const EFFECT_MAP: Record<string, () => () => void> = {
  anime:    setupAnime,
  fluxus:   setupFluxus,
  action:   setupAction,
  outsider: setupOutsider,
  etching:  setupEtching,
  insular:  setupInsular,
  naive:    setupNaive,
  popart:   setupPopart,
  fauvism:  setupFauvism,
  ukiyoe:   setupUkiyoe,
};

export default function ThemeEffects() {
  const { theme } = useTheme();

  useEffect(() => {
    if (!theme) return;
    const setup = EFFECT_MAP[theme];
    if (!setup) return;

    // Small delay so the DOM has re-rendered with the new theme
    const timer = setTimeout(() => {
      const cleanup = setup();
      return cleanup;
    }, 80);

    return () => {
      clearTimeout(timer);
    };
  }, [theme]);

  return null;
}

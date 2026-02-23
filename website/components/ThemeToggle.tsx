'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect, useRef } from 'react';

const THEMES = [
  { id: 'naive',    label: 'Naive Art',          emoji: '🌻' },
  { id: 'anime',    label: '80s Anime',           emoji: '🌸' },
  { id: 'fluxus',   label: 'Fluxus',              emoji: '⚡' },
  { id: 'action',   label: 'Action Painting',     emoji: '🎨' },
  { id: 'outsider', label: 'Outsider Art',         emoji: '✏️' },
  { id: 'etching',  label: 'Etching',             emoji: '🖤' },
  { id: 'insular',  label: 'Insular Art',         emoji: '📜' },
  { id: 'popart',   label: 'Pop Art',             emoji: '💥' },
  { id: 'fauvism',  label: 'Fauvism',             emoji: '🌈' },
  { id: 'ukiyoe',   label: 'Ukiyo-e',             emoji: '🏔️' },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted) return null;

  const current = THEMES.find(t => t.id === theme) ?? THEMES[0];

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '1.5rem',
        zIndex: 9999,
        direction: 'ltr',
      }}
    >
      {/* Dropdown list */}
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: '3.5rem',
            left: 0,
            background: 'var(--card-bg, #fff)',
            border: '2px solid var(--accent-color, #ccc)',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            minWidth: '200px',
          }}
        >
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTheme(t.id); setOpen(false); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                width: '100%',
                padding: '0.6rem 1rem',
                textAlign: 'left',
                background: theme === t.id ? 'var(--accent-color, #eee)' : 'transparent',
                color: theme === t.id ? '#fff' : 'var(--text-color, #000)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: theme === t.id ? 700 : 400,
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => {
                if (theme !== t.id) (e.currentTarget as HTMLButtonElement).style.background = 'var(--muted, #f5f5f5)';
              }}
              onMouseLeave={e => {
                if (theme !== t.id) (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{t.emoji}</span>
              {t.label}
              {theme === t.id && <span style={{ marginRight: 'auto', marginLeft: '0.5rem' }}>✓</span>}
            </button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        title="שנה עיצוב"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.6rem 1rem',
          background: 'var(--accent-color, #2563eb)',
          color: '#fff',
          border: 'none',
          borderRadius: '999px',
          cursor: 'pointer',
          boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
          fontSize: '0.85rem',
          fontWeight: 600,
          transition: 'transform 0.15s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
      >
        <span>{current.emoji}</span>
        <span>{current.label}</span>
        <span style={{ opacity: 0.8, fontSize: '0.7rem' }}>{open ? '▼' : '▲'}</span>
      </button>
    </div>
  );
}

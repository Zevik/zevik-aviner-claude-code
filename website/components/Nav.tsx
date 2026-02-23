'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [extOpen, setExtOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-blue-600 hover:text-blue-700 transition-colors">
            זאביק אבינר
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/">ראשי</NavLink>
            <NavLink href="/about">אודות</NavLink>
            <NavLink href="/services">שירותים</NavLink>
            <NavLink href="/advertising">משרד פרסום</NavLink>
            <NavLink href="/communities">קהילות</NavLink>

            {/* Extensions Dropdown */}
            <div className="relative" onMouseEnter={() => setExtOpen(true)} onMouseLeave={() => setExtOpen(false)}>
              <button className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium flex items-center gap-1">
                תוספי כרום
                <svg className={`w-4 h-4 transition-transform ${extOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {extOpen && (
                <div className="absolute top-full right-0 bg-white border border-gray-100 rounded-xl shadow-lg py-2 min-w-48 z-50">
                  <DropLink href="/extensions/gmac">GMAC</DropLink>
                  <DropLink href="/extensions/groups-monitoring">GroupsMonitoring</DropLink>
                  <DropLink href="/extensions/reply-comments">ReplyComments</DropLink>
                </div>
              )}
            </div>

            <NavLink href="/blog">עלה לי בראש</NavLink>
            <NavLink href="/contact">צור קשר</NavLink>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="תפריט"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-2">
            <MobileLink href="/" onClick={() => setMenuOpen(false)}>ראשי</MobileLink>
            <MobileLink href="/about" onClick={() => setMenuOpen(false)}>אודות</MobileLink>
            <MobileLink href="/services" onClick={() => setMenuOpen(false)}>שירותים</MobileLink>
            <MobileLink href="/advertising" onClick={() => setMenuOpen(false)}>משרד פרסום</MobileLink>
            <MobileLink href="/communities" onClick={() => setMenuOpen(false)}>קהילות</MobileLink>
            <div className="px-3 py-1 text-xs text-gray-400 font-semibold mt-2">תוספי כרום</div>
            <MobileLink href="/extensions/gmac" onClick={() => setMenuOpen(false)} sub>GMAC</MobileLink>
            <MobileLink href="/extensions/groups-monitoring" onClick={() => setMenuOpen(false)} sub>GroupsMonitoring</MobileLink>
            <MobileLink href="/extensions/reply-comments" onClick={() => setMenuOpen(false)} sub>ReplyComments</MobileLink>
            <MobileLink href="/blog" onClick={() => setMenuOpen(false)}>עלה לי בראש</MobileLink>
            <MobileLink href="/contact" onClick={() => setMenuOpen(false)}>צור קשר</MobileLink>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium">
      {children}
    </Link>
  );
}

function DropLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick, sub }: { href: string; children: React.ReactNode; onClick: () => void; sub?: boolean }) {
  return (
    <Link href={href} onClick={onClick} className={`block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium ${sub ? 'px-6' : 'px-3'}`}>
      {children}
    </Link>
  );
}

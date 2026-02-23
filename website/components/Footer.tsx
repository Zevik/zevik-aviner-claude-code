import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">זאביק אבינר</h3>
            <p className="text-sm leading-relaxed">מומחה AI, טכנולוגיה וקהילות. ירושלמי. סקרן במקצוע.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">ניווט</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">אודות</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">שירותים</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">עלה לי בראש</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">צור קשר</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">קישורים</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://linkedin.com/in/zevikaviner" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/zevikaviner" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://facebook.com/zevik.aviner" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://jerus.city" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ג׳רוזסיטי</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} זאביק אבינר · כל הזכויות שמורות
        </div>
      </div>
    </footer>
  );
}

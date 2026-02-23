import Link from 'next/link';
import type { Metadata } from 'next';
import Accordion from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'GMAC – שומר התשובות לשאלות הכניסה לקבוצה',
  description: 'התוסף הפופולרי למנהלי ומנהלות קבוצות פייסבוק – שומר תשובות אוטומטית לגוגל שיטס',
};

const faqs = [
  { q: 'האם התוסף עובד עם כל קבוצות הפייסבוק?', a: 'כן, התוסף עובד עם כל קבוצות הפייסבוק שיש לך הרשאות ניהול בהן.' },
  { q: 'איפה נשמרות התשובות?', a: 'התשובות נשמרות ישירות לגוגל שיטס שאתה מגדיר – אין שמירה בשרתים חיצוניים.' },
  { q: 'האם יש גרסת ניסיון?', a: 'כן! 5 ימי ניסיון חינם, ללא צורך בכרטיס אשראי.' },
  { q: 'איך מבטלים את המנוי?', a: 'ביטול בכל עת דרך ממשק הניהול. אין עמלות ביטול.' },
  { q: 'האם התוסף עובד על מובייל?', a: 'התוסף מיועד לדפדפן Chrome במחשב בלבד.' },
];

export default function GmacPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">GMAC</h1>
        <p className="text-xl text-blue-600 font-semibold mb-6">שומר התשובות לשאלות הכניסה לקבוצה</p>
        <p className="text-lg text-gray-600 mb-8">התוסף הפופולרי למנהלי ומנהלות קבוצות פייסבוק</p>
        <a
          href="https://chromewebstore.google.com/detail/gmac—group-answers-coll/omefdeapnicniondiefejngddkjikegn"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg px-8 py-4"
          aria-label="התקן GMAC מחנות כרום"
        >
          🔧 התקן עכשיו – 5 ימים חינם
        </a>
      </div>

      {/* איך עובד */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">איך זה עובד?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { num: '1', title: 'התקנה בלחיצה אחת', desc: 'מתקינים את התוסף מחנות כרום – תהליך של דקה' },
            { num: '2', title: 'כפתורים חדשים', desc: 'כפתורים חדשים מופיעים מעל אישורי החברות בפייסבוק' },
            { num: '3', title: 'לחץ Collect', desc: 'כל התשובות עוברות אוטומטית לגוגל שיטס שלך' },
          ].map(step => (
            <div key={step.num} className="card p-7 text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4">{step.num}</div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* יתרונות */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">למה כדאי?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '⏰', title: 'חיסכון בזמן', desc: 'אין יותר העתקה ידנית. הכל קורה אוטומטית.' },
            { icon: '💾', title: 'שמירה מיידית', desc: 'כל תשובה נשמרת ברגע שלוחצים Collect.' },
            { icon: '🛡️', title: 'גיבוי מאובטח', desc: 'הכל שמור בגוגל שיטס שלך – בשליטה מלאה.' },
          ].map(item => (
            <div key={item.title} className="flex gap-4 p-6 bg-blue-50 rounded-xl">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* וידאו */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">סרטוני הדגמה</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500 mb-3 font-medium">הדגמת שימוש</p>
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-900">
              <iframe
                src="https://www.youtube.com/embed/mLnXlkmy84Q"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="GMAC הדגמה"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-3 font-medium">סרטון התקנה</p>
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-900">
              <iframe
                src="https://www.youtube.com/embed/-yxpUam5LRA"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="GMAC התקנה"
              />
            </div>
          </div>
        </div>
      </section>

      {/* מחיר */}
      <section className="mb-16">
        <div className="card p-8 text-center max-w-sm mx-auto">
          <div className="text-5xl font-black text-blue-600 mb-2">₪35</div>
          <div className="text-gray-500 mb-4">לחודש</div>
          <ul className="text-right space-y-2 mb-6 text-sm text-gray-700">
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 5 ימי ניסיון חינם</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> ביטול בכל עת</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> גישה לכל העדכונים</li>
          </ul>
          <a
            href="https://chromewebstore.google.com/detail/gmac—group-answers-coll/omefdeapnicniondiefejngddkjikegn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
            aria-label="התקן GMAC"
          >
            התחל ניסיון חינם
          </a>
        </div>
      </section>

      {/* שאלות ותשובות */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">שאלות נפוצות</h2>
        <Accordion items={faqs} />
      </section>

      {/* צור קשר */}
      <section className="bg-gray-50 rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold mb-4 text-gray-900">יש שאלות? דבר איתנו</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/972546609385" target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="וואטסאפ">💬 WhatsApp</a>
          <a href="mailto:fb.tools.zevik@gmail.com" className="btn-secondary" aria-label="אימייל">📧 fb.tools.zevik@gmail.com</a>
        </div>
      </section>
    </div>
  );
}

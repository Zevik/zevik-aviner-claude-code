import type { Metadata } from 'next';
import Accordion from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'ReplyComments – מכונת התגובות',
  description: 'מגיבים לכל התגובות בכל פוסט שתבחרו – תוסף כרום למנהלי פייסבוק',
};

const faqs = [
  { q: 'האם התגובות נראות טבעיות?', a: 'כן, התוסף מגיב בקצב אנושי שאתה קובע, עם השהיות בין התגובות.' },
  { q: 'האם יש סיכון לחסימה מפייסבוק?', a: 'התוסף כולל הגנה מפני חסימה – קצב ניתן לכוונון, והפעולה נראית אנושית.' },
  { q: 'מה ניתן לכתוב בתגובות?', a: 'כל טקסט שתרצה – תגובה אחת לכולם, או רשימת תגובות מגוונות.' },
  { q: 'כמה תגובות אפשר לשלוח?', a: 'תלוי בהגדרות הקצב שתגדיר. מאות תגובות לפוסט אחד אפשריות.' },
  { q: 'מה מדיניות הביטול?', a: 'ביטול עד 24 שעות לפני החידוש החודשי.' },
];

export default function ReplyCommentsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">ReplyComments</h1>
        <p className="text-xl text-blue-600 font-semibold mb-6">מכונת התגובות</p>
        <p className="text-lg text-gray-600 mb-8">מגיבים לכל התגובות בכל פוסט שתבחרו</p>
        <a
          href="https://chromewebstore.google.com/detail/replyallcomments/nndlamggeoglkbnpgipbhciechdnbpcg"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg px-8 py-4"
          aria-label="התקן ReplyComments"
        >
          🔧 התקן עכשיו
        </a>
      </div>

      {/* איך עובד */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">איך זה עובד?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { num: '1', title: 'בוחרים פוסט', desc: 'בוחרים את הפוסט שרוצים להגיב עליו' },
            { num: '2', title: 'כותבים תגובות', desc: 'כותבים תגובה אחת או רשימת תגובות מגוונות' },
            { num: '3', title: 'התוסף עובד', desc: 'התוסף מגיב לכולם בקצב שאתם קובעים' },
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
            { icon: '⚡', title: 'מאות תגובות', desc: 'בלחיצת כפתור אחת, תוך דקות.' },
            { icon: '🛡️', title: 'הגנה מפני חסימה', desc: 'קצב ניתן לכוונון לפעולה טבעית ובטוחה.' },
            { icon: '🎛️', title: 'גמישות מלאה', desc: 'אתה קובע את הקצב, התגובות, והעיתוי.' },
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
        <h2 className="text-2xl font-bold mb-6 text-gray-900">סרטון הדגמה</h2>
        <div className="aspect-video rounded-xl overflow-hidden bg-gray-900 max-w-2xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/4WYeRXCdE_o"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="ReplyComments הדגמה"
          />
        </div>
      </section>

      {/* מחיר */}
      <section className="mb-16">
        <div className="card p-8 text-center max-w-sm mx-auto">
          <div className="text-5xl font-black text-blue-600 mb-2">₪299</div>
          <div className="text-gray-500 mb-4">לחודש</div>
          <ul className="text-right space-y-2 mb-6 text-sm text-gray-700">
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> ביטול עד 24 שעות לפני חידוש</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> גישה לכל העדכונים</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> תמיכה אישית</li>
          </ul>
          <a
            href="https://chromewebstore.google.com/detail/replyallcomments/nndlamggeoglkbnpgipbhciechdnbpcg"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
            aria-label="התקן ReplyComments"
          >
            התקן עכשיו
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

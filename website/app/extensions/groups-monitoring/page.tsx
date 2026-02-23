import type { Metadata } from 'next';
import Accordion from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'GroupsMonitoring – סורק קבוצות, מוצא לקוחות',
  description: 'הכלי החזק ביותר לניטור קבוצות פייסבוק לעסקים ונותני שירות',
};

const faqs = [
  { q: 'איך התוסף מוצא פוסטים רלוונטיים?', a: 'מגדירים מילות חיפוש וקבוצות לסריקה. התוסף סורק אוטומטית ומתעד כל פוסט שמכיל את המילים שהגדרת.' },
  { q: 'האם הסריקה רצה גם כשהמחשב כבוי?', a: 'אפשר לרכוש שירות מחשב מרוחק ב-₪100 נוסף לחודש שמריץ את הסריקה 24/7.' },
  { q: 'לאן עוברים הפוסטים שנמצאו?', a: 'לגוגל שיטס שאתה מגדיר + אפשרות לקבל התראה במייל על כל פוסט חדש.' },
  { q: 'כמה קבוצות אפשר לסרוק?', a: 'אין הגבלה על מספר הקבוצות או מילות החיפוש.' },
  { q: 'האם אפשר לבטל בכל עת?', a: 'כן, ביטול בכל עת ללא עמלות.' },
];

export default function GroupsMonitoringPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">GroupsMonitoring</h1>
        <p className="text-xl text-blue-600 font-semibold mb-6">סורק קבוצות, מוצא לקוחות</p>
        <p className="text-lg text-gray-600 mb-8">הכלי החזק ביותר לניטור קבוצות פייסבוק לעסקים ונותני שירות</p>
        <a
          href="https://chromewebstore.google.com/detail/groupsmonitoring/hhkacbdgmmhlbfkfmlddnbaimkopgibk"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg px-8 py-4"
          aria-label="התקן GroupsMonitoring"
        >
          🔧 התקן עכשיו
        </a>
      </div>

      {/* איך עובד */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">איך זה עובד?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { num: '1', title: 'הגדרת חיפוש', desc: 'מגדירים מילות חיפוש וקבוצות לסריקה' },
            { num: '2', title: 'סריקה 24/7', desc: 'התוסף סורק את הקבוצות סביב השעון' },
            { num: '3', title: 'תיעוד אוטומטי', desc: 'כל פוסט רלוונטי עובר לגוגל שיטס + התראה במייל' },
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
            { icon: '💰', title: 'לא מפספסים הזדמנות', desc: 'כל בקשה רלוונטית מגיעה אליך – גם בלילה.' },
            { icon: '🕐', title: 'עובד סביב השעון', desc: 'הכלי לא ישן. אתה כן.' },
            { icon: '📊', title: 'הכל מתועד', desc: 'כל הפוסטים מסודרים בגוגל שיטס לניתוח.' },
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
            src="https://www.youtube.com/embed/-geuXKKxWSg"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="GroupsMonitoring הדגמה"
          />
        </div>
      </section>

      {/* מחיר */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="card p-8 text-center">
            <div className="text-4xl font-black text-blue-600 mb-2">₪349</div>
            <div className="text-gray-500 mb-4">לחודש</div>
            <ul className="text-right space-y-2 mb-6 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> ביטול בכל עת</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> סריקה ממחשב אישי</li>
            </ul>
            <a href="https://chromewebstore.google.com/detail/groupsmonitoring/hhkacbdgmmhlbfkfmlddnbaimkopgibk" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center" aria-label="התקן GroupsMonitoring">התקן עכשיו</a>
          </div>
          <div className="card p-8 text-center border-2 border-blue-500">
            <div className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full inline-block mb-3">פופולרי</div>
            <div className="text-4xl font-black text-blue-600 mb-2">₪449</div>
            <div className="text-gray-500 mb-4">לחודש</div>
            <ul className="text-right space-y-2 mb-6 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> ביטול בכל עת</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> מחשב מרוחק 24/7</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> סריקה גם כשהמחשב כבוי</li>
            </ul>
            <a href="https://wa.me/972546609385" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center" aria-label="הזמן עם מחשב מרוחק">הזמן עם מחשב מרוחק</a>
          </div>
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

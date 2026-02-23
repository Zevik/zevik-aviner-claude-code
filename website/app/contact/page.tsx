'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">דבר איתי</h1>
      <p className="text-xl text-blue-600 font-medium mb-10">שאלה, רעיון, שיתוף פעולה – אשמח לשמוע</p>

      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <div className="text-4xl mb-3">✅</div>
          <h2 className="font-bold text-xl mb-2 text-green-800">ההודעה נשלחה!</h2>
          <p className="text-green-700">אחזור אליך בהקדם. בדרך כלל תוך יום עסקים.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">שם</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="שם מלא"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">אימייל</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="your@email.com"
              dir="ltr"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">נושא</label>
            <select
              value={form.subject}
              onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">בחר נושא</option>
              <option value="ייעוץ AI">ייעוץ AI</option>
              <option value="הרצאה">הרצאה</option>
              <option value="פרסום">פרסום</option>
              <option value="תוספי כרום">תוספי כרום</option>
              <option value="אחר">אחר</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">הודעה</label>
            <textarea
              required
              value={form.message}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
              placeholder="כתוב את ההודעה שלך..."
            />
          </div>

          {status === 'error' && (
            <p className="text-red-600 text-sm">שגיאה בשליחה. אנסה שוב או שלח מייל ישירות.</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-50"
            aria-label="שלח הודעה"
          >
            {status === 'sending' ? 'שולח...' : 'שלח'}
          </button>
        </form>
      )}

      {/* ערוצי קשר */}
      <div className="mt-12 p-6 bg-gray-50 rounded-xl">
        <h3 className="font-bold text-lg mb-4 text-gray-900">ערוצי קשר נוספים</h3>
        <div className="space-y-3">
          <a href="mailto:zaviner@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
            <span>📧</span>
            <span>zaviner@gmail.com</span>
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-4">בדרך כלל עונה תוך יום עסקים</p>
      </div>
    </div>
  );
}

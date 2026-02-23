'use client';
import { useState } from 'react';

interface AccordionItem {
  q: string;
  a: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-right px-6 py-4 flex items-center justify-between font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 mr-3 ${open === i ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-6 py-4 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

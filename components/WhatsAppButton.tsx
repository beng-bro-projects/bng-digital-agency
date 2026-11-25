"use client";
import { useEffect, useState } from 'react';

const MESSAGE = encodeURIComponent("Bonjour BNG, j'aimerais un devis pour un projet.");

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/22391220321?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp avec BNG Digital Agency"
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] text-black font-bold shadow-[0_10px_30px_rgba(37,211,102,0.35)] pl-3 pr-4 py-3 transition-all duration-300 hover:scale-105 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.98 1-3.63-.24-.37a9.8 9.8 0 0 1-1.5-5.22c0-5.42 4.41-9.83 9.84-9.83a9.77 9.77 0 0 1 9.83 9.84c0 5.42-4.41 9.83-9.84 9.83zm8.37-18.2A11.76 11.76 0 0 0 12.04.13C5.5.13.18 5.45.18 11.99c0 2.09.55 4.13 1.59 5.93L.08 24l6.23-1.63a11.84 11.84 0 0 0 5.73 1.46h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.48-8.39z" />
      </svg>
      <span className="text-sm">Devis WhatsApp</span>
    </a>
  );
}

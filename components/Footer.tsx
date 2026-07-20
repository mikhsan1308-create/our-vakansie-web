import React from 'react';

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <img 
                src="/logo-brand-white.png" 
                alt="Our Vakansie Logo"
                width="200"            
                height="80"           
                // Kita besarkan w- nya (lebar total file gambar) agar lingkaran di dalamnya kelihatan jelas
                className="w-32 h-auto md:w-44 object-contain"
            />
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">PT. GUSTI UTAMA SEJAHTERA</p>
          <p className="text-sm leading-relaxed">
            "be more, vacation more" — Bersama vakansie, setiap perjalanan bukan hanya sekadar liburan, tetapi sebuah cerita indah yang akan selalu dikenang.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold text-base mb-4">Layanan Tour</h3>
          <ul className="space-y-2 text-sm">
            <li>• Private & Open Trip</li>
            <li>• Government & Education Trip</li>
            <li>• Employee Gathering</li>
            <li>• Transportation Services</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-base mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              📍 <span>Jl. H. Mukti, Jl. Buana Ciwastra Blok A1 no. 2, Margasari, Kec. Buah Batu, Kota Bandung, Jawa Barat, 40286.</span>
            </li>
            <li>📞 Phone: 0811-2111-2023</li>
            <li>✉️ Email: ourvakansie@gmail.com</li>
            <li className="flex items-center gap-2">
                <span>📸</span> 
                <a href="https://instagram.com/ourvakansie" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                    Instagram: @ourvakansie
                </a>
                </li>
                <li className="flex items-center gap-2">
                <span>🎵</span> 
                <a href="https://tiktok.com/@ourvakansie" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                    TikTok: @ourvakansie
                </a>
                </li>
                <li className="flex items-center gap-2">
                <span>💬</span> 
                <a href="https://wa.me/6281121112023" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 font-medium transition-colors">
                    WhatsApp Chat
                </a>
                </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-slate-900 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Our Vakansie. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
import React from 'react';
import Link from 'next/link';

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* LOGO BRAND */}
        <Link href="/" className="flex flex-col">
          <span className="font-black text-2xl text-slate-900 tracking-tight">
            Our <span className="text-orange-500">Vakansie</span>
          </span>
          <span className="text-[9px] text-slate-500 font-semibold tracking-wider -mt-0.5 uppercase">
            PT. Gusti Utama Sejahtera
          </span>
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center space-x-8 font-semibold text-slate-600 text-sm">
          <Link href="/" className="hover:text-orange-500 transition">Home</Link>
          <a href="#about" className="hover:text-orange-500 transition">About</a>
          <a href="#service" className="hover:text-orange-500 transition">Service</a>
          <a href="#gallery" className="hover:text-orange-500 transition">Gallery</a>
          <a href="#team" className="hover:text-orange-500 transition">Team</a>
        </div>

        {/* BUTTON ACTION */}
        <div>
          <a 
            href="https://wa.me/6281121112023" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition shadow-md inline-block"
          >
            Hubungi Kami 📞
          </a>
        </div>
      </div>
    </nav>
  );
}
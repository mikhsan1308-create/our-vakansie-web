import React from 'react';
import Gallery from '@/components/Gallery';
import BookingForm from '@/components/BookingForm';

interface TourService {
  num: string;
  title: string;
  desc: string;
}

interface TeamMember {
  name: string;
  role: string;
}

export default function Home(): React.JSX.Element {
  const SERVICES: TourService[] = [
    { num: "01", title: "Private Trip", desc: "Disusun khusus untuk mereka yang mencari perjalanan yang dipersonalisasi dan intim." },
    { num: "02", title: "Open Trip", desc: "Cocok bagi wisatawan yang ingin bergabung dengan peserta lain dengan biaya lebih terjangkau." },
    { num: "03", title: "Government Trip", desc: "Melayani kebutuhan perjalanan instansi pemerintah dengan perencanaan profesional." },
    { num: "04", title: "Education Trip", desc: "Layanan perjalanan edukatif yang menggabungkan kegiatan belajar dan wisata secara interaktif." },
    { num: "05", title: "Employee Gathering", desc: "Program gathering, outing, dan team building perusahaan untuk meningkatkan kebersamaan." },
    { num: "06", title: "Transportation Services", desc: "Pilihan armada berkualitas mulai dari mobil mewah hingga Big Bus & Mini Bus." },
  ];

  const TEAM: TeamMember[] = [
    { name: "Dinda Allysa", role: "Founder" },
    { name: "Husni Rizallul M", role: "Field Supervisor" },
    { name: "Ikhsan F", role: "Tour Leader" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      
      {/* HERO */}
      <section className="relative h-[85vh] flex items-center bg-slate-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')" }}
        ></div>
        <div className="max-w-6xl mx-auto px-4 z-10 w-full">
          <p className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-3">SAATNYA LIBURAN, SAATNYA KITA</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
            JELAJAH INDONESIA <br/> BERSAMA <span className="text-orange-500">OUR VAKANSIE</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mb-8">
            Pintu gerbang menuju pengalaman perjalanan tak terlupakan. Kami menciptakan kisah penuh warna dan kenangan abadi.
          </p>
          <a href="#about" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-extrabold rounded-xl transition shadow-lg inline-block">
            Learn More ➔
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-bold text-xs uppercase tracking-wider">Selamat Datang</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 mb-6">Menciptakan Kisah Penuh Warna</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our Vakansie Tours berdiri sejak tahun 2023 dan resmi berbadan hukum di bawah naungan <strong>PT Gusti Utama Sejahtera</strong> pada tahun 2025.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Kami berkomitmen menghadirkan layanan wisata domestik dan internasional yang profesional, aman, dan terpercaya.
            </p>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-3xl border-l-8 border-orange-500">
            <div className="mb-6">
              <h3 className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-1">Our Vision</h3>
              <p className="text-sm text-slate-200">Menjadi pilihan utama layanan perjalanan wisata yang terpercaya dan inovatif bagi semua segmen pelanggan.</p>
            </div>
            <div>
              <h3 className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-1">Our Mission</h3>
              <p className="text-sm text-slate-300">Memberikan layanan perjalanan yang profesional, aman, nyaman, dan berorientasi pada kepuasan pelanggan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section id="service" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-wider">Layanan Terbaik Kami</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-1">Kami Dengan Bangga Menyajikan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((item: TourService, idx: number) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-500/30 transition shadow-sm hover:shadow-md">
                <div className="text-xs font-bold text-orange-500 bg-orange-50 w-8 h-8 rounded-lg flex items-center justify-center mb-4 font-mono">{item.num}</div>
                <h3 className="font-black text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Gallery />

      {/* TEAM */}
      <section id="team" className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-wider">Our Vakansie Team</span>
            <h2 className="text-3xl md:text-4xl font-black mt-1">Partner Vakansie Anda</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEAM.map((member: TeamMember, idx: number) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-slate-900">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-black">{member.name}</h3>
                <p className="text-xs text-orange-400 font-semibold mt-1 uppercase tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingForm /> {/* Taruh form di sini */}

    </div>
  );
}
import React from 'react';

interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
  tag: string;
}

export default function Gallery(): React.JSX.Element {
  const GALLERY_IMAGES: GalleryItem[] = [
    { id: 1, tag: "Private Trip", title: "Keseruan di Pantai Bali", imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80" },
    { id: 2, tag: "Open Trip", title: "Matahari Terbit di Bromo", imageUrl: "https://images.unsplash.com/photo-1565619109666-b8bfe0e95ceb?auto=format&fit=crop&w=600&q=80" },
    { id: 3, tag: "Gathering", title: "Team Building Perusahaan", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80" },
    { id: 4, tag: "Education", title: "Edukasi Budaya di Jogja", imageUrl: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=600&q=80" },
    { id: 5, tag: "Government", title: "Kunjungan Dinas & Studi Banding", imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80" },
    { id: 6, tag: "Private Trip", title: "Eksplorasi Keindahan Labuan Bajo", imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-500 font-bold text-xs uppercase tracking-wider">Dokumentasi Perjalanan</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-1 mb-4">Kisah Penuh Warna Bersama Kami</h2>
          <p className="text-slate-600 text-sm">Momen keseruan kawan vakansie menjelajahi destinasi impian mereka.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl h-80 shadow-md bg-slate-200">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-extrabold text-orange-400 uppercase tracking-widest bg-orange-500/10 px-2 py-1 rounded-md w-max border border-orange-500/20 mb-2">
                  {item.tag}
                </span>
                <h3 className="font-bold text-lg leading-snug">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
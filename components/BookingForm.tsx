'use client';

import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    paket: 'Paket Wisata Alam',
    jumlahPeserta: '1',
    tanggal: '',
    catatan: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Ganti nomor ini dengan nomor WhatsApp resmi Our Vakansie (gunakan kode negara, misal 62)
    const nomorWA = '6281234567890'; 
    
    // Menyusun teks pesan WhatsApp
    const teksPesan = `Halo Our Vakansie, saya ingin memesan paket wisata:%0A%0A` +
      `👤 *Nama:* ${formData.nama}%0A` +
      `📱 *No. WhatsApp:* ${formData.whatsapp}%0A` +
      `📦 *Paket:* ${formData.paket}%0A` +
      `👥 *Jumlah Peserta:* ${formData.jumlahPeserta} Orang%0A` +
      `📅 *Tanggal Keberangkatan:* ${formData.tanggal}%0A` +
      `📝 *Catatan Tambahan:* ${formData.catatan || '-'}`;

    // Membuka URL WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=${nomorWA}&text=${teksPesan}`, '_blank');
  };

  return (
    <section className="py-12 bg-gray-50" id="booking">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Formulir Pemesanan Trip</h2>
          <p className="text-gray-500 text-center text-sm mb-6">Silakan isi formulir di bawah ini untuk merencanakan liburan impian Anda.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Lengkap</label>
              <input type="text" name="nama" required value={formData.nama} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-black" placeholder="Contoh: Budi Santoso" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nomor WhatsApp</label>
              <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-black" placeholder="Contoh: 08123456xxx" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Pilih Paket</label>
                <select name="paket" value={formData.paket} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-black bg-white">
                  <option value="Paket Wisata Alam">Paket Wisata Alam</option>
                  <option value="Paket Open Trip">Paket Open Trip</option>
                  <option value="Custom Family Trip">Custom Family Trip</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Jumlah Peserta</label>
                <input type="number" name="jumlahPeserta" min="1" required value={formData.jumlahPeserta} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-black" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Tanggal Keberangkatan</label>
              <input type="date" name="tanggal" required value={formData.tanggal} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-black" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Catatan Tambahan (Opsional)</label>
              <textarea name="catatan" value={formData.catatan} onChange={handleChange} rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-black" placeholder="Misal: Request sewa kamera, hotel bintang 4, dll."></textarea>
            </div>

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95 text-center mt-4">
              🚀 Kirim Pesanan via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
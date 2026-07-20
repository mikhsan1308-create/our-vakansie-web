import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // 1. Judul Utama di Google (Gunakan Keyword yang Sering Dicari Orang)
  title: "Our Vakansie | Agen Tour & Travel Bandung Terbaik - PT. Gusti Utama Sejahtera",
  
  // 2. Deskripsi singkat di bawah judul Google (Gunakan max 150-160 karakter)
  description: "Biro perjalanan wisata resmi di Bandung. Menyediakan paket open trip, custom family trip, dan sewa kendaraan dengan layanan premium serta harga terbaik.",
  
  // 3. Kata Kunci untuk Mesin Pencari
  keywords: ["tour travel bandung", "paket wisata bandung", "open trip murah", "our vakansie", "pt gusti utama sejahtera", "sewa mobil bandung", "liburan indonesia"],
  
  // 4. Pengaturan Author & Pemilik Hak Cipta
  authors: [{ name: "PT. Gusti Utama Sejahtera" }],
  creator: "Our Vakansie",
  
  // 5. Open Graph (Biar Tampilan Preview saat di-share ke WhatsApp/Sosmed Keren)
  openGraph: {
    title: "Our Vakansie | Agen Tour & Travel Bandung Terbaik",
    description: "Rencanakan liburan impian Anda bersama kami. Layanan aman, tepercaya, dan berlegalitas hukum resmi.",
    url: "https://www.ourvakansie.com", // Ganti dengan domain Vercel atau domain resmi Anda
    siteName: "Our Vakansie",
    locale: "id_ID",
    type: "website",
  },

  // 6. Metadata Robot (Mengizinkan Google mengindeks seluruh halaman)
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
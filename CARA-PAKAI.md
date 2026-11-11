# Website Korwilcam Klambu — Panduan Pemakaian

Website statis (HTML/CSS/JS murni) untuk **Korwilcam Dinas Pendidikan Kecamatan Klambu, Kabupaten Grobogan**.
Pimpinan: **Aniek Septorini, S.Pd., SD** (NIP 197409092006042008).

## Cara Membuka

1. **Cara termudah**: klik dua kali `index.html` — website langsung terbuka di browser.
2. **Cara lebih baik** (disarankan, agar semua fitur stabil):
   - Install Python, lalu di folder ini jalankan: `python -m http.server 8080`
   - Buka browser ke `http://localhost:8080`

## Halaman

| Berkas | Isi |
|---|---|
| `index.html` | Beranda: hero, statistik, layanan, program, wilayah, berita terbaru |
| `profil.html` | Profil pimpinan, tugas & fungsi, visi misi, struktur, dasar hukum |
| `sekolah.html` | Data 40 satuan pendidikan (26 SD Negeri binaan) + pencarian & filter |
| `program.html` | Program kerja + kalender kegiatan TA 2026/2027 |
| `berita.html` | Berita kegiatan + pengumuman + agenda |
| `galeri.html` | Galeri kegiatan (lightbox; ilustrasi, siap diganti foto asli) |
| `unduhan.html` | Template dokumen kerja (DOCX/CSV) di folder `files/` |
| `kontak.html` | Kontak, jam layanan, peta, formulir (WhatsApp/email) |

## Yang Perlu Anda Sesuaikan (penting!)

1. **Kontak resmi** — `kontak.html` bagian bawah: ganti nomor WhatsApp & email di `window.KONTAK_KORWIL`.
   Juga ubah teks kontak di topbar dan kartu kontak.
2. **Foto pimpinan** — ganti `assets/img/avatar-pimpinan.svg` dengan foto asli (JPG/PNG),
   lalu ubah `src` gambar di `index.html` dan `profil.html`.
3. **Foto galeri** — ganti berkas di `assets/gallery/` dengan foto dokumentasi asli.
4. **Alamat kantor** — sesuaikan di `kontak.html` bila lokasi berbeda.
5. **Visi & misi / kalender** — sunting `profil.html` dan `program.html` sesuai program resmi.

## Data Sekolah

Data 40 satuan pendidikan diambil dari basis data Dapodik (via datapendidikan.com, kode kecamatan 031515)
per November 2026: 26 SD Negeri, 2 SMP Negeri, 3 MI/MIS, 2 MTs, 2 MA, 1 SMK, 3 TK/PAUD-Q.
Sumber referensi lain: referensi.data.kemendikdasmen.go.id, bukusekolah.id, klambu.kec.grobogan.go.id.

## Struktur Folder

```
├── index.html … kontak.html   → 8 halaman website
├── css/style.css              → desain (warna hijau-emas, motif kawung)
├── js/main.js                 → menu, filter sekolah, galeri, formulir
├── assets/img/                → logo, favicon, avatar
├── assets/gallery/            → ilustrasi galeri (SVG)
├── files/                     → dokumen unduhan (DOCX/CSV)
└── CARA-PAKAI.md              → file ini
```

## Publikasi Online

Semua berkas statis — dapat diunggah apa adanya ke hosting apa pun
(cPanel/Netlify/GitHub Pages/VPS). Tidak perlu database.

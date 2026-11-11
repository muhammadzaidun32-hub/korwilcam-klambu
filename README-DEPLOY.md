# Cara Meng-online-kan Website — GitHub + Vercel

Website ini statis (HTML/CSS/JS) sehingga hosting gratis di **Vercel** dengan
penyimpanan kode di **GitHub**. Ikuti langkah berikut **sekali saja** untuk
setup pertama. Setelah itu, setiap perubahan konten cukup lewat Halaman Admin
+ `PUBLISH.bat`.

> **Catatan:** akun GitHub dan Vercel harus dibuat/dimiliki oleh Anda (gratis).
> Login dan otorisasi hanya bisa dilakukan oleh pemilik akun.

---

## LANGKAH 1 — Buat akun (gratis)

1. **GitHub**: buka <https://github.com/signup> → daftar dengan email → verifikasi.
2. **Vercel**: buka <https://vercel.com/signup> → pilih **"Continue with GitHub"**
   agar langsung tersambung dengan akun GitHub yang baru dibuat.

## LANGKAH 2 — Buat repositori di GitHub

1. Login di github.com → klik tombol **+** (kanan atas) → **New repository**.
2. Repository name: `korwilcam-klambu`
3. Pilih **Public** atau **Private** (bebas).
4. **Jangan** centang "Add a README" → klik **Create repository**.
5. Catat **username GitHub Anda** (terlihat di pojok kiri atas).

## LANGKAH 3 — Sambungkan folder website ke GitHub

1. Buka folder website, klik dua kali **`PUBLISH.bat`**.
2. Saat pertama kali dijalankan, proses akan berhenti dengan pesan GAGAL —
   itu normal, karena file belum tahu username Anda:
   - Klik kanan **`PUBLISH.bat`** → **Edit**
   - Ganti `GANTI-USERNAME` dengan username GitHub Anda, simpan.
3. Jalankan lagi **`PUBLISH.bat`**.
   - Jika muncul jendela/blanko login GitHub di browser → **login** → izinkan.
   - Muncul "SELESAI!" → kode website sudah ada di GitHub. ✅

## LANGKAH 4 — Terbitkan lewat Vercel

1. Login di <https://vercel.com> → tombol **Add New…** → **Project**.
2. Di daftar **Import Git Repository**, pilih repo `korwilcam-klambu` → **Import**.
   (Jika tidak muncul, klik **Adjust GitHub App Permissions** → beri akses ke repo.)
3. Biarkan semua pengaturan **default** (Framework Preset: *Other*) → klik **Deploy**.
4. Tunggu ±1 menit → website ONLINE dengan alamat seperti
   `korwilcam-klambu.vercel.app`. ✅

Setiap kali `PUBLISH.bat` dijalankan lagi, Vercel **otomatis** memperbarui
website online tanpa perlu setup ulang.

## LANGKAH 5 (opsional) — Alamat domain sendiri

Di dashboard Vercel → project Anda → **Settings → Domains** → tambahkan
domain (mis. `korwilcamklambu.or.id`) lalu ikuti petunjuk pengaturan DNS.

---

## Rutinitas Harian (setelah setup)

1. Buka `admin.html` → masukkan password → edit konten (kontak, berita, visi-misi, dll).
2. Klik **Terapkan ke Pratinjau** → cek hasilnya di tab website.
3. Klik **Unduh site-config.js** → pindahkan file ke folder `js\` (timpa yang lama).
4. Jalankan **PUBLISH.bat** → selesai, website online versi baru.

## Jika ingin saya (asisten) yang mengerjakan semuanya

Alternatif tanpa klik manual: buat **token akses** dan berikan ke asisten di
percakapan ini, maka push + deploy dapat diotomatisasi:

- **GitHub**: github.com → Settings → Developer settings → Personal access
  tokens → **Fine-grained tokens** → Generate → centang akses repo
  `korwilcam-klambu` (permission Contents: Read and write).
- **Vercel**: vercel.com → Account Settings → **Tokens** → Create.

⚠️ Token setara password. Setelah selesai, hapus/cabut token tersebut dari
dashboard. Tanpa token pun tidak masalah — Langkah 1–4 di atas cukup dan aman.

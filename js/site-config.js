/* ============================================================
   KONFIGURASI SITUS — Korwilcam Klambu
   File inilah yang DIUBAH lewat Halaman Admin (admin.html).
   Alur kerja: edit di admin.html → klik "Unduh site-config.js"
   → timpa file ini → jalankan PUBLISH.bat (atau unggah ke hosting).
   ============================================================ */
window.SITE_CONFIG = {

  /* Password halaman admin (ganti agar aman) */
  adminPassword: "klambu2026",

  /* Profil pimpinan */
  pimpinan: {
    nama: "Aniek Septorini, S.Pd., SD",
    jabatan: "Korwilcam Dinas Pendidikan Kecamatan Klambu",
    nip: "197409092006042008",
    org: "Aniek Septorini, S.Pd., SD — Koordinator Wilayah Kecamatan jenjang SD"
  },

  /* Kontak & layanan */
  kontak: {
    wa: "6280000000000",
    waDisplay: "+62 8xx-xxxx-xxxx",
    email: "korwilcamklambu@gmail.com",
    jamRingkas: "Layanan: Senin–Jumat, 08.00–14.00 WIB",
    lokasi: "Kecamatan Klambu, Kabupaten Grobogan, Jawa Tengah",
    alamatCard: [
      "Korwilcam Dinas Pendidikan Kecamatan Klambu",
      "Jl. Raya Purwodadi–Kudus, Desa Klambu, Kec. Klambu",
      "Kabupaten Grobogan, Jawa Tengah 58154"
    ],
    alamatFooter: [
      "Korwilcam Dinas Pendidikan",
      "Kecamatan Klambu, Kabupaten Grobogan",
      "Jawa Tengah 58154"
    ],
    jam: [
      { hari: "Senin – Kamis", jam: "08.00 – 14.00 WIB" },
      { hari: "Jumat", jam: "08.00 – 11.00 WIB" },
      { hari: "Sabtu – Minggu", jam: "Tutup (darurat via WhatsApp)" }
    ]
  },

  /* Nilai bawaan yang masih contoh — catatan "(contoh…)" di halaman
     otomatis hilang ketika nilai aslinya sudah diisi di Admin */
  placeholders: {
    "kontak.wa": "6280000000000",
    "kontak.waDisplay": "+62 8xx-xxxx-xxxx",
    "kontak.email": "korwilcamklambu@gmail.com"
  },

  /* Visi & misi (halaman Profil) */
  visi: "“Terwujudnya satuan pendidikan SD yang berkualitas, berkarakter, dan berdaya saing di Kecamatan Klambu melalui pendampingan yang kolaboratif dan berkelanjutan.”",
  misi: [
    "Meningkatkan mutu pembelajaran melalui supervisi akademik yang berdampak dan berkelanjutan.",
    "Memperkuat kapasitas guru dan kepala sekolah melalui pembinaan, PKG/PKKS, dan komunitas belajar.",
    "Menjamin akurasi data pendidikan sebagai dasar perencanaan dan pengambilan kebijakan.",
    "Mengawal program prioritas dinas pendidikan sampai tuntas di setiap satuan pendidikan.",
    "Membangun sinergi lintas sektor — kecamatan, Kemenag, dan masyarakat — untuk ekosistem pendidikan yang sehat."
  ],

  /* Berita (halaman Berita + pratinjau Beranda). Paragraf dipisah
     baris kosong di Admin; boleh menyisipkan tautan <a href="…">teks</a>. */
  berita: [
    {
      tanggal: "12 Oktober 2026",
      judul: "Penilaian Kinerja Guru Semester Ganjil Ditargetkan Rampung November",
      isi: [
        "Penilaian Kinerja Guru (PKG) semester ganjil TA 2026/2027 telah dimulai di seluruh SD Negeri se-Kecamatan Klambu. Korwilcam mengingatkan guru menyiapkan dokumen kinerja — rencana pembelajaran, modul ajar, hasil asesmen, dan portofolio pengembangan diri — sebagai dasar penilaian kinerja sesuai ketentuan pemenuhan beban kerja guru.",
        "Bagi guru yang memerlukan pendampingan administrasi, layanan konsultasi dibuka di kantor Korwilcam setiap hari kerja, atau melalui koordinasi pendamping satuan pendidikan di gugus masing-masing. Format dan instrumen dapat diunduh di <a href=\"unduhan.html\">Pusat Unduhan</a>."
      ]
    },
    {
      tanggal: "9 September 2026",
      judul: "Pendampingan Persiapan ANBK Kelas V SD Se-Kecamatan Klambu",
      isi: [
        "Pendampingan teknis persiapan Asesmen Nasional Berbasis Komputer (ANBK) dilaksanakan untuk seluruh SD penyelenggara di Kecamatan Klambu. Fokus pendampingan mencakup kesiapan sarana komputer dan jaringan, penguatan literasi digital peserta didik, serta simulasi asesmen.",
        "Setiap sekolah diminta memastikan kelengkapan data sekolah dan peserta asesmen pada aplikasi ANBK, serta mengikuti jadwal simulasi yang dikoordinasikan oleh tim sekolah bersama pendamping."
      ]
    },
    {
      tanggal: "10 Agustus 2026",
      judul: "Supervisi Akademik Semester Ganjil Resmi Dimulai",
      isi: [
        "Supervisi akademik gelombang pertama semester ganjil TA 2026/2027 dimulai pertengahan Agustus. Supervisi difokuskan pada pembelajaran yang berdampak: pengamatan proses kelas, analisis modul ajar, pemanfaatan hasil asesmen diagnostik, dan umpan balik konstruktif kepada guru.",
        "Hasil supervisi didokumentasikan dalam instrumen supervisi dan ditindaklanjuti melalui pembinaan oleh pendamping satuan pendidikan di masing-masing gugus."
      ]
    },
    {
      tanggal: "21 Juli 2026",
      judul: "Rapat Koordinasi Awal Tahun Pelajaran 2026/2027",
      isi: [
        "Korwilcam Klambu memimpin rapat koordinasi kepala sekolah SD se-Kecamatan Klambu dalam rangka menyambut tahun pelajaran baru. Agenda meliputi persiapan pembelajaran, verifikasi data awal, penataan peserta didik baru, serta penyepakatan jadwal supervisi dan PKG semester ganjil.",
        "Dalam rapat tersebut juga disosialisasikan program prioritas Dinas Pendidikan Kabupaten Grobogan dan penguatan komunitas belajar (KKG) kecamatan sebagai sarana pengembangan profesional guru."
      ]
    },
    {
      tanggal: "2026",
      judul: "Sinergi Lintas Sektor: Evaluasi & Perencanaan Program Kesehatan",
      isi: [
        "Korwilcam Kecamatan Klambu turut hadir dalam forum evaluasi dan perencanaan program kesehatan yang digelar Pemerintah Kecamatan Klambu untuk memperkuat sinergi lintas sektor. Kolaborasi pendidikan–kesehatan mencakup pembinaan Usaha Kesehatan Sekolah (UKS), cek kesehatan berkala siswa, dan sekolah sehat.",
        "Kehadiran Korwilcam dalam forum lintas sektor menegaskan komitmen menghadirkan dukungan lingkungan sehat bagi peserta didik sebagai prasyarat pembelajaran yang optimal. <a href=\"https://klambu.kec.grobogan.go.id\" target=\"_blank\" rel=\"noopener\">Lihat kabar Pemerintah Kecamatan Klambu ↗</a>"
      ]
    }
  ],

  /* Pengumuman (sidebar halaman Berita) */
  pengumuman: [
    {
      judul: "Jadwal PKG per Sekolah",
      isi: "Jadwal rinci PKG disampaikan melalui grup koordinasi kepala sekolah dan pendamping gugus."
    },
    {
      judul: "Pemutakhiran Dapodik",
      isi: "Operator sekolah diminta menuntaskan validasi data pada setiap penggalan tanggal sesuai arahan Dapodik."
    },
    {
      judul: "Konsultasi Sekolah",
      isi: "Layanan konsultasi administrasi dan pembelajaran terbuka setiap hari kerja pukul 08.00–14.00 WIB."
    }
  ]
};

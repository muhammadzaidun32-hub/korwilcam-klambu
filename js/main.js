/* ============================================================
   KORWILCAM KLAMBU — Skrip interaksi utama
   ============================================================ */
(function () {
  "use strict";

  function init() {

  /* ----- Header: bayangan saat scroll + tombol ke atas ----- */
  const header = document.querySelector(".site-header");
  const toTop = document.querySelector(".to-top");
  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 10);
    if (toTop) toTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ----- Navigasi mobile ----- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.classList.remove("open");
      })
    );
  }

  /* ----- Animasi reveal saat elemen terlihat ----- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }

  /* ----- Tahun berjalan di footer ----- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ----- Lightbox galeri (delegasi — mendukung galeri hasil unggahan admin) ----- */
  const lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    const lbImg = lightbox.querySelector("img");
    const lbCap = lightbox.querySelector("figcaption");
    document.addEventListener("click", (e) => {
      const item = e.target.closest(".g-item");
      if (!item) return;
      const img = item.querySelector("img");
      if (!img) return;
      lbImg.src = img.src;
      lbImg.alt = img.alt || "";
      lbCap.textContent = item.dataset.caption || img.alt || "";
      lightbox.classList.add("show");
      document.body.style.overflow = "hidden";
    });
    function closeLb() {
      lightbox.classList.remove("show");
      document.body.style.overflow = "";
    }
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox || e.target.classList.contains("lightbox-close")) closeLb(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });
  }

  /* ----- Halaman sekolah: render + pencarian & filter ----- */
  const tableBody = document.querySelector("#sekolah-body");
  if (tableBody && Array.isArray(window.SEKOLAH_KLAMBU)) {
    const q = document.querySelector("#f-cari");
    const fJenjang = document.querySelector("#f-jenjang");
    const fDesa = document.querySelector("#f-desa");
    const counter = document.querySelector("#f-count");

    // isi dropdown desa
    const desaList = [...new Set(window.SEKOLAH_KLAMBU.map((s) => s.desa))].sort();
    desaList.forEach((d) => {
      const opt = document.createElement("option");
      opt.value = d; opt.textContent = d;
      fDesa.appendChild(opt);
    });

    function render() {
      const kw = (q.value || "").trim().toLowerCase();
      const jn = fJenjang.value;
      const ds = fDesa.value;
      const rows = window.SEKOLAH_KLAMBU.filter((s) => {
        const okKw = !kw || (s.nama + " " + s.npsn + " " + s.alamat).toLowerCase().includes(kw);
        const okJn = jn === "semua" || s.jenjang === jn;
        const okDs = ds === "semua" || s.desa === ds;
        return okKw && okJn && okDs;
      });
      counter.textContent = "Menampilkan " + rows.length + " dari " + window.SEKOLAH_KLAMBU.length + " satuan pendidikan";
      tableBody.innerHTML = rows.map((s) => {
        const binaan = s.jenjang === "SD";
        return "<tr>" +
          "<td class='npsn'>" + s.npsn + "</td>" +
          "<td><strong>" + s.nama + "</strong> " +
            (binaan ? "<span class='badge-binaan'>Binaan SD</span>" : "<span class='badge-info'>Referensi</span>") +
          "</td>" +
          "<td>" + s.jenjang + " — " + s.status + "</td>" +
          "<td>" + s.desa + "</td>" +
          "<td>" + s.alamat + "</td>" +
          "</tr>";
      }).join("") || "<tr><td colspan='5' style='text-align:center;color:var(--muted);padding:1.6rem'>Tidak ada data yang cocok dengan filter.</td></tr>";
    }

    [q, fJenjang, fDesa].forEach((el) => el.addEventListener("input", render));
    render();
  }

  /* ----- Form kontak: susun pesan via WhatsApp / Email ----- */
  const form = document.querySelector("#form-kontak");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = form.nama.value.trim();
      const instansi = form.instansi.value.trim();
      const pesan = form.pesan.value.trim();
      const teks =
        "Assalamualaikum / Selamat pagi,%0A%0A" +
        "Nama: " + encodeURIComponent(nama) + "%0A" +
        "Instansi/Sekolah: " + encodeURIComponent(instansi) + "%0A%0A" +
        encodeURIComponent(pesan);
      const wa = document.querySelector("#kirim-wa");
      const mail = document.querySelector("#kirim-mail");
      const telp = (window.KONTAK_KORWIL && window.KONTAK_KORWIL.wa) || "6280000000000";
      const email = (window.KONTAK_KORWIL && window.KONTAK_KORWIL.email) || "korwilcamklambu@example.com";
      wa.href = "https://wa.me/" + telp + "?text=" + teks;
      mail.href = "mailto:" + email + "?subject=" + encodeURIComponent("Pesan dari website Korwilcam Klambu") + "&body=" + teks;
      const info = document.querySelector("#form-hasil");
      if (info) {
        info.hidden = false;
        info.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  /* ----- Penerapan konfigurasi situs (diedit lewat admin.html) ----- */
  function escHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function loadConfig() {
    let base = window.SITE_CONFIG || {};
    let over = {};
    try { over = JSON.parse(localStorage.getItem("SITE_CONFIG_OVERRIDE") || "{}"); } catch (e) { /* abaikan */ }
    const merged = Object.assign({}, base);
    Object.keys(over).forEach(function (k) { merged[k] = over[k]; });
    return merged;
  }
  const cfg = loadConfig();
  window.SITE_CFG = cfg;
  window.KONTAK_KORWIL = {
    wa: (cfg.kontak && cfg.kontak.wa) || "6280000000000",
    email: (cfg.kontak && cfg.kontak.email) || "korwilcamklambu@gmail.com"
  };

  // teks sederhana (mendukung jalur bertingkat, mis. "pimpinan.nama")
  document.querySelectorAll("[data-cfg]").forEach(function (el) {
    const path = (el.getAttribute("data-cfg") || "").split(".");
    let v = cfg;
    for (let i = 0; i < path.length; i++) { v = v && v[path[i]]; }
    if (typeof v === "string" || typeof v === "number") el.textContent = v;
  });

  // blok HTML dari konfigurasi
  const kc = cfg.kontak || {};
  document.querySelectorAll('[data-cfg-html="alamatCardHtml"]').forEach(function (el) {
    el.innerHTML = (kc.alamatCard || []).map(escHtml).join("<br>");
  });
  document.querySelectorAll('[data-cfg-html="alamatFooterHtml"]').forEach(function (el) {
    el.innerHTML = (kc.alamatFooter || []).map(escHtml).join("<br>") +
      '<br><br><a href="kontak.html">Lihat halaman kontak →</a>';
  });
  document.querySelectorAll('[data-cfg-html="jamHtml"]').forEach(function (el) {
    el.innerHTML = (kc.jam || []).map(function (r) {
      return "<tr><td>" + escHtml(r.hari) + "</td><td>" + escHtml(r.jam) + "</td></tr>";
    }).join("");
  });

  // sembunyikan catatan "(contoh…)" ketika nilai asli sudah diisi
  const ph = cfg.placeholders || {};
  document.querySelectorAll(".cfg-note[data-for]").forEach(function (el) {
    const key = el.getAttribute("data-for");
    const get = function (obj) { return key.split(".").reduce(function (o, p) { return o && o[p]; }, obj); };
    el.hidden = !(get(ph) && get(cfg) && get(cfg) === get(ph));
  });

  // kartu berita
  function beritaCardHTML(item) {
    return '<article class="card news-card">' +
      '<span class="news-date">' +
      '<svg viewBox="0 0 24 24"><path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zM5 10h14v10H5V10z"/></svg>' +
      escHtml(item.tanggal || "") +
      "</span>" +
      "<h3>" + (item.judul || "") + "</h3>" +
      (item.isi || []).map(function (par) { return "<p>" + par + "</p>"; }).join("") +
      "</article>";
  }
  const preview = document.querySelector("#berita-preview");
  if (preview && Array.isArray(cfg.berita)) {
    preview.innerHTML = cfg.berita.slice(0, 3).map(beritaCardHTML).join("");
  }
  const list = document.querySelector("#berita-list");
  if (list && Array.isArray(cfg.berita)) {
    list.innerHTML = cfg.berita.map(function (item, i) {
      return '<article class="card news-card reveal visible" style="margin-bottom:1.4rem' +
        (i === cfg.berita.length - 1 ? ";margin-bottom:0" : "") + '">' +
        '<span class="news-date">' +
        '<svg viewBox="0 0 24 24"><path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zM5 10h14v10H5V10z"/></svg>' +
        escHtml(item.tanggal || "") +
        "</span>" +
        "<h3>" + (item.judul || "") + "</h3>" +
        (item.isi || []).map(function (par) { return "<p>" + par + "</p>"; }).join("") +
        "</article>";
    }).join("");
  }
  const notices = document.querySelector("#pengumuman-list");
  if (notices && Array.isArray(cfg.pengumuman)) {
    notices.innerHTML = cfg.pengumuman.map(function (n) {
      const icon = n.gambar
        ? '<img class="notice-img" src="' + escHtml(n.gambar) + '" alt="Gambar pengumuman">'
        : '<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7v4l-2 3v1h18v-1l-2-3V9a7 7 0 0 0-7-7zm-3 16h6a3 3 0 0 1-6 0z"/></svg>';
      return '<div class="notice">' + icon +
        "<div><h4>" + (n.judul || "") + "</h4><p>" + (n.isi || "") + "</p></div>" +
        "</div>";
    }).join("");
  }
  const visiEl = document.querySelector("#visi-text");
  if (visiEl && cfg.visi) visiEl.textContent = cfg.visi;
  const misiEl = document.querySelector("#misi-list");
  if (misiEl && Array.isArray(cfg.misi)) {
    misiEl.innerHTML = cfg.misi.map(function (m, i) {
      return '<li><span class="num">' + (i + 1) + "</span><span>" + m + "</span></li>";
    }).join("");
  }

  // sumber gambar dari konfigurasi (foto pimpinan, dll.)
  document.querySelectorAll("[data-cfg-src]").forEach(function (el) {
    const path = (el.getAttribute("data-cfg-src") || "").split(".");
    let v = cfg;
    for (let i = 0; i < path.length; i++) { v = v && v[path[i]]; }
    if (typeof v === "string" && v) el.src = v;
  });

  // galeri kegiatan dari konfigurasi
  const ggrid = document.querySelector("#galeri-list");
  if (ggrid && Array.isArray(cfg.galeri)) {
    ggrid.innerHTML = cfg.galeri.map(function (g) {
      return '<figure class="g-item" data-caption="' + escHtml(g.judul || "") + '">' +
        '<img src="' + escHtml(g.src || "") + '" alt="Foto/ilustrasi kegiatan: ' + escHtml(g.judul || "") + '">' +
        '<figcaption>' + escHtml(g.judul || "") + "<small>" + escHtml(g.keterangan || "") + "</small></figcaption>" +
        "</figure>";
    }).join("");
  }

  // slide hero memakai 5 gambar pertama galeri (bisa diganti foto asli via Admin)
  const hsTrackEl = document.querySelector("#hs-track");
  if (hsTrackEl && Array.isArray(cfg.galeri) && cfg.galeri.length > 0) {
    hsTrackEl.innerHTML = cfg.galeri.slice(0, 5).map(function (g) {
      return '<div class="hs-slide"><img src="' + escHtml(g.src || "") + '" alt="Foto/ilustrasi: ' + escHtml(g.judul || "") + '"></div>';
    }).join("");
  }

  /* ----- Slider hero: loop mulus — perpindahan selalu lanjut ke slide berikutnya ----- */
  const hsSlider = document.querySelector("#hero-slider");
  const hsTrack = document.querySelector("#hs-track");
  if (hsSlider && hsTrack && hsTrack.children.length > 1) {
    const hsCount = hsTrack.children.length;
    // klon penghubung ujung-ujung: slide terakhir tampil sebelum slide 1, slide 1 setelah slide terakhir
    const hsFirstClone = hsTrack.children[0].cloneNode(true);
    const hsLastClone = hsTrack.children[hsCount - 1].cloneNode(true);
    hsFirstClone.setAttribute("aria-hidden", "true");
    hsLastClone.setAttribute("aria-hidden", "true");
    hsTrack.appendChild(hsFirstClone);
    hsTrack.insertBefore(hsLastClone, hsTrack.firstChild);

    let hsPos = 1, hsTimer = null, hsMoving = false;
    const hsDots = document.querySelector("#hs-dots");
    for (let i = 0; i < hsCount; i++) {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Ke slide " + (i + 1));
      b.addEventListener("click", function () { hsGoTo(i + 1); hsStart(); });
      hsDots.appendChild(b);
    }
    function hsPaint(withTransition) {
      if (!withTransition) hsTrack.style.transition = "none";
      hsTrack.style.transform = "translateX(-" + hsPos * 100 + "%)";
      if (!withTransition) { void hsTrack.offsetWidth; hsTrack.style.transition = ""; }
      const active = ((hsPos - 1) % hsCount + hsCount) % hsCount;
      Array.prototype.forEach.call(hsDots.children, function (d, i) {
        d.classList.toggle("active", i === active);
      });
    }
    function hsGoTo(pos) {
      if (hsMoving) return;
      hsMoving = true;
      hsPos = pos;
      hsPaint(true);
      setTimeout(function () {
        if (hsPos === 0) { hsPos = hsCount; hsPaint(false); }          // klon awal → slide terakhir
        else if (hsPos === hsCount + 1) { hsPos = 1; hsPaint(false); } // klon akhir → slide pertama
        hsMoving = false;
      }, 830);
    }
    function hsStart() { hsStop(); hsTimer = setInterval(function () { hsGoTo(hsPos + 1); }, 4000); }
    function hsStop() { if (hsTimer) { clearInterval(hsTimer); hsTimer = null; } }
    const hsHoverHost = document.querySelector(".hero") || hsSlider;
    hsHoverHost.addEventListener("mouseenter", hsStop);
    hsHoverHost.addEventListener("mouseleave", hsStart);
    document.querySelector("#hs-next").addEventListener("click", function () { hsGoTo(hsPos + 1); hsStart(); });
    document.querySelector("#hs-prev").addEventListener("click", function () { hsGoTo(hsPos - 1); hsStart(); });
    hsPaint(false);
    hsStart();
  }
  } /* akhir init() */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

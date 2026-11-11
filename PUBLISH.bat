@echo off
chcp 65001 >nul
title Publish Website Korwilcam Klambu
cd /d "%~dp0"

REM ============================================================
REM  GANTI "GANTI-USERNAME" DI BARIS BAWAH dengan username
REM  GitHub Anda setelah membuat repositori, lalu simpan file ini.
REM ============================================================
set REMOTE=https://github.com/GANTI-USERNAME/korwilcam-klambu.git

echo ============================================
echo   PUBLISH WEBSITE KORWILCAM KLAMBU
echo ============================================
echo.

if not exist .git (
  echo [0/3] Menyiapkan repositori lokal...
  git init -b main
)

git remote get-url origin >nul 2>&1
if errorlevel 1 (
  echo       Menghubungkan ke: %REMOTE%
  git remote add origin %REMOTE%
)

echo [1/3] Menyimpan perubahan...
git add -A
git commit -m "Update konten website" -q 2>nul
if errorlevel 1 echo       (tidak ada perubahan baru yang perlu diunggah)

echo [2/3] Mengunggah ke GitHub...
git push -u origin main
if errorlevel 1 (
  echo.
  echo ============================================================
  echo   GAGAL MENGUNGGAH. Periksa:
  echo   1. Ganti "GANTI-USERNAME" di file PUBLISH.bat dengan
  echo      username GitHub Anda, lalu jalankan ulang.
  echo   2. Repositori "korwilcam-klambu" sudah dibuat di
  echo      github.com dengan nama persis seperti itu.
  echo   3. Jika muncul jendela login GitHub di browser,
  echo      silakan login dengan akun Anda.
  echo ============================================================
  pause
  exit /b 1
)

echo [3/3] SELESAI!
echo       Perubahan sudah di GitHub. Vercel otomatis memperbarui
echo       website online dalam 1-2 menit.
echo.
pause

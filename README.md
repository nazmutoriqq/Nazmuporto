# Portofolio Pribadi

Struktur folder:
```
portofolio/
├── index.html      -> struktur halaman
├── style.css       -> tampilan (tema hitam + ungu)
├── script.js       -> interaksi (menu mobile, tahun footer)
└── assets/
    └── profile.png -> ganti dengan foto kamu sendiri
```

## Cara pakai di VS Code
1. Buat folder baru, misalnya `portofolio`.
2. Taruh `index.html`, `style.css`, `script.js` di dalamnya, dan buat folder `assets`.
3. Masukkan foto kamu ke `assets/profile.png` (atau ganti nama file di `index.html` pada tag `<img src="assets/profile.png">`).
4. Install extension **Live Server** di VS Code, lalu klik kanan `index.html` → "Open with Live Server".

## Yang bisa kamu ganti
- Semua teks "Nama Kamu", "Nama Project", deskripsi, dan link sosial media di `index.html`.
- Warna tema ada di bagian `:root` paling atas file `style.css`, tinggal ubah kode warnanya (--purple, --purple-light, dst).

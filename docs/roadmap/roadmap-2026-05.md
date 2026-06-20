# Kalenderin — Roadmap MVP Sampai Akhir Bulan Mei 2026

## Goal MVP
Bikin web kalender Indonesia modern dengan:

- Kalender bulanan
- Hari libur nasional
- Kalender Hijriyah
- Weton Jawa
- Responsive mobile
- Deploy online
- SEO basic
- PWA installable

---

# Progress Saat Ini

## DONE
- [x] Setup React + Vite
- [x] Setup GitHub repository
- [x] Setup branch `development`
- [x] Setup GitHub Pages deployment
- [x] Setup TailwindCSS

---

# Minggu 1 — Foundation UI

## 1. Basic Layout
Status: TODO

### Task
- [ ] Buat navbar/header
- [ ] Buat container layout
- [ ] Buat footer
- [ ] Setup typography
- [ ] Setup color palette
- [ ] Setup responsive container

### Commit
```bash
🎨 style: create main layout structure
```

---

## 2. Calendar Grid
Status: TODO

### Task
- [ ] Render kalender bulanan
- [ ] Tombol prev/next month
- [ ] Highlight hari ini
- [ ] Highlight hari Minggu
- [ ] Grid responsive mobile
- [ ] State month/year

### Commit
```bash
✨ feat: create calendar monthly grid
```

---

## 3. Integrasi API Hari Libur
Status: TODO

### Task
- [ ] Buat `services/holidayApi.js`
- [ ] Fetch data libur nasional
- [ ] Simpan ke state
- [ ] Tampilkan tanggal merah
- [ ] Tooltip nama hari libur
- [ ] Loading state
- [ ] Error handling

### API
```txt
https://libur.deno.dev/api?year=2025
```

### Commit
```bash
✨ feat: integrate indonesia holiday api
```

---

# Minggu 2 — Kalender Indonesia

## 4. Detail Hari
Status: TODO

### Task
- [ ] Klik tanggal
- [ ] Modal detail hari
- [ ] Nama hari
- [ ] Hari libur
- [ ] Hijriyah
- [ ] Weton
- [ ] Pasaran Jawa

### Commit
```bash
✨ feat: add date detail modal
```

---

## 5. Sistem Weton Jawa
Status: TODO

### Task
- [ ] Buat helper weton
- [ ] Hitung pasaran
- [ ] Tampilkan weton
- [ ] Tampilkan neptu
- [ ] Test validasi weton

### Commit
```bash
✨ feat: add javanese weton calculation
```

---

## 6. Kalender Hijriyah
Status: TODO

### Task
- [ ] Integrasi Hijriyah API/library
- [ ] Tampilkan tanggal hijriyah
- [ ] Tampilkan bulan hijriyah
- [ ] Hari besar Islam

### Commit
```bash
✨ feat: add hijriyah calendar
```

---

# Minggu 3 — UX & SEO

## 7. Responsive Mobile
Status: TODO

### Task
- [ ] Mobile navbar
- [ ] Responsive calendar
- [ ] Responsive modal
- [ ] Touch-friendly button
- [ ] Tablet optimization

### Commit
```bash
📱 style: improve mobile responsiveness
```

---

## 8. SEO Basic
Status: TODO

### Task
- [ ] Dynamic title
- [ ] Meta description
- [ ] Open Graph image
- [ ] Sitemap
- [ ] robots.txt
- [ ] Structured data basic

### Commit
```bash
🔍 seo: add metadata and sitemap
```

---

## 9. Landing Page Polish
Status: TODO

### Task
- [ ] Hero section
- [ ] Feature cards
- [ ] CTA button
- [ ] Improve spacing
- [ ] Improve shadows
- [ ] Add animations

### Commit
```bash
🎨 style: improve landing page ui
```

---

# Minggu 4 — Production Ready

## 10. PWA Installable
Status: TODO

### Task
- [ ] Install vite-plugin-pwa
- [ ] Add manifest
- [ ] Add app icons
- [ ] Offline support
- [ ] Install prompt

### Commit
```bash
🚀 feat: setup progressive web app
```

---

## 11. Performance Optimization
Status: TODO

### Task
- [ ] Lazy load components
- [ ] Optimize bundle
- [ ] Compress assets
- [ ] Lighthouse audit
- [ ] Improve accessibility

### Commit
```bash
⚡ perf: optimize app performance
```

---

## 12. Final Deployment
Status: TODO

### Task
- [ ] Final testing
- [ ] Fix production bug
- [ ] Setup custom domain
- [ ] Setup analytics
- [ ] Setup favicon
- [ ] Create README

### Commit
```bash
🚀 deploy: release kalenderin mvp
```

---

# Struktur Folder Final

```txt
src/
  components/
    calendar/
    layout/
    modal/
    ui/

  pages/
    Home/
    About/

  services/
    holidayApi.js
    hijriyahApi.js

  utils/
    weton.js
    calendar.js
    date.js

  hooks/

  assets/

  styles/
```

---

# Target MVP End of Month

## Minimal Features
- [ ] Kalender bulanan
- [ ] Hari libur nasional
- [ ] Hijriyah
- [ ] Weton
- [ ] Responsive
- [ ] SEO basic
- [ ] PWA
- [ ] Online production

---

# Future Features (Next Version)

## v2 Ideas
- Google Calendar sync
- Reminder notification
- Event pribadi
- Widget Android
- Dark mode
- Export PDF kalender
- Share event
- AI rekomendasi hari baik
- Multi bahasa
- Kalender internasional

---

# Recommended Stack

## Frontend
- ReactJS
- Vite
- TailwindCSS
- date-fns

## Deployment
- GitHub Pages

## Future Backend
- Supabase
- Firebase
- Appwrite

---

# Daily Workflow

```bash
# pindah ke development
 git checkout development

# jalanin project
 npm run dev

# commit
 git add .
 git commit -m "✨ feat: add something"

# push
 git push
```

---

# Current Next Step

## Fokus sekarang:

1. Setup layout
2. Buat calendar grid
3. Integrasi API libur nasional
4. Responsive mobile

Jangan lompat ke fitur berat dulu.

Foundation UI dulu sampai stabil.


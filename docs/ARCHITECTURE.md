# Architecture

## Stack

### Frontend

* ReactJS
* Vite
* TailwindCSS

### Utilities

* date-fns

### Deployment

* GitHub Pages

---

# Folder Structure

```txt
src/
  components/
  pages/
  services/
  utils/
  hooks/
  assets/
```

---

# Architecture Flow

```txt
API
 ↓
services/
 ↓
components/
 ↓
UI
```

---

# Main Modules

## components/

Reusable UI components.

## pages/

Halaman utama aplikasi.

## services/

Integrasi API eksternal.

## utils/

Helper functions seperti:

* weton calculation
* date formatting
* calendar generation

---

# API Plan

## Indonesia Holiday API

```txt
https://libur.deno.dev/
```

## Future APIs

* Hijriyah API
* Google Calendar API

---

# Deployment

Menggunakan GitHub Pages dengan GitHub Actions.

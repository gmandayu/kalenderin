# Contributing

Terima kasih sudah ingin berkontribusi ke Kalenderin.

## Setup Project

```bash
npm install
npm run dev
```

## Branch Workflow

* `main` → production
* `development` → development aktif

Buat branch baru dari `development`.

Contoh:

```bash
git checkout development
git checkout -b feature/calendar-grid
```

## Commit Convention

Gunakan conventional commit + emoji.

### Examples

```bash
✨ feat: add calendar grid
🐛 fix: resolve month navigation bug
🎨 style: improve ui spacing
♻️ refactor: simplify calendar utils
📝 docs: update readme
🔥 remove unused files
🚀 deploy: add vercel config
```

## Pull Request

* PR diarahkan ke branch `development`
* Pastikan project bisa di-build
* Hindari commit file tidak penting

# REMI Website

This is the official REMI website — a secure and global B2B money remittance platform.

---

## 🚀 Project Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/remi-website.git
cd remi-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```
The production-ready files will be located in the `dist/` folder.

### 5. Optional: Preview the production build locally
```bash
npm install -g serve
serve -s dist
```

---

## 🌐 Deployment Notes
- The `dist/` folder can be deployed to any static hosting provider (Vercel, Netlify, Railway, Nginx, etc.)
- SSL / HTTPS should be configured separately at the server level (e.g. via Let's Encrypt).

---

## 🛠 Tech Stack
- React + TypeScript
- Tailwind CSS
- Vite

---

## 📁 File Structure Highlights
```
├── public/                  # Static files (logo, slides, PCI PDF)
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/               # Page components (About, Home, Careers, etc.)
│   ├── App.tsx              # App structure and routing
│   └── main.tsx             # React root
└── index.html               # HTML entry point
```

---

## 📫 Contact
For questions about deployment, contact the site maintainer or sysadmin.

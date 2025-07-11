# 🚐 Build‑Your‑Bulli

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Built with React](https://img.shields.io/badge/react-17.x-brightgreen?logo=react)](https://reactjs.org)
[![Three.js](https://img.shields.io/badge/3D-Three.js-orange?logo=three.js)](https://threejs.org/)
[![Node](https://img.shields.io/badge/backend-Node.js-green?logo=node.js)](https://nodejs.org)

**Build‑Your‑Bulli** is an interactive 3D browser-based configurator for customizing VW T1-style camper vans. It supports model swapping, real-time previews, screenshots, and even sending build reports via email.

---

## 🎯 Key Features

* **⚙️ Full 3D Customization**
  Swap between T1S, T1Samba, T1SingleCab, and T1.5 variants in real-time.

* **🖼️ Real-time Previews**
  All changes reflect live in a WebGL Three.js scene.

* **🖨️ Export to PDF**
  generate a `.pdf` with `jsPDF` of the current configuration, including a screenshot and details.

* **📤 Send via Email**
  Uses a simple backend with `nodemailer` to send configurations to the user or a client.

* **📂 Extensible Asset System**
  Models are stored as `.glb`, dynamically loaded into the scene, and easily replaced or extended.

---

## 🛠️ Tech Stack

| Area            | Tool / Library                       |
| --------------- | ------------------------------------ |
| 💻 Frontend     | React 17 |
| 🌐 3D Engine    | Three.js                             |
| 📸 Export Tools | html2canvas, jsPDF                   |
| 📩 Backend      | Node.js + Express + Nodemailer       |
| 🛠️ Tooling     | Babel, Webpack                 |
| 📦 Dev Scripts  | Nodemon, Webpack CLI                 |

---

## 📁 Project Structure

```
.
├── client/
│   ├── 3d/             # glb models, textures (HDR/EXR)
│   ├── components/     # Reusable UI components (carousel, header, etc.)
│   ├── fonts/          # Custom fonts
│   ├── images/         # Static UI assets
│   └── Model/          # Vehicle model config (JS + loaders)
│
├── server/
│   ├── devBundle.js    # Dev build
│   ├── emailHandler.js # Email send logic via nodemailer
│   └── server.js       # Main express server
│
├── dist/               # Production build output
├── .env                # Environment config (SMTP, etc.)
└── template.js         # Email HTML template
```

---

## ⚙️ Getting Started

Clone the repository:

```bash
git clone https://github.com/vhaueisen/build-your-bulli.git
cd build-your-bulli
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Build for Production

```bash
npm run build
```

Production bundle will be served from `dist/` by the Node.js server.

---

## 📧 Environment Setup (for Email Feature)

In your `.env` file, configure the following:

```env
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your_password
MAIL_FROM=Your Name <your@email.com>
```

You can disable the email feature by commenting out the `sendMail()` call in `emailHandler.js`.

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for full details.

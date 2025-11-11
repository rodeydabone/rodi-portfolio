# Rodi Marten - Portfolio Website

Eine moderne, responsive Portfolio-Website, entwickelt mit Vue.js 3 und Vite.

## 🚀 Features

- **Moderne Vue.js 3 Architektur** mit Composition API
- **Vollständig responsive** für alle Geräte
- **Smooth Scrolling** Navigation
- **Professionelles Design** mit Gradient-Effekten
- **Optimierte Performance** mit Vite
- **SEO-freundlich** strukturiert

## 📋 Voraussetzungen

- Node.js (Version 16 oder höher)
- npm oder yarn Package Manager

## 🛠️ Installation

1. **Projekt entpacken**
   ```bash
   unzip rodi-portfolio.zip
   cd rodi-portfolio
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   ```
   
   Die Website ist nun unter `http://localhost:5173` erreichbar.

4. **Produktions-Build erstellen**
   ```bash
   npm run build
   ```
   
   Die optimierten Dateien befinden sich im `dist/` Ordner.

5. **Produktions-Build vorschauen**
   ```bash
   npm run preview
   ```

## 📁 Projektstruktur

```
rodi-portfolio/
├── public/                  # Statische Dateien (Bilder)
│   ├── portfolioimg001.jpeg
│   ├── portfolioimg002.jpeg
│   └── portfolioimg003.jpeg
├── src/
│   ├── components/          # Vue Komponenten
│   │   ├── Navigation.vue
│   │   ├── Hero.vue
│   │   ├── About.vue
│   │   ├── Resume.vue
│   │   ├── Skills.vue
│   │   ├── Certificates.vue
│   │   ├── Projects.vue
│   │   ├── Contact.vue
│   │   └── Footer.vue
│   ├── App.vue             # Haupt-App-Komponente
│   ├── main.js             # App Entry Point
│   └── style.css           # Globale Styles
├── index.html              # HTML Template
├── package.json            # Projekt-Dependencies
├── vite.config.js          # Vite Konfiguration
└── README.md              # Diese Datei
```

## 🎨 Anpassungen

### Inhalte ändern

Die Inhalte der Website können in den Vue-Komponenten unter `src/components/` angepasst werden:

- **Hero Section**: `Hero.vue` - Hauptüberschrift und Einleitung
- **Über mich**: `About.vue` - Persönliche Informationen
- **Berufserfahrung**: `Resume.vue` - Werdegang und Bildung
- **Skills**: `Skills.vue` - Technische Kompetenzen
- **Zertifikate**: `Certificates.vue` - Microsoft Zertifikate
- **Projekte**: `Projects.vue` - Portfolio-Projekte
- **Kontakt**: `Contact.vue` - Kontaktinformationen

### Bilder austauschen

Neue Bilder können im `public/` Ordner abgelegt und in den Komponenten referenziert werden:

```vue
<img src="/neues-bild.jpg" alt="Beschreibung">
```

### Design anpassen

Die Farben und Styles können in der `src/style.css` Datei angepasst werden. 
Die CSS-Variablen befinden sich am Anfang der Datei:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  /* ... weitere Variablen */
}
```

## 🌐 Deployment

### Netlify

1. Repository auf GitHub pushen
2. Netlify mit GitHub verbinden
3. Build Command: `npm run build`
4. Publish Directory: `dist`

### Vercel

1. Repository auf GitHub pushen
2. Vercel mit GitHub verbinden
3. Framework Preset: Vite
4. Automatisches Deployment

### GitHub Pages

1. Build erstellen: `npm run build`
2. `dist/` Ordner in `gh-pages` Branch pushen

## 📱 Browser-Unterstützung

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)
- Mobile Browser (iOS Safari, Chrome Mobile)

## 📝 Lizenz

Dieses Projekt ist für persönliche Zwecke erstellt. Alle Rechte vorbehalten.

## 📧 Kontakt

**Rodi Marten**
- E-Mail: rodi_e_marten@hotmail.com
- LinkedIn: [linkedin.com/in/rodi-alain-marten](https://www.linkedin.com/in/rodi-alain-marten)
- Telefon: +49 179 10158778

---

Entwickelt mit ❤️ und Vue.js

# 🚀 Personal Hub (Linktree Clone)
**Your professional identity, automated.**

A high-performance, dynamic personal landing page that integrates directly with the GitHub API to keep your developer profile and featured projects up-to-date in real-time.

---

## ✨ Key Features

- **🌐 Dynamic GitHub Integration**: Automatically fetches and displays your name, bio, and avatar from the GitHub REST API.
- **📦 Automated Project Showcase**: Dynamically pulls your most recently updated repositories, showcasing your current work with real-time star counts.
- **🌓 Adaptive Theme System**: Seamless Light/Dark mode toggle with persistence via `localStorage` and system preference detection.
- **🎨 Modern UI/UX**: Built with **Tailwind CSS 4**, featuring complex gradients, backdrop blurs, and a mobile-first responsive design.
- **💡 Daily Insights**: A built-in random quote generator to provide fresh, inspiring content on every visit.
- **🔗 Curated Social Links**: High-visibility, stylized links to your essential professional and social platforms.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React 19 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS 4 |
| **API** | GitHub REST API |
| **Infrastructure** | Docker + Nginx (Alpine) |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/)

### Local Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd linktree
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

### ⚙️ Configuration
To customize the hub for your own GitHub profile:
1. Open `src/App.tsx`.
2. Locate the GitHub API fetch URL.
3. Replace the username in the URL (e.g., `mrayushsingh08-dot`) with your own GitHub username.

---

## 🚢 Deployment

This project is fully containerized for professional deployment.

### Using Docker Compose (Recommended)
One command to build and launch the application on port 80:
```bash
docker-compose up -d --build
```

### Manual Docker Build
```bash
# Build the image
docker build -t personal-hub .

# Run the container
docker run -p 80:80 personal-hub
```

### Infrastructure Note
The project uses a **multi-stage Docker build**:
- **Stage 1**: Node.js alpine image to build the static assets.
- **Stage 2**: Nginx alpine image to serve the `dist` folder.
- **Routing**: A custom `nginx.conf` is included to handle Single Page Application (SPA) routing, ensuring that page refreshes do not result in 404 errors.

---

## 📂 Project Structure

```text
├── decisions/      # Architectural and technical decision logs
├── public/         # Static assets
├── src/            # Application source code
│   ├── components/ # Reusable UI components
│   ├── context/    # Global state (ThemeContext)
│   └── App.tsx     # Main application logic & API integration
├── Dockerfile      # Multi-stage build configuration
├── nginx.conf      # Production server configuration
└── tailwind.config.js # Styling configuration
```

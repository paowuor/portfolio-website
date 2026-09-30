# Paul Owuor — Software Engineer & AI Developer Portfolio

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](LICENSE)

A developer portfolio and interactive showcase for **Paul Owuor** — Software Engineer, AI & Backend Developer, and Project Manager based in Kenya. 

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**, featuring deep technical case studies, interactive system architecture explorers, live API normalizer simulators, high-resolution documentary photography, an interactive resume modal, and technical notes.

---

## 🚀 Live Demo

- **Development URL**: [https://ais-dev-avyplrmrzfuvl6sninqhkl-741844504460.europe-west2.run.app](https://ais-dev-avyplrmrzfuvl6sninqhkl-741844504460.europe-west2.run.app)
- **Shared App URL**: [https://ais-pre-avyplrmrzfuvl6sninqhkl-741844504460.europe-west2.run.app](https://ais-pre-avyplrmrzfuvl6sninqhkl-741844504460.europe-west2.run.app)

---

## 🛠️ Featured Technical Work

### 1. FlexiRides
- **Stack**: Java 21 · Spring Boot · PostgreSQL · Microservices · Docker · Maven · GraalVM
- **Role**: Project Manager & Software Engineer
- **Overview**: 13 backend microservices designed for East African transport operations. Covers Spring Cloud API Gateway, JWT authentication routing, driver verification, passenger matching, and M-Pesa / Mobile Money settlement.
- **Interactive Component**: Built-in microservice architecture canvas detailing inter-service communication and container topology.

### 2. KopaBridge
- **Stack**: TypeScript · NestJS · PostgreSQL · Prisma · Redis · Docker · Railway
- **Role**: Backend Systems Engineer
- **Overview**: Unified financial middleware and energy API standardizing fragmented PAYGo solar payments for alternative credit scoring with sub-85ms latency and AES-256 encrypted provider credentials.
- **Interactive Component**: Live in-browser API normalizer playground demonstrating raw provider payloads transformed into unified schema responses.

### 3. DJNextDoor
- **Stack**: Python · Django · PostgreSQL · Redis · Django REST Framework · Cloudinary · Sentry
- **Role**: Full-Stack Developer
- **Overview**: Two-sided entertainment marketplace connecting DJs and venue managers with verified reviews, contract workflows, and audio mix streaming with 74 automated test suites.

### 4. Marples Cleaners
- **Stack**: React · TypeScript · Vite · Tailwind CSS · Google Maps Platform
- **Role**: Client Solutions Engineer
- **Overview**: Commercial customer booking portal with an instant itemized cost calculator, radius verification, and structured WhatsApp booking generation.

### 5. Zone01 Systems & Internal Engineering
- **Forum**: Framework-less Go web server using pure `net/http` standard library, bcrypt sessions, SQLite migrations, and Docker.
- **Net-Cat**: Concurrent TCP socket server using goroutines, channels, and mutexes with ANSI terminal broadcasting.
- **ASCII Art Web**: Go typography parser handling custom template glyph maps and RFC-compliant HTTP status codes.

---

## 📸 Field Photography & Documentary Gallery

Includes authentic high-resolution field photography captured on-site at **Zone01 Kisumu, Kenya**:
- **NY1A0074.jpg**: Professional studio portrait of Paul Owuor.
- **NY1A9768.jpg**: Hands-on systems programming in Go on a ThinkPad T480 workstation.
- **NY1A9777.jpg**: Collaborative engineering lab and peer code reviews.
- **Interactive Lightbox**: Fullscreen preview modal with keyboard navigation (`Esc`, `←`, `→`), zoom capability, and detailed metadata.

---

## 📋 Portfolio Features

- **Split-Screen Landing**: Core value proposition, live availability badge, quick social links, and track record metrics.
- **About Me (Build → Solve → Lead)**: Engineering philosophy and active apprenticeship context at Zone01 Kisumu & University of the People.
- **Categorized Technical Skills**: Organized by Languages, Backend, Frontend, Databases & Caching, DevOps & Tools, and AI / LLM Systems.
- **Professional Timeline**: Apprentice engineer, Project Manager at FlexiRides, AI Data Trainer at Cohere, and Customer Success Manager at Invisible Technologies.
- **Engineering Notes Reader**: Expandable modal viewer for deep-dive technical articles.
- **Interactive Resume Modal**: Formatted document view, printable template, and one-click plain text clipboard copy.
- **Validated Contact System**: Direct email dispatch, WhatsApp pre-filled messaging, and timezone indicator (EAT, UTC+3).

---

## 📁 Repository Structure

```
├── public/                     # Static assets & public images
│   ├── NY1A0074.jpg           # Portrait photo
│   ├── NY1A9768.jpg           # Workstation & Forum photo
│   └── NY1A9777.jpg           # Engineering lab photo
├── src/
│   ├── assets/
│   │   └── photos/            # Bundled image assets
│   ├── components/
│   │   ├── AboutSection.tsx   # Build · Solve · Lead philosophy & bio
│   │   ├── ArticlesSection.tsx# Engineering Notes reader modal
│   │   ├── ContactSection.tsx # Communication channels & contact form
│   │   ├── ExperienceSection.tsx # Career history & education timeline
│   │   ├── Footer.tsx         # Minimalist responsive footer
│   │   ├── Hero.tsx           # Primary headline, pitch & portrait
│   │   ├── HobbiesSection.tsx # Beyond Code interests
│   │   ├── InteractiveProjectModal.tsx # Live simulators & architecture views
│   │   ├── InternalProjectsSection.tsx # Zone01 systems engineering cards
│   │   ├── Navbar.tsx         # 3-Zone top navigation bar
│   │   ├── PhotoLightboxModal.tsx # Fullscreen photo lightbox
│   │   ├── PhotoShowcase.tsx  # Documentary gallery bento grid
│   │   ├── ProjectsSection.tsx# Flagship project cards & filtering
│   │   ├── ResumeModal.tsx    # High-fidelity printable resume dialog
│   │   └── SkillsSection.tsx  # Curated technical competencies
│   ├── context/
│   │   └── PhotoContext.tsx   # Image provider & lightbox state
│   ├── data/
│   │   └── portfolioData.ts   # Centralized portfolio content & metadata
│   ├── App.tsx                # Main application component
│   ├── index.css              # Tailwind CSS v4 styling & typography
│   └── main.tsx               # React 19 root entry
├── server.ts                  # Express server for Vite middleware & static serving
├── index.html                 # HTML entry point with Google Fonts & SEO tags
├── metadata.json              # Applet configuration & metadata
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript compiler options
└── vite.config.ts             # Vite build configuration
```

---

## 💻 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **npm** or **bun**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/paowuor/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Express server with Vite middleware on port 3000 |
| `npm run build` | Compiles the production application bundle into `dist/` |
| `npm run lint` | Runs `tsc --noEmit` to validate TypeScript typing |
| `npm run preview` | Previews the production build locally |

---

## 📬 Contact & Connect

- **Name**: Paul Owuor
- **Email**: [owuorpaul500@gmail.com](mailto:owuorpaul500@gmail.com)
- **GitHub**: [https://github.com/paowuor](https://github.com/paowuor)
- **LinkedIn**: [https://www.linkedin.com/in/paul-owuor-66a821397/](https://www.linkedin.com/in/paul-owuor-66a821397/)
- **Dev.to**: [https://dev.to/paowuor](https://dev.to/paowuor)
- **Location**: Kisumu / Nairobi, Kenya (UTC+3)

---

## 📄 License

This project is licensed under the Apache 2.0 License.

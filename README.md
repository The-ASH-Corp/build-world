# Build World

A premium, pixel-perfect Next.js web application for **Build World Constructions Pvt. Ltd.**, meticulously translated from a high-fidelity Framer design.

This project showcases a modern, dark-themed, and highly interactive user interface tailored for a leading construction company. It features dynamic scroll animations, glassmorphism UI elements, and a robust component architecture.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Typography:** Custom Web Fonts (Menbere, Matangi, Archivo)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## ✨ Key Features

- **Pixel-Perfect UI Translation:** Exact 1:1 match of the original Framer design, including complex gradients, border radiuses, and overlapping layouts.
- **Scroll & Parallax Animations:** Smooth, scroll-driven animations using Framer Motion (`useScroll`, `useTransform`) for a premium browsing experience.
- **Centralized Data Management:** All site content (text, images, links) is driven by a single configuration file (`data/siteData.ts`), making content updates seamless without touching component code.
- **Responsive Design:** Fully responsive layout adapting perfectly from mobile to large desktop displays (up to 1600px max-width constraints).
- **Custom Typography:** Integrated custom font faces extracted directly from the design source to ensure exact typographic fidelity.

---

## 📂 Project Structure

```text
build-world/
├── app/
│   ├── layout.tsx         # Global layout and Navigation/Footer wrapper
│   ├── page.tsx           # Main landing page assembling all sections
│   ├── globals.css        # Tailwind directives and global styles
│   └── framer-fonts.css   # Custom font-face declarations
├── components/            # Reusable UI Sections
│   ├── Hero.tsx           # Parallax hero section
│   ├── AboutSection.tsx   # Company introduction
│   ├── TeamSection.tsx    # Leadership and team profiles
│   ├── LatestWorks.tsx    # Horizontal scrolling projects gallery
│   ├── TestimonialSection.tsx # Client testimonials and reviews
│   ├── SpecializationSection.tsx # Core services
│   ├── WhyChooseUs.tsx    # Value propositions and video highlights
│   ├── Navigation.tsx     # Sticky header navigation
│   └── Footer.tsx         # Site footer
├── data/
│   └── siteData.ts        # Centralized content configuration
└── public/
    └── images/            # Static image assets
```

---

## 🛠️ Getting Started

First, ensure you have Node.js installed. Then, clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/The-ASH-Corp/build-world.git

# Navigate to the project directory
cd build-world

# Install dependencies
npm install
# or yarn install / pnpm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running locally.

---

## 📝 Managing Content

To update the content of the website (text, images, links, or team members), simply edit the `data/siteData.ts` file. 

The application is structured so that the UI components act as pure presentation layers, while `siteData.ts` acts as the single source of truth for the data.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

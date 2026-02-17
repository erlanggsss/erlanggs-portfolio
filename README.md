# 🚀 Erlanggs Portfolio

A modern, responsive portfolio website showcasing my expertise in Data Science, Machine Learning, and Cloud Computing. Built with Next.js 15 and React 19, featuring smooth animations and a beautiful dark mode.

![Portfolio Screenshot](public/profile-img.png)

## 👤 About

I'm Muhammad Erlangga Prasetya, a Data Scientist and Machine Learning Engineer based in Bogor, Indonesia. I'm passionate about creating impactful AI solutions and have graduated from Bangkit Academy as both Cloud Computing (2023) and Machine Learning (2024) cohort.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌓 **Dark Mode** - Full dark mode support with system preference detection
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Performance Optimized** - Built with Next.js 15 for optimal loading speeds
- 🎬 **Smooth Animations** - Elegant animations using Motion library
- 📧 **Contact Form** - Integrated with Web3Forms for easy communication
- ♿ **Accessible** - Semantic HTML and ARIA labels for better accessibility
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and Twitter cards

## 🛠️ Tech Stack

- **Framework:** Next.js 15.1.3
- **UI Library:** React 19.0.0
- **Styling:** Tailwind CSS 3.4.1
- **Animations:** Motion 11.17.0
- **Fonts:** Google Fonts (Outfit, Ovo)
- **Form Handling:** Web3Forms API
- **Deployment:** Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/erlanggsss/erlanggs-portfolio.git
   cd erlanggs-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your Web3Forms API key:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_api_key_here
   ```
   
   Get your free API key from [Web3Forms](https://web3forms.com/)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
erlanggs-portfolio/
├── app/
│   ├── components/
│   │   ├── About.jsx       # About section with info cards
│   │   ├── Contact.jsx     # Contact form with Web3Forms
│   │   ├── Footer.jsx      # Footer with social links
│   │   ├── Header.jsx      # Hero section
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Project.jsx     # Projects showcase
│   │   └── Services.jsx    # Services offered
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout with metadata
│   └── page.js             # Main page
├── assets/
│   └── assets.js           # Asset imports and data
├── public/                 # Static files (images, CV, etc.)
├── .env.example            # Environment variables template
├── .env.local              # Your environment variables (git-ignored)
├── next.config.mjs         # Next.js configuration
├── tailwind.config.mjs     # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization Guide

### Update Personal Information

1. **Profile Images:** Replace images in `/public/` and `/assets/`
2. **Content:** Edit data in `/assets/assets.js`:
   - `workData` - Your projects
   - `serviceData` - Your services
   - `infoList` - Your info cards
   - `toolsData` - Tools you use

3. **Text Content:** Update component files in `/app/components/`
4. **Resume:** Replace `/public/cv-erlangga.pdf` with your own

### Customize Theme Colors

Edit `tailwind.config.mjs`:
```javascript
colors: {
  lightHover: '#C8D3C8',
  darkHover: '#06004A',
  darkTheme: '#03001F',
  liddyGreen: '#647C64',
}
```

## 📧 Contact Form Setup

This portfolio uses [Web3Forms](https://web3forms.com/) for the contact form:

1. Sign up at [Web3Forms](https://web3forms.com/)
2. Get your Access Key
3. Add it to `.env.local`
4. Test the form!

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/erlanggsss/erlanggs-portfolio)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect With Me

- **GitHub:** [erlanggsss](https://github.com/erlanggsss)
- **LinkedIn:** [muhammaderlanggaprasetya](https://www.linkedin.com/in/muhammaderlanggaprasetya/)
- **Email:** gaaerlang03@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Animations powered by [Motion](https://motion.dev)
- Icons and images from various sources
- Form handling by [Web3Forms](https://web3forms.com)

---

⭐ If you found this portfolio helpful, please consider giving it a star!

Made with ❤️ by Muhammad Erlangga Prasetya

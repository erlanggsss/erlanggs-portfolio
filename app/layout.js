import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Erlanggs | Data Scientist & Machine Learning Expert",
  description: "Portfolio of Muhammad Erlangga Prasetya - Data Scientist, Machine Learning Engineer, and Cloud Computing specialist based in Bogor, Indonesia. Explore my projects and expertise in AI/ML.",
  keywords: ["Data Scientist", "Machine Learning", "Cloud Computing", "AI", "Python", "Web Development", "Portfolio"],
  authors: [{ name: "Muhammad Erlangga Prasetya" }],
  creator: "Muhammad Erlangga Prasetya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://erlanggs.com",
    title: "Erlanggs | Data Scientist & Machine Learning Expert",
    description: "Portfolio of Muhammad Erlangga Prasetya - Data Scientist and Machine Learning Engineer specializing in AI solutions and cloud computing.",
    siteName: "Erlanggs Portfolio",
    images: [
      {
        url: "/profile-img.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Erlangga Prasetya - Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erlanggs | Data Scientist & Machine Learning Expert",
    description: "Portfolio of Muhammad Erlangga Prasetya - Data Scientist and Machine Learning Engineer",
    images: ["/profile-img.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden 
        dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

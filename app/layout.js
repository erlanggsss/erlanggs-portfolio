import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Erlanggs | Software Developer & Data Specialist",
  description:
    "Portfolio of Muhammad Erlangga Prasetya – Software Developer, AI specialist, and Cloud Computing enthusiast. Explore projects in data science, machine learning, and full-stack development.",
  keywords: [
    "Software Developer",
    "Data Scientist",
    "Machine Learning",
    "Cloud Computing",
    "AI",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Erlangga Prasetya" }],
  creator: "Muhammad Erlangga Prasetya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://erlanggs.com",
    title: "Erlanggs | Software Developer & Data Specialist",
    description:
      "Portfolio of Muhammad Erlangga Prasetya – Software Developer and AI specialist.",
    siteName: "Erlanggs Portfolio",
    images: [
      {
        url: "/profile-img.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Erlangga Prasetya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erlanggs | Software Developer & Data Specialist",
    description:
      "Portfolio of Muhammad Erlangga Prasetya – Software Developer and AI specialist.",
    images: ["/profile.png"],
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

/* SEO Metadata */
export const metadata = {
  title: "CareerDisha | Career Guidance for Students",
  description:
    "CareerDisha helps students choose the right career path with expert guidance, resources, and career insights.",
  keywords: [
    "career guidance",
    "career options after 12th",
    "career counseling",
    "student career help",
    "CareerDisha",
  ],
  authors: [{ name: "CareerDisha Team" }],
  creator: "CareerDisha",
  publisher: "CareerDisha",

  metadataBase: new URL("https://careerdisha.vercel.app"),

  openGraph: {
    title: "CareerDisha | Find Your Perfect Career Path",
    description:
      "Explore career options, get guidance, and plan your future with CareerDisha.",
    url: "https://careerdisha.vercel.app",
    siteName: "CareerDisha",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CareerDisha Career Guidance Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CareerDisha | Career Guidance Platform",
    description:
      "Helping students discover the best career paths and opportunities.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
import { Outfit, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata = {
  title: "ELV8S | Elevate Your Career",
  description: "Premier training for professionals navigating the modern workplace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className={`${dmSans.className} antialiased font-sans bg-neutral-50 text-primary-900`}>{children}</body>
    </html>
  );
}

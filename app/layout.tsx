import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Instrument_Serif,
  Noto_Sans_SC
} from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/components/LocaleProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display-en",
  display: "swap"
});

const notoSansSc = Noto_Sans_SC({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  display: "swap"
});

const fontVariables = [inter.variable, mono.variable, display.variable, notoSansSc.variable].join(
  " "
);

export const metadata: Metadata = {
  title: "Liang Yue — Senior Product Designer",
  description:
    "Product designer with 10+ years across Southeast Asia, fintech and AI. Selected case studies, cross-cultural research, and measurable outcomes.",
  metadataBase: new URL("https://liangyue.design"),
  openGraph: {
    title: "Liang Yue — Senior Product Designer",
    description:
      "Selected work across SEA insurance, enterprise banking and AI co-pilots.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="noise min-h-screen">
        <LocaleProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}

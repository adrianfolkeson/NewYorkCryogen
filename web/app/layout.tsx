import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const display = Familjen_Grotesk({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "AC-130 Viper – Medicinsk högtryckskryoterapi | New York Cryogen Sverige",
  description:
    "AC-130 Viper från New York Cryogen: riktad högtryckskryoterapi med CO₂ för kliniker. 3–5 minuters behandling, integrerad hudtemperatursensor och löpande CO₂-leverans.",
  openGraph: {
    title: "AC-130 Viper – Medicinsk högtryckskryoterapi",
    description: "Riktad kyla med kirurgisk precision. Nu i Sverige genom Aurora Ecom AB.",
    locale: "sv_SE",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f9fc",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${display.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}

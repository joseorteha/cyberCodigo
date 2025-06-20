import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./../scss/main.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeToggle from "@/components/ThemeToggle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Cyber Código - Desarrollo Web en Zongolica",
  description: "Páginas web profesionales para negocios locales en Zongolica, Veracruz. Desde $999 MXN.",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

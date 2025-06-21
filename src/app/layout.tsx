import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import dynamic from 'next/dynamic';
import "./../scss/main.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Carga dinámica del componente que usa canvas y window
const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), {
  ssr: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Cyber Código - Desarrollo Web Profesional",
  description: "Transformamos ideas en soluciones digitales. Diseño y desarrollo de páginas web, e-commerce y aplicaciones a la medida para potenciar tu negocio.",
  metadataBase: new URL('https://cybercodigo-seven.vercel.app'),
  openGraph: {
    title: 'Cyber Código - Desarrollo Web Profesional',
    description: 'Soluciones digitales a la medida para tu negocio.',
    images: '/LOGO.jpg', 
  },
  icons: {
    icon: '/favico.ico',
    shortcut: '/favico.ico',
    apple: '/favico.ico',
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
        <AnimatedBackground />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

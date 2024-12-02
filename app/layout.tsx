import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-psi-orcin-14.vercel.app/'),
  title: {
    default: 'Adrian | Frontend Software Developer',
    template: '%s - Adrian Portfolio',
  },
  description:
    'Portafolio profesional de Adrián, Frontend Software Developer especializado en JavaScript. Descubre proyectos innovadores desarrollados con Nextjs, React.js, Javascript, Node.js, Express y, Postgresql y MongoDB.',
  keywords: [
    'Desarrollador Frontend',
    'Nextjs',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express',
    'Postgresql',
    'MongoDB',
    'Portafolio Web',
    'Desarrollo de Software',
    'Aplicaciones Web',
    'Frontend y Backend',
  ],
  openGraph: {
    title: 'Adrián | Frontend Software Developer',
    images: '/public/portfolio-thumbnail.png',
    description:
      'Explora los proyectos y habilidades de Adrian como Frontend Developer con enfoque en tecnologías modernas como Javascript, Nextjs, React, Node.js, Postgresql y MongoDB.',
    url: 'https://portfolio-psi-orcin-14.vercel.app/',
    type: 'website',
  },
  referrer: 'origin-when-cross-origin',
  creator: 'Adrian Rivarola',
  publisher: 'Portfolio by Adrian Rivarola',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#181818] text-white`}
      >
        {children}
      </body>
    </html>
  );
}

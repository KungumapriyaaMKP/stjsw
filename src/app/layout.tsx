import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF9F6",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sjmhss.org"),
  title: {
    default: "St. Joseph's Matriculation Higher Secondary School | Tirupur",
    template: "%s | St. Joseph's MHSS, Tirupur",
  },
  description:
    "Official website of St. Joseph's Matriculation Higher Secondary School, 35, Kangayam Road, Tirupur (Est. 1965). Offering Kindergarten through Higher Secondary education under the Tamil Nadu State Board and Matriculation curriculum. Motto: Shine and Let Shine.",
  keywords: [
    "St. Joseph's Matriculation Higher Secondary School",
    "St. Joseph's School Tirupur",
    "Kangayam Road School Tirupur",
    "Best Matriculation School in Tirupur",
    "JOSATS Alumni Tirupur",
    "SJMHSS Tirupur",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "St. Joseph's Matriculation Higher Secondary School | Tirupur",
    description:
      "Established in 1965 at 35, Kangayam Road, Tirupur. Kindergarten to Higher Secondary education under Tamil Nadu State Board & Matriculation standards. Shine and Let Shine.",
    type: "website",
    locale: "en_IN",
    siteName: "St. Joseph's Matriculation Higher Secondary School, Tirupur",
    images: [
      {
        url: "/images/campus/main-building.jpg",
        width: 1200,
        height: 675,
        alt: "St. Joseph's Matriculation Higher Secondary School Main Building, Tirupur",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/images/campus/main-building.jpg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/logo.png"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://db.onlinewebfonts.com/t/47ae039b7c9d2205f7732048396d86c4.woff2"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF9F6] text-[#111110] antialiased selection:bg-[#111110] selection:text-[#FAF9F6]">
        {children}
      </body>
    </html>
  );
}

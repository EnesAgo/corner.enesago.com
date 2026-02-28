import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ENESAGO.EXE | Enes Ago",
  description: "fullstack dev × skater × internet archaeologist. building things with react, nextjs, nestjs + mongodb. this is my corner of the web.",
  keywords: ["developer", "fullstack", "react", "nextjs", "nestjs", "mongodb", "typescript", "portfolio"],
  authors: [{ name: "Enes Ago" }],
  openGraph: {
    title: "ENESAGO.EXE | Enes Ago",
    description: "fullstack dev × skater × internet archaeologist",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENESAGO.EXE | Enes Ago",
    description: "fullstack dev × skater × internet archaeologist",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}


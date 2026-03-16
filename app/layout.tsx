import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { site } from "@/data/jlite";
import "./globals.css";

export const metadata: Metadata = {
  title: "JLite Language Project",
  description: site.subtitle
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="relative flex min-h-screen flex-col bg-paper">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(14,116,144,0.15),transparent_38%),radial-gradient(circle_at_80%_0%,rgba(217,119,6,0.14),transparent_30%)]" />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

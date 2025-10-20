import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ProjectX — Learn. Work. Earn.",
  description:
    "A futuristic learning-work ecosystem: real-world kits, STREAMS+ education, and community-powered growth.",
  icons: { icon: "/logo.svg" },
  keywords: ["ProjectX", "STREAMS+", "kits", "education", "learn work earn"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-px-stone text-white antialiased">
        <div className="fixed inset-0 -z-10 px-glow" />
        <Navbar />
        <main className="container-px py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

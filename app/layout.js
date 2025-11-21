import { Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Leaf, Menu } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Hydroponic Assistant",
  description: "Your Smart Assistant for Hydroponic Growing Success",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
              <Leaf className="w-6 h-6" />
              <span>HydroSmart</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-muted">
              <Link href="/builder" className="hover:text-primary transition-colors">System Builder</Link>
              <Link href="/doctor" className="hover:text-primary transition-colors">Plant Doctor</Link>
              <Link href="/nutrients" className="hover:text-primary transition-colors">Nutrients</Link>
              <Link href="/library" className="hover:text-primary transition-colors">Library</Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="md:hidden">
                <Menu className="w-6 h-6" />
              </button>
              <Link href="/builder" className="btn btn-primary text-sm hidden md:inline-flex">
                Get Started
              </Link>
            </div>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-secondary border-t py-12 mt-20">
          <div className="container">
            <div className="grid grid-2 gap-8">
              <div>
                <div className="flex items-center gap-2 text-xl font-bold text-primary mb-4">
                  <Leaf className="w-6 h-6" />
                  <span>HydroSmart</span>
                </div>
                <p className="text-muted max-w-sm">
                  Empowering growers with smart tools and AI-driven insights for abundant hydroponic harvests.
                </p>
              </div>
              <div className="grid grid-2 gap-8 text-sm">
                <div className="flex flex-col gap-3">
                  <h4 className="font-semibold">Features</h4>
                  <Link href="/builder" className="text-muted hover:text-primary">System Builder</Link>
                  <Link href="/doctor" className="text-muted hover:text-primary">Plant Doctor</Link>
                  <Link href="/nutrients" className="text-muted hover:text-primary">Nutrient Calc</Link>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="font-semibold">Resources</h4>
                  <Link href="/library" className="text-muted hover:text-primary">Plant Library</Link>
                  <Link href="/blog" className="text-muted hover:text-primary">Grow Guides</Link>
                  <Link href="/faq" className="text-muted hover:text-primary">FAQ</Link>
                </div>
              </div>
            </div>
            <div className="border-t border-green-200 mt-12 pt-8 text-center text-sm text-muted">
              © {new Date().getFullYear()} HydroSmart. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

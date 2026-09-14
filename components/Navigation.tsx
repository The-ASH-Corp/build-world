"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute top-0 left-0 w-full z-50 bg-transparent py-8"
    >
      <div className="w-full px-6 md:px-12 2xl:px-[8%] flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/xf1KVhd5mSnEPZmJKk1lycYyUc.png" 
            alt="Build World Logo" 
            width={200} 
            height={60} 
            className="h-10 md:h-12 w-auto object-contain brightness-0 invert" 
            priority
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] transition-colors hover:text-white ${isActive ? "text-white font-bold" : "text-gray-300 font-medium"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-[#050505] flex flex-col pt-8 px-6 md:px-12 overflow-y-auto pb-8"
          >
            <div className="flex justify-between items-center mb-16">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Image 
                  src="/images/xf1KVhd5mSnEPZmJKk1lycYyUc.png" 
                  alt="Build World Logo" 
                  width={200} 
                  height={60} 
                  className="h-10 w-auto object-contain brightness-0 invert" 
                  priority
                />
              </Link>
              <button 
                className="text-white p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col gap-8 items-center">
              {links.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-['Menbere'] text-[24px] uppercase tracking-widest transition-colors hover:text-white ${isActive ? "text-white font-bold" : "text-gray-400 font-medium"}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

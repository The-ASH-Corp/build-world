"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Projects", href: "/projects" },
  { name: "Awards", href: "/awards" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[#06070a]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="grid grid-cols-3 gap-1 rotate-45 scale-75">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 ${[1, 3, 4, 5, 7].includes(i) ? "border-2 border-white" : "bg-white"}`}
              ></div>
            ))}
          </div>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
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
      </div>
    </motion.nav>
  );
}

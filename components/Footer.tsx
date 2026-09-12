"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050608] text-white pt-24 pb-8 border-t border-white/10">
      <div className="max-w-[1533px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-16">
        
        {/* Column 1 - Brand */}
        <div className="w-full lg:w-1/3 flex flex-col items-start">
        
          <Image src="/images/GZGE9BLDIEh0JDNrm7SHDbdU8y4.png" alt="Build World Logo" width={200} height={60} className="h-12 md:h-16 w-auto object-contain" />
          <p className="text-gray-400 text-sm leading-loose pr-4 lg:pr-8 font-bold">
            At Build World, we are dedicated to achieving excellence and ensuring customer happiness. With our uncompromising willpower and years of experience, we have built a strong reputation in the construction business.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="w-full lg:w-1/6">
          <h4 className="text-[#2a9df4] text-xs font-bold tracking-widest uppercase mb-6">QUICK LINKS</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About us</Link></li>
            <li><Link href="/service" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link href="/awards" className="hover:text-white transition-colors">Awards</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact Us */}
        <div className="w-full lg:w-1/4">
          <h4 className="text-[#2a9df4] text-xs font-bold tracking-widest uppercase mb-6">CONTACT US</h4>
          <div className="text-gray-300 text-sm leading-relaxed flex flex-col gap-4">
            <p>
              3rd Floor, 1316, Door No.2/1149 A47,<br />
              Hilite Business Park, Thondayad Bypass,<br />
              Kozhikode,Kerala - 673014
            </p>
            <p>
              Email : mail@buildworld.in<br />
              Mobile : +9190378 63030
            </p>
          </div>
        </div>

        {/* Column 4 - Map (Placeholder for actual iframe) */}
        <div className="w-full lg:w-1/4">
           <div className="w-full h-[200px] rounded-xl overflow-hidden bg-gray-800 border border-white/10 relative cursor-pointer group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.1234567890123!2d75.78012345678901!3d11.258123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5c12345678901%3A0xabcdef1234567890!2sHilite%20Business%20Park%2C%20Kozhikode%2C%20Kerala%20673014!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
           </div>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1533px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px]">&copy; 2026 BuildWorld Construction LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-300 transition-colors text-[10px]">Safety Act Compliance</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors text-[10px]">Terms of Estimate</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors text-[10px]">Privacy Protocol</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 
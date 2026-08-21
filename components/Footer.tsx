"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050608] text-white pt-24 pb-8 border-t border-white/10">
      <div className="max-w-[1533px] mx-auto px-6 xl:px-24 flex flex-col md:flex-row justify-between gap-12 mb-16">
        
        {/* Column 1 - Brand */}
        <div className="md:w-1/3 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <div className="grid grid-cols-3 gap-1 rotate-45 scale-[0.6]">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`w-3 h-3 ${[1,3,4,5,7].includes(i) ? 'border-2 border-[#2a9df4]' : 'bg-[#2a9df4]'}`}></div>
              ))}
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#2a9df4]">BUILD</h2>
              <h2 className="text-2xl font-bold tracking-tight text-[#2a9df4] leading-3">WORLD</h2>
              <p className="text-[10px] text-[#2a9df4] tracking-widest mt-1 uppercase">CONSTRUCTIONS PVT. LTD.</p>
              <p className="text-[8px] text-[#2a9df4] mt-1">AN ISO 9001:2015 Certified Construction Company</p>
            </div>
          </div>
          <p className="text-gray-400 text-xs leading-loose pr-8">
            At Build World, we are dedicated to achieving excellence and ensuring customer happiness. With our uncompromising willpower and years of experience, we have built a strong reputation in the construction business.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="md:w-1/6">
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
        <div className="md:w-1/4">
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
        <div className="md:w-1/4">
           <div className="w-full h-[200px] rounded-xl overflow-hidden bg-gray-800 border border-white/10 relative cursor-pointer group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=Hilite+Business+Park,Kozhikode&zoom=14&size=400x200&sensor=false')" }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold">Open in Maps ↗</span>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-[1533px] mx-auto px-6 xl:px-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 gap-4">
        <p>© 2026 BuildWorld Construction LLC. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-gray-300 transition-colors">Safety Act Compliance</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Estimate</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Protocol</Link>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/buildworld_constructions?srtk=aXltNTluZDFjM2tk",
    icon: FaInstagram,
    hoverClass: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:text-white hover:shadow-pink-500/30",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/18Vpnh4yuW/",
    icon: FaFacebookF,
    hoverClass: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white hover:shadow-blue-600/30",
  },
  // {
  //   name: "X",
  //   href: "https://x.com",
  //   icon: FaXTwitter,
  //   hoverClass: "hover:bg-white hover:border-white hover:text-black hover:shadow-white/20",
  // },
  {
    name: "YouTube",
    href: "https://youtube.com/@buildworld?si=WTJfhLk9HnbV_-HP",
    icon: FaYoutube,
    hoverClass: "hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white hover:shadow-red-600/30",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050608] text-white pt-24 pb-8 border-t border-white/10">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[8%] flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-16">
        
        {/* Column 1 - Brand */}
        <div className="w-full lg:w-1/3 flex flex-col items-start">
        
          <Image src="/images/GZGE9BLDIEh0JDNrm7SHDbdU8y4.webp" alt="Build World Logo" width={200} height={60} className="h-12 md:h-16 w-auto object-contain" />
          <p className="text-gray-400 text-sm leading-loose pr-4 lg:pr-8 font-bold text-justify mb-6">
            At Build World, we are dedicated to achieving excellence and ensuring customer happiness. With our uncompromising willpower and years of experience, we have built a strong reputation in the construction business.
          </p>

          {/* Social Icons */}
          <div className="flex flex-col gap-3">
            <span className="text-[#2a9df4] text-xs font-bold tracking-widest uppercase">FOLLOW US</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Build World on ${social.name}`}
                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-300 shadow-md hover:scale-110 active:scale-95 ${social.hoverClass}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="w-full lg:w-1/6">
          <h4 className="text-[#2a9df4] text-xs font-bold tracking-widest uppercase mb-6">QUICK LINKS</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About us</Link></li>
            <li><Link href="/service" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link href="/achievements" className="hover:text-white transition-colors">Achievements</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/videos" className="hover:text-white transition-colors">Videos</Link></li>
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
        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[8%] py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px]">&copy; 2026 BuildWorld Construction LLC. All rights reserved.</p>
          {/* <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <IconComponent className="w-3.5 h-3.5" />
                </a>
              );
            })}
          </div> */}
        </div>
      </div>
    </footer>
  );
} 
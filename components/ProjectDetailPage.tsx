"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteData } from "@/data/siteData";

interface ProjectDetailPageProps {
  id: string;
}

export default function ProjectDetailPage({ id }: ProjectDetailPageProps) {
  const project = siteData.projectsPage.works.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Get other projects for recommendation
  const otherProjects = siteData.projectsPage.works
    .filter((p) => p.id !== id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-24 selection:bg-[#2991ce] selection:text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-150 h-150 bg-[#2991ce]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-125 h-125 bg-[#2a9df4]/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-383.25 mx-auto px-6 xl:px-24 relative z-10">
        
        {/* Navigation Breadcrumb & Back Button */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between py-6 border-b border-white/10 mb-10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors group font-['Menbere'] text-sm tracking-wider uppercase"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-0.5 transition-transform">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </div>
            <span>Back to Projects</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs font-['Menbere'] text-gray-500 uppercase tracking-widest">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-gray-300 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-[#2991ce] font-semibold">{project.title}</span>
          </div>
        </motion.div>

        {/* Project Header Title & Status */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-4"
          >
            <span className="inline-flex items-center border border-[#2991ce] bg-[#2991ce]/10 text-[#2991ce] rounded-full px-4 py-1.5 text-xs font-bold font-['Menbere'] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="inline-flex items-center border border-white/20 bg-white/5 text-gray-300 rounded-full px-4 py-1.5 text-xs font-medium font-['Menbere']">
              {project.status}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Menbere'] text-[36px] sm:text-[54px] md:text-[80px] font-bold text-white leading-none tracking-tight mb-4"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 font-['Menbere'] text-lg md:text-2xl font-light"
          >
            Client: <span className="text-white font-medium">{project.client}</span>
          </motion.p>
        </div>

        {/* Featured Main Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-80 sm:h-120 md:h-160 rounded-3xl md:rounded-[40px] overflow-hidden border border-[#222] shadow-2xl mb-16 group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.bg})` }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 flex items-center gap-3">
            <div className="w-1 h-9 md:h-12 bg-[#2991ce]" />
            <div>
              <p className="text-xs md:text-sm font-['Menbere'] uppercase tracking-widest text-gray-300">Project Location</p>
              <h3 className="text-lg md:text-2xl font-bold font-['Menbere'] text-white">{project.location}</h3>
            </div>
          </div>
        </motion.div>

        {/* Project Meta / Specifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          <div className="bg-[#111] border border-white/5 rounded-2xl md:rounded-3xl p-6 flex flex-col justify-center">
            <span className="text-gray-500 font-['Menbere'] text-xs uppercase tracking-widest mb-1">Client</span>
            <span className="text-white font-['Menbere'] font-bold text-base md:text-xl leading-tight">{project.client}</span>
          </div>

          <div className="bg-[#111] border border-white/5 rounded-2xl md:rounded-3xl p-6 flex flex-col justify-center">
            <span className="text-gray-500 font-['Menbere'] text-xs uppercase tracking-widest mb-1">Location</span>
            <span className="text-white font-['Menbere'] font-bold text-base md:text-xl leading-tight">{project.location}</span>
          </div>

          <div className="bg-[#111] border border-white/5 rounded-2xl md:rounded-3xl p-6 flex flex-col justify-center">
            <span className="text-gray-500 font-['Menbere'] text-xs uppercase tracking-widest mb-1">Total Area</span>
            <span className="text-white font-['Menbere'] font-bold text-base md:text-xl leading-tight">{project.area}</span>
          </div>

          <div className="bg-[#111] border border-white/5 rounded-2xl md:rounded-3xl p-6 flex flex-col justify-center">
            <span className="text-gray-500 font-['Menbere'] text-xs uppercase tracking-widest mb-1">Year</span>
            <span className="text-white font-['Menbere'] font-bold text-base md:text-xl leading-tight">{project.year}</span>
          </div>
        </motion.div>

        {/* Overview & Key Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-start">
          {/* Left Column: Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-0.75 h-6 bg-[#2991ce]" />
              <h2 className="font-['Menbere'] text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">
                Project Overview
              </h2>
            </div>
            <p className="font-['Menbere'] text-gray-300 text-base md:text-lg leading-relaxed md:leading-loose">
              {project.description}
            </p>
            <div className="pt-4 border-t border-white/10">
              <h4 className="font-['Menbere'] text-xs uppercase tracking-widest text-[#2991ce] font-bold mb-2">Scope of Work</h4>
              <p className="font-['Menbere'] text-gray-400 text-sm md:text-base leading-normal">{project.scope}</p>
            </div>
          </motion.div>

          {/* Right Column: Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <h3 className="font-['Menbere'] text-xl font-bold text-white mb-6 uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2991ce]" />
              Key Project Highlights
            </h3>
            <ul className="flex flex-col gap-4">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300 font-['Menbere'] text-sm md:text-base leading-snug">
                  <div className="w-5 h-5 rounded-full bg-[#2991ce]/10 text-[#2991ce] flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Project Gallery Grid */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-28"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-0.75 h-6 bg-[#2991ce]" />
              <h2 className="font-['Menbere'] text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">
                Visual Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgSrc, idx) => (
                <div 
                  key={idx} 
                  className="relative h-70 md:h-100 rounded-3xl overflow-hidden border border-[#222] group cursor-pointer shadow-lg"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${imgSrc})` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Projects Recommendation Section */}
        {otherProjects.length > 0 && (
          <div className="border-t border-white/10 pt-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <div>
                <p className="text-xs font-['Menbere'] text-[#2991ce] font-bold uppercase tracking-widest mb-2">Explore More</p>
                <h2 className="font-['Menbere'] text-3xl md:text-5xl font-bold text-white capitalize tracking-tight">Other Featured Works</h2>
              </div>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-sm font-bold font-['Menbere'] text-white uppercase tracking-wider hover:text-[#2991ce] transition-colors"
              >
                <span>View All Projects</span>
                <div className="transform group-hover:translate-x-1 transition-transform">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((item, idx) => (
                <Link key={idx} href={`/projects/${item.id}`} className="group block">
                  <div className="relative h-65 md:h-90 rounded-3xl overflow-hidden border border-[#222] bg-[#111]">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.bg})` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="border border-white/20 bg-black/40 backdrop-blur-md rounded-full px-4 py-1 text-white text-xs font-['Menbere']">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <div>
                        <h4 className="font-['Menbere'] text-lg md:text-2xl font-bold text-white group-hover:text-[#2991ce] transition-colors">{item.title}</h4>
                        <p className="font-['Menbere'] text-sm text-gray-400 mt-1">{item.client}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#2991ce] text-white flex items-center justify-center transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17l9.2-9.2M17 17V7H7"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}


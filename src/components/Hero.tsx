"use client";

import { Github, ChevronRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative py-20 flex items-center pt-32 overflow-hidden">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-secondary/10 blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="reveal active">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building <span className="text-primary">Web Apps</span> & <br />
            <span className="text-secondary">AI Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Full Stack Web Developer based in Pakistan — turning ideas into live production
            applications with Next.js and AI integration
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center"
            >
              View Projects
              <ChevronRight size={20} className="ml-1" />
            </Link>
            <Link
              href="https://github.com/saad461"
              target="_blank"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center border border-slate-700"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </Link>
          </div>
        </div>

        <div className="hidden lg:block reveal active delay-300">
          <div className="relative">
            {/* Floating code snippet decoration */}
            <div className="bg-[#1E293B] rounded-xl p-6 shadow-2xl border border-slate-700 transform rotate-3 hover:rotate-0 transition-transform duration-500 font-mono text-sm md:text-base">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-slate-300">
                <code>
{`const generateAI = async (prompt) => {
  const response = await fetch('/api/ai', {
    method: 'POST',
    body: JSON.stringify({ prompt })
  })
  return response.json()
}`}
                </code>
              </pre>
            </div>

            {/* Background decorative element */}
            <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

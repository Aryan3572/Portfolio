"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight, ArrowUp } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section id="contact" className="relative w-full bg-[#F5F4F3] pt-20 sm:pt-28 lg:pt-36 pb-12 overflow-hidden border-t-2 border-black">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-black shadow-[2px_2px_0_0_#0A0A0A] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5800]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#0A0A0A] uppercase">
              06 / GET IN TOUCH
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#0A0A0A] uppercase leading-[0.95]">
            Let&apos;s build something <span className="text-[#FF5800]">great</span>.
          </h2>

          <p className="mt-4 text-lg sm:text-2xl font-serif italic text-neutral-700 max-w-xl">
            Open to full-stack, Web3, and systems-focused engineering opportunities and collaborations.
          </p>
        </div>

        {/* Two-Column Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border-2 border-black shadow-[4px_4px_0_0_#0A0A0A] sm:shadow-[6px_6px_0_0_#0A0A0A] flex flex-col gap-5 sm:gap-6">
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
                DIRECT CONTACT
              </span>

              {/* Email */}
              <a
                href="mailto:rajaryan3572@gmail.com"
                className="group flex items-center gap-4 p-3 rounded-2xl border-2 border-black/10 hover:border-black hover:bg-[#FFF0E6] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F5F4F3] border-2 border-black flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#FF5800] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">EMAIL ADDRESS</span>
                  <span className="text-sm sm:text-base font-black text-[#0A0A0A] truncate">rajaryan3572@gmail.com</span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919905601175"
                className="group flex items-center gap-4 p-3 rounded-2xl border-2 border-black/10 hover:border-black hover:bg-[#FFF0E6] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F5F4F3] border-2 border-black flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#FF5800] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">PHONE / WHATSAPP</span>
                  <span className="text-sm sm:text-base font-black text-[#0A0A0A]">+91 9905601175</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-3 rounded-2xl border-2 border-black/10">
                <div className="w-12 h-12 rounded-xl bg-[#F5F4F3] border-2 border-black flex items-center justify-center text-[#0A0A0A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">LOCATION</span>
                  <span className="text-sm sm:text-base font-black text-[#0A0A0A]">Pune, Maharashtra, India</span>
                </div>
              </div>

              {/* Status pill */}
              <div className="mt-2 pt-4 border-t-2 border-neutral-100 flex items-center gap-2 text-xs font-mono font-bold text-neutral-700">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Ready for high-impact teams & projects</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Aryan3572"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-white border-2 border-black text-[#0A0A0A] text-xs font-black tracking-widest uppercase shadow-[4px_4px_0_0_#0A0A0A] hover:shadow-[5px_5px_0_0_#FF5800] hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <GithubIcon className="w-5 h-5" />
                <span>GITHUB</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aryan-raj35/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-white border-2 border-black text-[#0A0A0A] text-xs font-black tracking-widest uppercase shadow-[4px_4px_0_0_#0A0A0A] hover:shadow-[5px_5px_0_0_#0A66C2] hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border-2 border-black shadow-[5px_5px_0_0_#0A0A0A] sm:shadow-[8px_8px_0_0_#0A0A0A]">
              <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest block mb-2">
                SEND A MESSAGE
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-[#0A0A0A] uppercase tracking-tight mb-6 sm:mb-8">
                Drop your thoughts or opportunities
              </h3>

              <form
                action="https://formsubmit.co/rajaryan3572@gmail.com"
                method="POST"
                className="flex flex-col gap-6"
              >
                <input type="hidden" name="_subject" value="New inquiry from Aryan's Portfolio!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono font-black text-[#0A0A0A] uppercase tracking-wider">
                    YOUR NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Satoshi Nakamoto"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-black bg-[#F5F4F3] text-sm font-bold text-[#0A0A0A] placeholder-neutral-400 focus:outline-none focus:border-[#FF5800] focus:bg-white transition-all shadow-[2px_2px_0_0_#0A0A0A]"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono font-black text-[#0A0A0A] uppercase tracking-wider">
                    YOUR EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. satoshi@bitcoin.org"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-black bg-[#F5F4F3] text-sm font-bold text-[#0A0A0A] placeholder-neutral-400 focus:outline-none focus:border-[#FF5800] focus:bg-white transition-all shadow-[2px_2px_0_0_#0A0A0A]"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono font-black text-[#0A0A0A] uppercase tracking-wider">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your team, project, or vision..."
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-black bg-[#F5F4F3] text-sm font-bold text-[#0A0A0A] placeholder-neutral-400 focus:outline-none focus:border-[#FF5800] focus:bg-white transition-all shadow-[2px_2px_0_0_#0A0A0A] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF5800] text-white text-xs sm:text-sm font-black tracking-widest uppercase border-2 border-black shadow-[4px_4px_0_0_#0A0A0A] hover:shadow-[6px_6px_0_0_#0A0A0A] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[2px_2px_0_0_#0A0A0A] transition-all"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Footer Area */}
        <div className="mt-16 sm:mt-24 lg:mt-28 pt-8 sm:pt-10 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono font-bold text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5800]" />
            <span>&copy; {new Date().getFullYear()} ARYAN RAJ. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>PUNE, IN · IST (+05:30)</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-black bg-white text-[#0A0A0A] shadow-[2px_2px_0_0_#0A0A0A] hover:shadow-[3px_3px_0_0_#FF5800] hover:-translate-y-0.5 transition-all text-xs font-black uppercase"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

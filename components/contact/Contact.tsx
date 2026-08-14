"use client";

import { motion, animate } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const scrollToTop = () => {
    // Custom buttery-smooth scroll animation bypassing the browser's default speed
    animate(window.scrollY, 0, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1], // easeOutQuint curve for extremely smooth deceleration
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  return (
    <section id="contact" className="relative w-full bg-white pt-32 pb-8 overflow-hidden border-t-[3px] border-black">
      <div className="mx-auto w-full max-w-5xl px-6">
        
        {/* Header */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
           className="text-center mb-24 flex flex-col items-center"
        >
          <span className="mb-4 block text-sm font-bold tracking-widest text-[#ff5500] uppercase">06 Contact</span>
          <h2 className="text-5xl font-black leading-tight tracking-tight text-black md:text-7xl mb-6">
            Let&apos;s build something.
          </h2>
          <p className="text-lg font-medium text-neutral-500 max-w-xl">
            Open to full-stack, Web3, and systems-focused roles and collaborations.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-20 md:gap-8 justify-between">
          
          {/* Left: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col flex-1 gap-12 md:pt-4 items-center md:items-start"
          >
            <div className="flex flex-col gap-8 w-full max-w-xs">
              <a href="mailto:rajaryan3572@gmail.com" className="group flex items-center gap-6 w-fit">
                <div className="w-14 h-14 rounded-full border-[3px] border-black flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:bg-[#ff5500] group-hover:text-white bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg font-bold text-neutral-600 group-hover:text-black transition-colors">rajaryan3572@gmail.com</span>
              </a>

              <a href="tel:+919905601175" className="group flex items-center gap-6 w-fit">
                <div className="w-14 h-14 rounded-full border-[3px] border-black flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:bg-[#ff5500] group-hover:text-white bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-lg font-bold text-neutral-600 group-hover:text-black transition-colors">+91 9905601175</span>
              </a>
            </div>

            <div className="flex gap-6 mt-4">
              <a href="https://github.com/Aryan3572" target="_blank" rel="noopener noreferrer" className="group w-16 h-16 rounded-full border-[3px] border-black flex items-center justify-center hover:bg-black hover:text-white transition-all hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_#ff5500] bg-white text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.6.5-1.2.5-2.5 0-3.4 0 0-1-0.2-2.3 0.7a9 9 0 0 0-4.6 0c-1.3-0.9-2.3-0.7-2.3-0.7-.5 0.9-.5 2.2 0 3.4 0 3.6 3 5.6 6 5.6-1 0-1.8 0.6-2 1.6-1.5 0.7-3 0.7-4.5 0-1.5-0.7-2-2-2-2-0.5-1.5-1.5-2-1.5-2-1 0-1 0.5-1 0.5 0.5 1 1.5 1.5 1.5 1.5 1 1.5 2 2 3.5 2 1.5 0 2 0 3-0.5v3.5"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/aryan-raj35/" target="_blank" rel="noopener noreferrer" className="group w-16 h-16 rounded-full border-[3px] border-black flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_#ff5500] bg-white text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col flex-1 gap-10 md:max-w-md w-full mx-auto"
            action="https://formsubmit.co/rajaryan3572@gmail.com" 
            method="POST"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New submission from your Portfolio!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <div className="relative">
              <input required type="text" id="name" name="name" placeholder=" " className="peer w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-bold text-black focus:outline-none focus:border-[#ff5500] transition-colors" />
              <label htmlFor="name" className="absolute left-0 top-3 text-xs font-black tracking-widest text-neutral-400 uppercase transition-all peer-focus:-top-5 peer-focus:text-[#ff5500] peer-focus:text-[10px] peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-[10px] cursor-text">Name</label>
            </div>

            <div className="relative">
              <input required type="email" id="email" name="email" placeholder=" " className="peer w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-bold text-black focus:outline-none focus:border-[#ff5500] transition-colors" />
              <label htmlFor="email" className="absolute left-0 top-3 text-xs font-black tracking-widest text-neutral-400 uppercase transition-all peer-focus:-top-5 peer-focus:text-[#ff5500] peer-focus:text-[10px] peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-[10px] cursor-text">Email</label>
            </div>

            <div className="relative mt-2">
              <textarea required id="message" name="message" rows={1} placeholder=" " className="peer w-full bg-transparent border-b-2 border-neutral-300 py-3 text-lg font-bold text-black focus:outline-none focus:border-[#ff5500] transition-colors resize-none overflow-hidden min-h-[40px]"></textarea>
              <label htmlFor="message" className="absolute left-0 top-3 text-xs font-black tracking-widest text-neutral-400 uppercase transition-all peer-focus:-top-5 peer-focus:text-[#ff5500] peer-focus:text-[10px] peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-[10px] cursor-text">Message</label>
            </div>

            <button type="submit" className="group mt-6 w-fit bg-black text-white px-8 py-4 rounded-full font-black text-sm tracking-widest flex items-center gap-3 transition-transform hover:-translate-y-1 active:translate-y-0" style={{ boxShadow: "6px 6px 0px 0px #ff5500" }}>
              SEND MESSAGE
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.form>

        </div>

      </div>
      
      {/* Footer Area */}
      <div className="w-full border-t-[3px] border-neutral-100 mt-40 pt-10 px-6 flex flex-col md:flex-row gap-6 justify-between items-center text-xs font-black tracking-widest text-neutral-400 uppercase max-w-7xl mx-auto">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Aryan Raj. All rights reserved.</p>
        <button onClick={scrollToTop} className="hover:text-black transition-colors flex items-center gap-2">
          BACK TO TOP &uarr;
        </button>
      </div>

    </section>
  );
}

import React, { useState } from 'react';
import { profile } from "../data";
import profilePic from "../assets/profile.jpg";
import cvFile from "../assets/CV-Wandy Reynand Lim.pdf";
import Typewriter from "./Typewriter";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const CVModal = ({ isOpen, onClose, fileUrl }) => {
        if (!isOpen) return null;

        return (
            <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300" 
                onClick={onClose}
            >
                <div 
                    className="relative w-11/12 max-w-4xl h-5/6 bg-slate-800 border border-slate-700/50 rounded-xl shadow-lg 
                               flex flex-col overflow-hidden animate-fadeIn" 
                    onClick={e => e.stopPropagation()} 
                >
                    
                    <div className="flex justify-between items-center p-4 md:p-5 border-b border-slate-700/50 bg-slate-900">
                        <h2 className="text-white text-2xl md:text-3xl font-bold">My CV</h2>
                        <button
                            onClick={onClose}
                            className="text-white/70 hover:text-white transition-colors duration-200 
                                       text-3xl font-light leading-none p-1 md:p-2 rounded-full" 
                            aria-label="Close CV Preview"
                        >
                            &times; 
                        </button>
                    </div>

                    <div className="flex-grow p-4 md:p-5 overflow-hidden">
                        <iframe 
                            src={fileUrl} 
                            title="CV Preview"
                            className="w-full h-full rounded-lg border border-white/10"
                        >
                            Browser Anda tidak mendukung iframe, silakan download CV.
                        </iframe>
                    </div>
                    
                    <div className="p-4 md:p-5 flex justify-center border-t border-slate-700/50 bg-slate-900">
                        <a 
                            href={fileUrl}
                            download="CV-Wandy Reynand Lim.pdf"
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 
                                       text-slate-950 font-semibold text-lg transition 
                                       hover:from-cyan-300 hover:to-emerald-300 hover:shadow-lg hover:shadow-cyan-400/20"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="grid md:grid-cols-2 items-center gap-12">
                <div>
                    <p className="text-cyan-400 font-medium tracking-widest uppercase">
                        <Typewriter text="Hello there," speed={70} />
                    </p>

                    <h1 className="mt-3 text-5xl md:text-6xl font-semibold leading-tight text-white">
                        I’m{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            {profile.name}
                        </span>
                    </h1>

                    <p className="mt-6 text-white/80 max-w-xl leading-relaxed">
                        I’m an undergraduate{" "}
                        <span className="text-cyan-400 font-bold">Computer Science</span> student at{" "}
                        <span className="text-cyan-400 font-bold">BINUS University – Alam Sutera</span>, deeply
                        interested in Intelligent Systems. I love experimenting, building, and learning
                        through real projects that challenge my creativity. My goal is to design
                        intelligent technologies that are both innovative and impactful.
                    </p>

                    <div className="mt-8 flex gap-3">
                        <a href="#projects" 
                            className="px-4 py-3 rounded-xl bg-cyan-400/90 text-slate-950 font-semibold transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
                        >
                            View Projects
                        </a>
                        
                        <button
                            onClick={openModal}
                            className="px-4 py-3 rounded-xl border border-white/15 text-white/80 font-semibold transition hover:bg-white/10 hover:border-white/30"
                        >
                            Preview CV
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 blur-2xl -z-10" />
                    <img
                        src={profilePic}
                        alt={profile.name}
                        className="relative rounded-2xl shadow-2xl ring-1 ring-white/20 transition-transform duration-300
                        w-full max-w-[320px] md:max-w-[360px] lg:max-w-[400px]
                        h-[380px] md:h-[420px] object-cover object-[50%_30%] mx-auto"
                    />
                </div>
            </div>
            
            <CVModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                fileUrl={cvFile} 
            />
        </>
    );
}
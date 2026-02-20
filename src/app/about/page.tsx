'use client';
import React from 'react';

export default function About() {
    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-primary selection:text-white">
            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 z-[100] w-full glass-panel px-6 py-4 flex justify-between items-center bg-black/40">
                <a href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform overflow-hidden">
                        <img src="/appicon.png" alt="Mighty Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-black tracking-[0.2em] text-lg uppercase italic pe-2 -me-2">MIGHTY</span>
                </a>
                <a href="/" className="px-5 py-2 glass-panel border-white/10 text-[10px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all">Back Home</a>
            </nav>

            <main className="relative pt-40 pb-20 px-6 max-w-4xl mx-auto z-10">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-6xl font-black tracking-tighter uppercase italic">
                            Empowering the <br />
                            <span className="text-gradient-primary pe-4 -me-4">Competitor</span> Inside
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                            Mighty is more than just a tournament platform. It's a professional ecosystem designed for mobile esports athletes who demand excellence, transparency, and high-stakes competition.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                        <div className="glass-panel p-8 rounded-2xl border-white/5 space-y-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-xl font-black tracking-widest uppercase italic">Our Mission</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">To democratize professional esports by providing every player a platform to compete, win, and earn recognition on a global scale.</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl border-white/5 space-y-4">
                            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            </div>
                            <h3 className="text-xl font-black tracking-widest uppercase italic">Our Values</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Integrity, fairness, and speed. We believe every tournament should be played by the book and every win should be rewarded instantly.</p>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5 space-y-8 text-muted-foreground leading-relaxed">
                        <h2 className="text-3xl font-black text-white tracking-widest uppercase italic">The Mighty Story</h2>
                        <p>Founded by passionate gamers and esports professionals, Mighty was born out of a simple need: a reliable, high-performance platform for Free Fire Max enthusiasts. We saw the potential in mobile gaming and decided to build the infrastructure it deserved.</p>
                        <p>Today, Mighty hosts thousands of matches daily, serving a vibrant community of players who view gaming not just as a hobby, but as a career path. With advanced anti-cheat measures, real-time tracking, and automated payouts, we are setting the new standard for mobile esports tournaments.</p>
                    </div>

                    <div className="pt-12 flex justify-center">
                        <a href="/download/mighty-latest.apk" className="px-12 py-5 bg-white text-black font-black tracking-widest uppercase italic rounded-xl hover:bg-primary hover:text-white transition-all shadow-2xl">Join the Arena</a>
                    </div>
                </div>
            </main>

            <footer className="py-12 border-t border-white/5 text-center px-6">
                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-muted-foreground">© 2026 MIGHTY ESPORTS PLATFORM - ALL RIGHTS RESERVED</p>
            </footer>
        </div>
    );
}

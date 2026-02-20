'use client';
import React from 'react';

const PolicyPage = ({ title, lastUpdated, children }: { title: string, lastUpdated: string, children: React.ReactNode }) => (
    <div className="relative min-h-screen bg-black text-white selection:bg-primary selection:text-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <nav className="fixed top-0 z-[100] w-full glass-panel px-6 py-4 flex justify-between items-center bg-black/40">
            <a href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 overflow-hidden">
                    <img src="/appicon.png" alt="Mighty Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-black tracking-[0.2em] text-lg uppercase italic pe-2 -me-2">MIGHTY</span>
            </a>
            <a href="/" className="px-5 py-2 glass-panel border-white/10 text-[10px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all">Back Home</a>
        </nav>

        <main className="relative pt-40 pb-20 px-6 max-w-4xl mx-auto z-10">
            <div className="space-y-8">
                <div>
                    <h1 className="text-5xl font-black tracking-tighter uppercase italic mb-2">{title}</h1>
                    <p className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">Last Updated: {lastUpdated}</p>
                </div>
                <div className="glass-panel p-8 sm:p-12 rounded-3xl border-white/5 prose prose-invert max-w-none text-muted-foreground leading-relaxed font-medium">
                    {children}
                </div>
            </div>
        </main>

        <footer className="py-12 border-t border-white/5 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] font-black text-muted-foreground">© 2026 MIGHTY ESPORTS - LEGAL DEPARTMENT</p>
        </footer>
    </div>
);

export default function Terms() {
    return (
        <PolicyPage title="Terms & Conditions" lastUpdated="February 20, 2026">
            <h3 className="text-white text-xl font-bold mt-8 mb-4">1. Eligibility</h3>
            <p>Users must be at least 18 years old or have legal guardian consent to participate in paid tournaments. Employees and affiliates of Mighty Esports are not eligible for cash prizes.</p>

            <h3 className="text-white text-xl font-bold mt-8 mb-4">2. Account Responsibility</h3>
            <p>You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account is your responsibility. Using third-party tools or cheats will result in an immediate permanent ban.</p>

            <h3 className="text-white text-xl font-bold mt-8 mb-4">3. Tournament Rules</h3>
            <p>Specific game rules for Battle Royale and Clash Squad are listed in each tournament entry. Decisions made by Mighty tournament moderators are final. We reserve the right to disqualify any player found violating professional conduct.</p>

            <h3 className="text-white text-xl font-bold mt-8 mb-4">4. Intellectual Property</h3>
            <p>All logos, branding, and platform code are the property of Mighty. Users are granted a limited license to access and use the platform for competitive gaming purposes only.</p>
        </PolicyPage>
    );
}

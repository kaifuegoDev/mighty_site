'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setNavVisible(currentY < lastScrollY.current || currentY < 60);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden selection:bg-primary selection:text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow font-sans" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 z-[100] w-full glass-panel px-6 py-4 flex justify-between items-center bg-black/40 transition-transform duration-300 ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
            <img src="/appicon.png" alt="Mighty Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-black tracking-[0.2em] text-lg uppercase italic group-hover:tracking-[0.25em] transition-all">MIGHTY</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Platform', 'Community', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors">
              {item}
            </a>
          ))}
          <a href="/download/mighty-latest.apk" className="px-5 py-2 bg-white text-black rounded-lg text-[10px] font-black tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300">
            Download
          </a>
        </div>
        <div className="md:hidden text-2xl font-black">☰</div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 min-h-[70vh]">
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[1.0] uppercase italic pr-4">
              Unleash Your <br />
              <span className="text-gradient-primary drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] pe-6">Mighty</span> Spirit
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-xl leading-relaxed">
              Mighty is the ultimate competitive arena for Free Fire Max. Engage in skill-based tournaments, showcase your dominance, and rise through the ranks in a professional esports ecosystem.
            </p>
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start gap-5 pt-8 w-full group/btns">
              <a
                href="/download/mighty-latest.apk"
                className="w-full sm:w-[260px] h-[64px] bg-white text-black font-black text-sm tracking-[0.25em] rounded-lg hover:scale-105 transition-all flex justify-center items-center gap-3 uppercase italic shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-primary/40 relative overflow-hidden group shrink-0"
              >
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-1" />
                <svg className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414C17.067 15.3414 16.697 14.9704 16.697 14.5154C16.697 14.0594 17.067 13.6894 17.523 13.6894C17.978 13.6894 18.349 14.0594 18.349 14.5154C18.349 14.9704 17.978 15.3414 17.523 15.3414ZM6.477 15.3414C6.021 15.3414 5.651 14.9704 5.651 14.5154C5.651 14.0594 6.021 13.6894 6.477 13.6894C6.932 13.6894 7.303 14.0594 7.303 14.5154C7.303 14.9704 6.932 15.3414 6.477 15.3414ZM17.947 10.7494L19.782 7.5704C19.873 7.4124 19.82 7.2104 19.662 7.1184C19.504 7.0274 19.301 7.0804 19.21 7.2384L17.345 10.4684C15.827 9.7744 14.032 9.3884 12.012 9.3884C9.991 9.3884 8.196 9.7744 6.678 10.4684L4.813 7.2384C4.722 7.0804 4.519 7.0274 4.361 7.1184C4.203 7.2104 4.149 7.4124 4.24 7.5704L6.075 10.7494C3.125 12.3374 1.109 15.2974 1.012 18.7994H23.012C22.915 15.2974 20.898 12.3374 17.947 10.7494Z" />
                </svg>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 whitespace-nowrap">Download APK</span>
              </a>
              <button className="w-full sm:w-[260px] h-[64px] glass-panel text-white font-black text-sm tracking-[0.25em] rounded-lg hover:bg-white/10 hover:border-white/20 transition-all uppercase italic border-white/5 flex items-center justify-center gap-3 group shrink-0">
                <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="whitespace-nowrap">Open Web App</span>
              </button>
            </div>

          </div>

          {/* App Preview Mockup - Centered & Responsive */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end animate-float">
            <div className="relative w-full max-w-[320px] aspect-[9/18.5] sm:max-w-[360px]">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse-slow" />
              <div className="relative h-full glass-panel rounded-3xl p-3 border-white/20 shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-[#09090B] rounded-2xl overflow-hidden flex flex-col pt-10">
                  {/* Fake App UI Header */}
                  <div className="px-5 flex justify-between items-center mb-6">
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                      <img src="/appicon.png" alt="App Icon" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-white font-black text-xs tracking-[0.3em] italic">MIGHTY</span>
                    <div className="w-9 h-9" />
                  </div>

                  {/* Carousel Mockup - Loading State */}
                  <div className="px-4 mb-6">
                    <div className="w-full aspect-[21/9] rounded-lg bg-white/[0.03] border border-white/5 relative overflow-hidden animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                    </div>
                    {/* Dots moved below */}
                    <div className="w-full flex justify-center gap-1.5 mt-3">
                      <div className="w-4 h-1 bg-white/20 rounded-full" />
                      <div className="w-1 h-1 bg-white/5 rounded-full" />
                      <div className="w-1 h-1 bg-white/5 rounded-full" />
                    </div>
                  </div>

                  {/* Category Bar Mockup */}
                  <div className="px-4 flex gap-1.5 mb-6">
                    {['BR', 'CS', 'LW', 'ELIM'].map((cat, i) => (
                      <div key={cat} className={`flex-1 h-9 rounded-sm flex items-center justify-center border font-black text-[9px] ${i === 0 ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/10'}`}>
                        {cat}
                      </div>
                    ))}
                  </div>

                  {/* Fake App UI Content */}
                  <div className="px-4 space-y-4 flex-1 overflow-y-auto pb-6 scrollbar-hide pt-4">
                    {[1, 2, 3, 4, 5].map((idx) => (
                      <div key={idx} className="border border-white/5 rounded-sm bg-[#18181B]/50 p-4 flex gap-3 opacity-40">
                        <div className="w-16 h-16 rounded-sm bg-white/5" />
                        <div className="flex-1 space-y-3 pt-1">
                          <div className="w-32 h-2 bg-white/10 rounded-full" />
                          <div className="w-20 h-2 bg-white/5 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Nav Bar Mockup */}
                  <div className="px-6 py-4 border-t border-white/5 flex justify-between items-center bg-[#09090B]">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className={`w-3.5 h-3.5 rounded-full ${i === 1 ? 'bg-white' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section - Premium Grid */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'PRO TOURNEYS',
              desc: 'Daily Free Fire Max, Battle Royale & Clash Squad tournaments with professional rules and high-stakes prize pools.',
              color: 'primary',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              )
            },
            {
              title: 'FAST PAYOUTS',
              desc: 'Experience lightning-fast withdrawals directly to your wallet within minutes.',
              color: 'cyan',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: 'LIVE TRACKING',
              desc: 'Stay updated with real-time match statistics, live leaderboards, and instant results.',
              color: 'primary',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              )
            },
            {
              title: 'SQUAD CO-OP',
              desc: 'Build your ultimate squad, manage team rosters, and compete in collaborative events.',
              color: 'cyan',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            {
              title: 'ELITE RULES',
              desc: 'Strict tournament regulations and professional guidelines ensure every match is played by the book.',
              color: 'secondary',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              )
            },
            {
              title: 'SECURE WALLET',
              desc: 'Industry-standard encryption and high-security protocols protect your assets and data.',
              color: 'primary',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM10 6a2 2 0 114 0v4H10V6z" />
                </svg>
              )
            },
          ].map((feature, i) => (
            <div key={i} className="glass-panel p-10 rounded-xl group transition-all duration-500 hover:-translate-y-2 bg-white/[0.01] border-white/5 hover:border-white/20 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-1 h-0 transition-all duration-500 group-hover:h-full bg-${feature.color}`} />
              <div className={`w-16 h-16 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-${feature.color} mb-10 group-hover:scale-110 group-hover:bg-${feature.color} group-hover:text-white transition-all duration-500 shadow-xl`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black tracking-widest uppercase italic mb-4">{feature.title}</h3>
              <p className="text-base font-medium text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className={`text-[10px] font-black tracking-widest uppercase text-${feature.color}`}>Learn More</span>
                <svg className={`w-3 h-3 text-${feature.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M13 5l7 7-7 7M5 12h14" /></svg>
              </div>
            </div>
          ))}
        </section>

      </main>

      {/* Footer - Social & Premium */}
      <footer className="py-24 px-6 border-t border-white/5 bg-black relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 items-start">
          <div className="flex flex-col items-center md:items-start gap-8 lg:col-span-2">
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                <img src="/appicon.png" alt="Mighty Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-black tracking-[0.4em] text-2xl uppercase italic block leading-none">MIGHTY</span>
                <span className="text-[8px] font-black tracking-[0.5em] text-primary uppercase mt-1 block">Esports Platform</span>
              </div>
            </div>
            <p className="text-base font-medium text-muted-foreground max-w-sm text-center md:text-left leading-relaxed opacity-70">
              The world's premier platform for mobile esports. Join thousands of players, compete in professional arenas, and claim your glory.
            </p>
            <div className="flex items-center gap-4">
              {[
                { name: 'Discord', color: 'hover:bg-[#5865F2]', path: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.947 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z' },
                { name: 'Instagram', color: 'hover:bg-[#E4405F]', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.329 3.608 1.304c.975.975 1.242 2.242 1.304 3.608c.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.329 2.633-1.304 3.608c-.975.975-2.242 1.242-3.608 1.304c-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.329-3.608-1.304c-.975-.975-1.242-2.242-1.304-3.608c-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.329-2.633 1.304-3.608c.975-.975 2.242-1.242 3.608-1.304c1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072C5.775.132 4.905.333 4.14.63C3.348.937 2.677 1.338 2.008 2.008c-.67.67-1.071 1.34-1.378 2.132c-.297.765-.498 1.635-.558 2.913C.014 8.333 0 8.741 0 12c0 3.259.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.378 2.132c.67.67 1.34 1.071 2.132 1.378c.765.297 1.635.498 2.913.558c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.06 2.148-.261 2.913-.558a5.885 5.885 0 0 0 2.132-1.378c.67-.67 1.071-1.34 1.378-2.132c.297-.765.498-1.635.558-2.913c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.261-2.148-.558-2.913a5.885 5.885 0 0 0-1.378-2.132c-.67-.67-1.34-1.071-2.132-1.378c-.765-.297-1.635-.498-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324a6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0a1.44 1.44 0 0 1 2.88 0z' },
                { name: 'YouTube', color: 'hover:bg-[#FF0000]', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' }
              ].map(social => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:-translate-y-1 text-muted-foreground`}
                  title={social.name}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={social.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center md:items-start gap-6">
            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-white/40 border-l-2 border-primary pl-4">Quick Links</h4>
            <div className="flex flex-col gap-4 w-full">
              {[
                { name: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                { name: 'Tournaments', icon: 'M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z' },
                { name: 'About Us', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { name: 'Features', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' }
              ].map(link => (
                <a key={link.name} href="#" className="flex items-center gap-3 text-xs font-bold text-muted-foreground hover:text-white transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
                    <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={link.icon}></path></svg>
                  </div>
                  <span className="uppercase tracking-widest">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center md:items-start gap-6">
            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-white/40 border-l-2 border-secondary pl-4">Legal & Connect</h4>
            <div className="flex flex-col gap-4 w-full">
              {[
                { name: 'Privacy Policy', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                { name: 'Terms & Conditions', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                { name: 'Refund Policy', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
                { name: 'Connect', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
              ].map(link => (
                <a key={link.name} href="#" className="flex items-center gap-3 text-xs font-bold text-muted-foreground hover:text-white transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:bg-secondary/20 group-hover:border-secondary/30 transition-all">
                    <svg className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={link.icon}></path></svg>
                  </div>
                  <span className="uppercase tracking-widest">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

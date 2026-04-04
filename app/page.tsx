'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); element.focus(); }
    setMenuOpen(false);
  };

  const services = [
    { title: 'Armed Guards', desc: 'Licensed armed security for high-risk environments', icon: '\uD83D\uDEE1\uFE0F' },
    { title: 'Unarmed Security', desc: 'Professional presence for events and properties', icon: '\uD83E\uDDD1\u200D\uD83D\uDCBC' },
    { title: 'Mobile Patrol', desc: '24/7 vehicle patrols and rapid response', icon: '\uD83D\uDE93' },
    { title: 'Surveillance', desc: 'CCTV monitoring and alarm response', icon: '\uD83D\uDCF9' },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-600 text-white px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white text-xl" aria-hidden="true">\uD83D\uDEE1\uFE0F</div>
              <div><h1 className="text-lg font-bold text-white">Sentinel</h1><p className="text-[9px] text-red-400 tracking-wider">SECURITY SERVICES</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Services','Industries','About','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item} section`} className="text-sm text-slate-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Get a security quote" className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-colors focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2">Get Quote</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-red-400 focus-visible:outline-2 focus-visible:outline-red-500 rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0" aria-hidden="true"><div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"/></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-red-400 text-sm font-bold tracking-widest mb-4">PROTECTION YOU CAN TRUST</p>
              <h2 id="hero-heading" className="text-6xl md:text-7xl font-bold mb-6 leading-none">YOUR SAFETY,<br/><span className="text-red-500">OUR MISSION</span></h2>
              <p className="text-xl text-slate-400 mb-8 max-w-xl">Licensed, bonded, and insured security professionals. 24/7 protection for businesses, events, and residential properties across the region.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button aria-label="Request a free security assessment" className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2">Free Assessment</button>
                <button aria-label="Call our 24/7 hotline" className="border-2 border-red-500 text-red-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-red-500/10 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2">24/7 Hotline</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'500+',label:'Clients Protected'},{num:'24/7',label:'Response Time'},{num:'15+',label:'Years Experience'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-red-500">{s.num}</div><div className="text-sm text-slate-500">{s.label}</div></div>))}
              </div>
            </div>
          </div>
        </section>
        <section id="services" aria-labelledby="services-heading" className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-red-400 text-sm font-bold tracking-widest mb-4">WHAT WE OFFER</p><h2 id="services-heading" className="text-4xl font-bold text-white mb-4">Security Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s,i) => (<article key={i} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-red-500 transition-all hover:scale-[1.02]"><div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div><h3 className="text-xl font-bold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm">{s.desc}</p></article>))}
            </div>
          </div>
        </section>
        <section id="industries" aria-labelledby="industries-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-red-400 text-sm font-bold tracking-widest mb-4">SERVING</p><h2 id="industries-heading" className="text-4xl font-bold text-white mb-4">Industries We Protect</h2></div>
            <div className="grid md:grid-cols-4 gap-6">
              {['Commercial','Residential','Events','Healthcare'].map((ind,i) => (<div key={i} className="bg-slate-900 rounded-2xl p-6 text-center hover:ring-2 hover:ring-red-500 transition-all"><h3 className="text-lg font-bold text-white">{ind}</h3></div>))}
            </div>
          </div>
        </section>
        <section id="about" aria-labelledby="about-heading" className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-400 text-sm font-bold tracking-widest mb-4">ABOUT US</p>
              <h2 id="about-heading" className="text-4xl font-bold text-white mb-6">Trusted Protection Since 2009</h2>
              <p className="text-slate-400 leading-relaxed mb-8">Sentinel Security was founded by former law enforcement professionals with a mission to provide reliable, professional security services. All guards are background-checked, licensed, and undergo continuous training.</p>
              <div className="grid grid-cols-2 gap-4">
                {[{icon:'\u2705',label:'Licensed & Bonded'},{icon:'\uD83D\uDD12',label:'Background Checked'},{icon:'\uD83C\uDF96\uFE0F',label:'Continuously Trained'},{icon:'\uD83D\uDEA8',label:'Rapid Response'}].map((item,i) => (<div key={i} className="flex items-center gap-3 bg-slate-950 rounded-xl p-4 border border-slate-800"><span className="text-2xl" aria-hidden="true">{item.icon}</span><span className="text-slate-300 text-sm">{item.label}</span></div>))}
              </div>
            </div>
            <div><img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80" alt="Professional security guard monitoring surveillance screens" className="w-full rounded-2xl"/></div>
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div><p className="text-red-400 text-sm font-bold tracking-widest mb-4">GET PROTECTED</p><h2 id="contact-heading" className="text-4xl font-bold text-white mb-6">Request a Security Assessment</h2><p className="text-slate-400 mb-8">Our security consultants will assess your needs and design a custom protection plan.</p></div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <form noValidate className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label><input id="name" type="text" aria-required="true" placeholder="John Protected" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="type" className="block text-sm font-medium text-slate-300 mb-2">Security Type</label><select id="type" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-colors"><option value="">Select type</option><option value="armed">Armed Guards</option><option value="unarmed">Unarmed Security</option><option value="patrol">Mobile Patrol</option><option value="surveillance">Surveillance</option></select></div>
                <button type="submit" aria-label="Request your security assessment" className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2">Request Assessment</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer role="contentinfo" className="py-12 bg-slate-950 border-t border-slate-800"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white" aria-hidden="true">\uD83D\uDEE1\uFE0F</div><span className="text-white font-bold">Sentinel Security Services</span></div><p className="text-slate-500 text-sm">Protecting what matters since 2009</p></div></footer>
    </div>
  );
}
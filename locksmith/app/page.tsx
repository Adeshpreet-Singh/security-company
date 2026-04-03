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
    { title: 'Emergency Lockout', desc: 'Home, car, and business lockouts - 15min response', icon: '\uD83D\uDD11', price: '24/7' },
    { title: 'Lock Installation', desc: 'High-security deadbolts and smart locks', icon: '\uD83D\uDD12', price: 'From $89' },
    { title: 'Key Duplication', desc: 'Standard, transponder, and high-security keys', icon: '\uD83D\uDD13', price: 'From $5' },
    { title: 'Safe Services', desc: 'Installation, combination changes, and opening', icon: '\uD83D\uDEE1\uFE0F', price: 'Free Quote' },
  ];

  return (
    <div className="bg-red-50 text-gray-900 min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-700 text-white px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-700 rounded-xl flex items-center justify-center text-white text-xl" aria-hidden="true">\uD83D\uDD11</div>
              <div><h1 className="text-lg font-bold text-red-900">KeyGuard</h1><p className="text-[9px] text-red-600 tracking-wider">24/7 LOCKSMITH</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Services','Why Us','Reviews','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase().replace(' ','-'))} aria-label={`Navigate to ${item} section`} className="text-sm text-gray-600 hover:text-red-700 transition-colors focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Call our 24/7 emergency line" className="bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-800 transition-colors focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2">Call Now</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-red-700 focus-visible:outline-2 focus-visible:outline-red-500 rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true"><div className="absolute top-20 left-20 w-96 h-96 bg-red-200/40 rounded-full blur-3xl"/></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-red-700 text-sm font-bold tracking-widest mb-4">15-MINUTE RESPONSE</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">Locked Out?<br/><span className="text-red-700">We&#39;re Coming.</span></h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">Licensed, bonded, and insured locksmiths available 24/7. No hidden fees, no damage guarantee. Fast response to your location.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button aria-label="Call for emergency lockout service" className="bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-800 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2">Emergency Lockout</button>
                <button aria-label="Get a free security quote" className="border-2 border-red-700 text-red-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-red-50 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2">Free Quote</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'15min',label:'Avg Response'},{num:'50K+',label:'Locks Opened'},{num:'4.9',label:'Google Rating'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-red-700">{s.num}</div><div className="text-sm text-gray-500">{s.label}</div></div>))}
              </div>
            </div>
            <div className="relative"><div className="bg-white rounded-3xl p-8 shadow-xl"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Professional locksmith working on a door lock" className="w-full rounded-2xl"/></div></div>
          </div>
        </section>
        <section id="services" aria-labelledby="services-heading" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-red-700 text-sm font-bold tracking-widest mb-4">WHAT WE DO</p><h2 id="services-heading" className="text-4xl font-bold text-gray-900 mb-4">Locksmith Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s,i) => (<article key={i} className="bg-red-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-105"><div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div><h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3><p className="text-gray-500 text-sm mb-3">{s.desc}</p><div className="text-red-700 font-bold text-sm">{s.price}</div></article>))}
            </div>
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div><p className="text-red-700 text-sm font-bold tracking-widest mb-4">NEED HELP NOW?</p><h2 id="contact-heading" className="text-4xl font-bold text-gray-900 mb-6">Call or Request Service</h2><p className="text-gray-600 mb-8">Our dispatch team will send the nearest available locksmith to your location.</p></div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form noValidate className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label><input id="name" type="text" aria-required="true" placeholder="Alex Keys" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label><select id="service-type" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none transition-colors"><option value="">Select service</option><option value="lockout">Emergency Lockout</option><option value="installation">Lock Installation</option><option value="key-copy">Key Duplication</option><option value="safe">Safe Services</option></select></div>
                <button type="submit" aria-label="Request locksmith service" className="w-full bg-red-700 text-white py-4 rounded-xl font-bold hover:bg-red-800 transition-all hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2">Request Service</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer role="contentinfo" className="py-12 bg-red-900"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center text-white" aria-hidden="true">\uD83D\uDD11</div><span className="text-white font-bold">KeyGuard Locksmith</span></div><p className="text-red-300 text-sm">Licensed & Bonded | 24/7 Emergency</p></div></footer>
    </div>
  );
}
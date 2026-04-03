'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); element.focus(); }
    setMenuOpen(false);
  };

  const benefits = [
    { title: 'Slash Energy Bills', desc: 'Save up to 90% on monthly electricity costs', icon: '\uD83D\uDCB0' },
    { title: 'Increase Home Value', desc: 'Homes with solar sell for 4.1% more on average', icon: '\uD83C\uDFE0' },
    { title: 'Tax Credits', desc: '30% federal tax credit available through 2032', icon: '\uD83D\uDCCB' },
    { title: 'Clean Energy', desc: 'Reduce your carbon footprint by 3-4 tons annually', icon: '\uD83C\uDF0D' },
  ];

  return (
    <div className="bg-yellow-50 text-gray-900 min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center text-gray-900 text-xl" aria-hidden="true">\u2600\uFE0F</div>
              <div><h1 className="text-lg font-bold text-gray-900">SunPower Pro</h1><p className="text-[9px] text-yellow-600 tracking-wider">SOLAR ENERGY SOLUTIONS</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Benefits','Process','About','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item} section`} className="text-sm text-gray-600 hover:text-yellow-600 transition-colors focus-visible:outline-2 focus-visible:outline-yellow-500 focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Get a free solar quote" className="bg-yellow-500 text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors focus-visible:outline-2 focus-visible:outline-yellow-500 focus-visible:outline-offset-2">Free Quote</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-yellow-600 focus-visible:outline-2 focus-visible:outline-yellow-500 rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true"><div className="absolute top-20 left-20 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl"/></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-600 text-sm font-bold tracking-widest mb-4">POWER YOUR HOME WITH THE SUN</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">Go Solar.<br/><span className="text-yellow-600">Save Big.</span></h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">Professional solar installation with 25-year warranty. Join 10,000+ homeowners who&#39;ve made the switch to clean energy.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button aria-label="Get your free solar estimate" className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-yellow-500 focus-visible:outline-offset-2">Free Estimate</button>
                <button aria-label="Calculate your potential savings" className="border-2 border-yellow-500 text-yellow-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-50 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-yellow-500 focus-visible:outline-offset-2">Calculate Savings</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'10K+',label:'Installations'},{num:'$2.4M',label:'Avg Savings/Year'},{num:'25yr',label:'Warranty'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-yellow-600">{s.num}</div><div className="text-sm text-gray-500">{s.label}</div></div>))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl"><img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" alt="Modern home with solar panels on the roof under blue sky" className="w-full rounded-2xl"/></div>
            </div>
          </div>
        </section>
        <section id="benefits" aria-labelledby="benefits-heading" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-yellow-600 text-sm font-bold tracking-widest mb-4">WHY GO SOLAR</p><h2 id="benefits-heading" className="text-4xl font-bold text-gray-900 mb-4">Benefits That Add Up</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b,i) => (<article key={i} className="bg-yellow-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-105"><div className="text-4xl mb-4" aria-hidden="true">{b.icon}</div><h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3><p className="text-gray-500 text-sm">{b.desc}</p></article>))}
            </div>
          </div>
        </section>
        <section id="process" aria-labelledby="process-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-yellow-600 text-sm font-bold tracking-widest mb-4">HOW IT WORKS</p><h2 id="process-heading" className="text-4xl font-bold text-gray-900 mb-4">Simple 4-Step Process</h2></div>
            <div className="grid md:grid-cols-4 gap-8">
              {[{step:'1',title:'Free Consultation',desc:'We assess your roof and energy needs'},{step:'2',title:'Custom Design',desc:'Engineered system optimized for your home'},{step:'3',title:'Professional Install',desc:'Certified installers, typically 1-2 days'},{step:'4',title:'Start Saving',desc:'Monitor production via our app'}].map((s,i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl mx-auto mb-4" aria-hidden="true">{s.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-heading" className="py-24 bg-yellow-500">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="contact-heading" className="text-4xl font-bold text-gray-900 mb-6">Ready to Go Solar?</h2>
              <p className="text-gray-800 mb-8">Get a free, no-obligation quote today. Our solar advisors will design a system tailored to your home and energy usage.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form noValidate className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label><input id="name" type="text" aria-required="true" placeholder="Jamie Solar" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Home Address</label><input id="address" type="text" aria-required="true" placeholder="123 Sunshine Ave" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="bill" className="block text-sm font-medium text-gray-700 mb-2">Monthly Electric Bill</label><select id="bill" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 focus:outline-none transition-colors"><option value="">Select range</option><option value="under-100">Under $100</option><option value="100-200">$100-$200</option><option value="200-300">$200-$300</option><option value="over-300">Over $300</option></select></div>
                <button type="submit" aria-label="Get your free solar quote" className="w-full bg-yellow-500 text-gray-900 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-yellow-500 focus-visible:outline-offset-2">Get Free Quote</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer role="contentinfo" className="py-12 bg-gray-900"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-gray-900" aria-hidden="true">\u2600\uFE0F</div><span className="text-white font-bold">SunPower Pro Solar</span></div><p className="text-gray-400 text-sm">Clean energy for a brighter future</p></div></footer>
    </div>
  );
}
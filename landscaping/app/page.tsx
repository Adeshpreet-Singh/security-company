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
    { title: 'Lawn Care', desc: 'Mowing, edging, fertilizing, aeration', icon: '\uD83C\uDF3F', price: 'From $45/visit' },
    { title: 'Landscape Design', desc: 'Custom plans, plant selection, hardscaping', icon: '\uD83C\uDFE0', price: 'Free Consult' },
    { title: 'Tree Service', desc: 'Trimming, removal, stump grinding', icon: '\uD83C\uDF33', price: 'From $150' },
    { title: 'Hardscaping', desc: 'Patios, walkways, retaining walls', icon: '\uD83E\uDDF1', price: 'Custom Quote' },
  ];

  return (
    <div className="bg-green-50 text-gray-900 min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-700 text-white px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center text-white text-xl" aria-hidden="true">\uD83C\uDF3F</div>
              <div><h1 className="text-lg font-bold text-green-900">EverGreen</h1><p className="text-[9px] text-green-600 tracking-wider">LANDSCAPING</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Services','Portfolio','About','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item} section`} className="text-sm text-gray-600 hover:text-green-700 transition-colors focus-visible:outline-2 focus-visible:outline-green-500 focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Get a free landscaping estimate" className="bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-800 transition-colors focus-visible:outline-2 focus-visible:outline-green-500 focus-visible:outline-offset-2">Free Estimate</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-green-700 focus-visible:outline-2 focus-visible:outline-green-500 rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true"><div className="absolute top-20 left-20 w-96 h-96 bg-green-200/40 rounded-full blur-3xl"/></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-700 text-sm font-bold tracking-widest mb-4">TRANSFORM YOUR OUTDOORS</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-green-900">Beautiful<br/><span className="text-green-600">Landscapes</span></h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">From weekly maintenance to complete backyard transformations. Licensed, insured, and passionate about creating outdoor living spaces.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button aria-label="Get your free landscaping estimate" className="bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-800 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-green-500 focus-visible:outline-offset-2">Free Estimate</button>
                <button aria-label="View our landscape portfolio" className="border-2 border-green-700 text-green-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-green-500 focus-visible:outline-offset-2">View Portfolio</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'500+',label:'Yards Transformed'},{num:'15+',label:'Years Experience'},{num:'4.9',label:'Google Rating'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-green-700">{s.num}</div><div className="text-sm text-gray-500">{s.label}</div></div>))}
              </div>
            </div>
            <div className="relative"><div className="bg-white rounded-3xl p-8 shadow-xl"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Beautifully landscaped backyard with patio and garden" className="w-full rounded-2xl"/></div></div>
          </div>
        </section>
        <section id="services" aria-labelledby="services-heading" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-green-700 text-sm font-bold tracking-widest mb-4">WHAT WE DO</p><h2 id="services-heading" className="text-4xl font-bold text-green-900 mb-4">Landscaping Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s,i) => (<article key={i} className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-105"><div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div><h3 className="text-xl font-bold text-green-900 mb-2">{s.title}</h3><p className="text-gray-500 text-sm mb-3">{s.desc}</p><div className="text-green-600 font-bold text-sm">{s.price}</div></article>))}
            </div>
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div><p className="text-green-700 text-sm font-bold tracking-widest mb-4">START TODAY</p><h2 id="contact-heading" className="text-4xl font-bold text-green-900 mb-6">Get Your Free Estimate</h2><p className="text-gray-600 mb-8">Tell us about your project and we&#39;ll schedule a free on-site consultation.</p></div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form noValidate className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label><input id="name" type="text" aria-required="true" placeholder="Alex Garden" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label><select id="service-type" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none transition-colors"><option value="">Select service</option><option value="lawn">Lawn Care</option><option value="design">Landscape Design</option><option value="tree">Tree Service</option><option value="hardscape">Hardscaping</option></select></div>
                <button type="submit" aria-label="Request your free estimate" className="w-full bg-green-700 text-white py-4 rounded-xl font-bold hover:bg-green-800 transition-all hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-green-500 focus-visible:outline-offset-2">Request Estimate</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer role="contentinfo" className="py-12 bg-green-900"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center text-white" aria-hidden="true">\uD83C\uDF3F</div><span className="text-white font-bold">EverGreen Landscaping</span></div><p className="text-green-300 text-sm">Licensed & Insured | Since 2008</p></div></footer>
    </div>
  );
}
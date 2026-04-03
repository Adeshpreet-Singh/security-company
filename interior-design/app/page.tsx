'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); element.focus(); }
    setMenuOpen(false);
  };

  const portfolio = [
    { name: 'Modern Loft', style: 'Contemporary', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80', alt: 'Modern loft with exposed brick and minimalist furniture' },
    { name: 'Coastal Retreat', style: 'Mediterranean', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80', alt: 'Bright coastal living room with ocean views' },
    { name: 'Urban Oasis', style: 'Scandinavian', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80', alt: 'Minimalist Scandinavian bedroom with natural light' },
    { name: 'Luxe Penthouse', style: 'Art Deco', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80', alt: 'Elegant art deco penthouse with gold accents' },
  ];

  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-stone-800 text-white px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-stone-800 rounded-xl flex items-center justify-center text-white font-bold text-lg" aria-hidden="true">A</div>
              <div><h1 className="text-lg font-bold text-stone-900">Atelier</h1><p className="text-[9px] text-stone-600 tracking-wider">INTERIOR DESIGN</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Portfolio','Services','About','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item} section`} className="text-sm text-gray-600 hover:text-stone-800 transition-colors focus-visible:outline-2 focus-visible:outline-stone-500 focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Schedule a design consultation" className="bg-stone-800 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-stone-900 transition-colors focus-visible:outline-2 focus-visible:outline-stone-500 focus-visible:outline-offset-2">Book Consult</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-stone-800 focus-visible:outline-2 focus-visible:outline-stone-500 rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true"><div className="absolute top-20 right-20 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl"/></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-stone-600 text-sm font-medium mb-4">AWARD-WINNING DESIGN STUDIO</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-stone-900">Spaces That<br/><span className="text-stone-600">Inspire</span></h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">We transform houses into homes and offices into inspiring workspaces. Full-service interior design from concept to completion.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button aria-label="Schedule your free design consultation" className="bg-stone-800 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-900 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-stone-500 focus-visible:outline-offset-2">Free Consultation</button>
                <button aria-label="View our design portfolio" className="border-2 border-stone-800 text-stone-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-50 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-stone-500 focus-visible:outline-offset-2">View Portfolio</button>
              </div>
            </div>
            <div className="relative"><div className="bg-white rounded-3xl p-8 shadow-xl"><img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" alt="Beautifully designed modern living room with custom furniture" className="w-full rounded-2xl"/></div></div>
          </div>
        </section>
        <section id="portfolio" aria-labelledby="portfolio-heading" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-stone-600 text-sm font-medium mb-4">OUR WORK</p><h2 id="portfolio-heading" className="text-4xl font-bold text-stone-900 mb-4">Featured Projects</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolio.map((item,i) => (<article key={i} className="group relative overflow-hidden rounded-2xl aspect-[3/4]"><img src={item.img} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"><div><p className="text-stone-300 text-xs mb-1">{item.style}</p><h3 className="text-white font-bold">{item.name}</h3></div></div></article>))}
            </div>
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div><p className="text-stone-600 text-sm font-medium mb-4">START YOUR PROJECT</p><h2 id="contact-heading" className="text-4xl font-bold text-stone-900 mb-6">Let&#39;s Create Together</h2><p className="text-gray-600 mb-8">Every great space starts with a conversation. Tell us about your vision.</p></div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form noValidate className="space-y-6">
                <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label><input id="name" type="text" aria-required="true" placeholder="Jordan Design" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-2">Project Type</label><select id="project-type" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-stone-500 focus:ring-2 focus:ring-stone-200 focus:outline-none transition-colors"><option value="">Select project</option><option value="residential">Residential</option><option value="commercial">Commercial</option><option value="renovation">Renovation</option></select></div>
                <button type="submit" aria-label="Submit your design inquiry" className="w-full bg-stone-800 text-white py-4 rounded-xl font-medium hover:bg-stone-900 transition-all hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-stone-500 focus-visible:outline-offset-2">Send Inquiry</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer role="contentinfo" className="py-12 bg-stone-900"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-stone-700 rounded-lg flex items-center justify-center text-white font-bold" aria-hidden="true">A</div><span className="text-white font-bold">Atelier Interior Design</span></div><p className="text-stone-400 text-sm">Creating beautiful spaces since 2010</p></div></footer>
    </div>
  );
}
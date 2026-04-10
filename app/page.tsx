'use client';
import { useState } from 'react';
export default function Home() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen" style={{background:'#09090b',color:'#fafafa'}}>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center" style={{background:'#09090bee'}}>
        <div><h1 className="text-xl font-bold" style={{color:'#ef4444'}}>Sentinel Security</h1><p className="text-xs opacity-50">Est. 2008</p></div>
        <button onClick={() => scrollTo('contact')} className="px-5 py-2 text-sm rounded-full text-white" style={{background:'#ef4444'}}>Get Assessment</button>
      </nav>
      <main className="pt-24">
        <section className="py-24 text-center max-w-4xl mx-auto px-6">
          <p className="text-sm tracking-widest uppercase mb-4" style={{color:'#ef4444'}}>Est. 2008</p>
          <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-6 whitespace-pre-line">{`Protection
you can
count on.`}</h2>
          <p className="text-xl opacity-70 max-w-xl mx-auto mb-10">{`Comprehensive security solutions for commercial properties, events, and executive protection.`}</p>
          <button onClick={() => scrollTo('contact')} className="px-8 py-4 text-lg rounded-full text-white font-bold" style={{background:'#ef4444'}}>Get Assessment</button>
        </section>
        <section id="contact" className="reveal py-24 text-center" style={{background:'#ef444422'}}>
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="opacity-70 mb-8">Get in touch today.</p>
          <a href="tel:(555) 000-0000" className="text-2xl font-bold" style={{color:'#ef4444'}}>(555) 000-0000</a>
        </section>
      </main>
      <footer className="py-8 text-center text-sm opacity-50">&copy; 2026 Sentinel Security</footer>
    </div>
  );
}

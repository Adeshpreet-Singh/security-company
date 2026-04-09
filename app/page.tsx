'use client';
import { useState } from 'react';
export default function Home() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-500 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      {/* EMERGENCY BANNER */}
      <div className="bg-red-500 text-white py-2 text-center text-sm font-bold uppercase tracking-wider">24/7 Emergency Service Available — Call Now</div>
      <nav className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-current/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-2xl font-black uppercase">Sentinel Security</h1><p className="text-xs text-gray-400 uppercase tracking-wider">Est. 2008</p></div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollTo('services')} className="text-sm font-bold text-gray-400 hover:text-red-500 uppercase">Services</button>
            <button onClick={() => scrollTo('book')} className="bg-red-500 text-white px-6 py-2 font-bold uppercase">Get Assessment</button>
          </div>
        </div>
      </nav>
      <main id="main" role="main">
        {/* HERO with inline booking form */}
        <section className="pt-4">
          <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-6 whitespace-pre-line">Protection
you can count on.</h2>
              <p className="text-xl text-gray-400 mb-8">Comprehensive security solutions for commercial properties, events, and executive protection.</p>
              <div className="grid grid-cols-3 gap-4 text-center">
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-red-500">24/7</div><div className="text-sm text-gray-400 mt-1">Monitoring</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-red-500">Licensed</div><div className="text-sm text-gray-400 mt-1">In 50 states</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-red-500">15+</div><div className="text-sm text-gray-400 mt-1">Years</div></div>
              </div>
            </div>
            <div>
              <form id="book" className="bg-gray-900 rounded-xl p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-2xl font-bold mb-4">Get Assessment</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-bold mb-1">Name</label><input type="text" placeholder="Your name" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent" /></div>
                  <div><label className="block text-sm font-bold mb-1">Phone</label><input type="tel" placeholder="(555) 000-0000" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent" /></div>
                </div>
                <div><label className="block text-sm font-bold mb-1">Service</label>
                  <select className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent">
                    <option>Select service</option>                    <option>Guard Services</option>
                    <option>Access Control</option>
                    <option>Video Surveillance</option>
                    <option>Executive Protection</option>
                    <option>Event Security</option>
                    <option>Consulting</option>
                  </select>
                </div>
                <div><label className="block text-sm font-bold mb-1">Describe the issue</label><textarea rows={3} placeholder="What's going on?" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent resize-none" /></div>
                <button type="submit" className="w-full bg-red-500 text-white py-4 rounded-lg font-black uppercase text-lg">Get Assessment</button>
              </form>
            </div>
          </div>
        </section>
        {/* SERVICES with pricing */}
        <section id="services" className="py-24 bg-gray-900" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="services-heading" className="text-4xl font-black uppercase">Services & Pricing</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🛡️</div>
              <div><h3 className="font-bold text-lg">Guard Services</h3><p className="text-sm text-gray-400">Armed and unarmed officers.</p></div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🔐</div>
              <div><h3 className="font-bold text-lg">Access Control</h3><p className="text-sm text-gray-400">Card readers, biometrics, gates.</p></div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">📹</div>
              <div><h3 className="font-bold text-lg">Video Surveillance</h3><p className="text-sm text-gray-400">CCTV and remote monitoring.</p></div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">👤</div>
              <div><h3 className="font-bold text-lg">Executive Protection</h3><p className="text-sm text-gray-400">Personal security details.</p></div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🎪</div>
              <div><h3 className="font-bold text-lg">Event Security</h3><p className="text-sm text-gray-400">Concerts, galas, conferences.</p></div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">📋</div>
              <div><h3 className="font-bold text-lg">Consulting</h3><p className="text-sm text-gray-400">Security assessments and planning.</p></div>
            </div>
            </div>
          </div>
        </section>
        {/* TEAM */}
        <section className="py-24" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="team-heading" className="text-4xl font-black uppercase">Our Crew</h2></div>
            <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center text-2xl font-bold text-red-500">MT</div>
              <h3 className="font-bold">Michael Torres</h3><p className="text-sm text-red-500">CEO</p><p className="text-sm text-gray-400 mt-1">Former Secret Service</p></div>
            <div className="bg-gray-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center text-2xl font-bold text-red-500">SC</div>
              <h3 className="font-bold">Sarah Chen</h3><p className="text-sm text-red-500">Operations Director</p><p className="text-sm text-gray-400 mt-1">Military veteran</p></div>
            <div className="bg-gray-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center text-2xl font-bold text-red-500">DK</div>
              <h3 className="font-bold">David Kim</h3><p className="text-sm text-red-500">Tech Director</p><p className="text-sm text-gray-400 mt-1">Cybersecurity expert</p></div>
            <div className="bg-gray-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center text-2xl font-bold text-red-500">MG</div>
              <h3 className="font-bold">Maria Garcia</h3><p className="text-sm text-red-500">Client Relations</p><p className="text-sm text-gray-400 mt-1">Security consultant</p></div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="py-24 bg-gray-900" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12"><h2 id="faq-heading" className="text-4xl font-black uppercase">FAQ</h2></div>
            <div className="space-y-4">            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Armed guards?<span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">Yes, all armed guards are licensed and background-checked.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Monitoring?<span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">24/7 UL-listed monitoring center.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Contracts?<span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">Month-to-month available, no long-term required.</p></details></div>
          </div>
        </section>
        {/* CONTACT INFO */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">📞</div><div className="font-bold text-lg mb-1">Call Us</div><a href="tel:(555) 012-3459" className="text-red-500">(555) 012-3459</a></div>
            <div className="bg-gray-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">📍</div><div className="font-bold text-lg mb-1">Visit Us</div><p className="text-gray-400">500 Security Blvd, Dallas, TX</p></div>
            <div className="bg-gray-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">⏰</div><div className="font-bold text-lg mb-1">Hours</div><p className="text-gray-400">24/7 Operations Center</p></div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-8 text-center text-sm text-gray-400">&copy; 2026 Sentinel Security</footer>
    </div>
  );
}

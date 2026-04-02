'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const services = [
    { title: 'Emergency Lockout', desc: '24/7 rapid response for home & car lockouts', icon: '\uD83D\uDD13', price: 'From $65' },
    { title: 'Lock Installation', desc: 'High-security locks and deadbolts', icon: '\uD83D\uDD12', price: 'From $89' },
    { title: 'Key Duplication', desc: 'Precision cutting for all key types', icon: '\uD83D\uDD11', price: 'From $5' },
    { title: 'Safe Services', desc: 'Installation, repair, and combination changes', icon: '\uD83D\uDEE1\uFE0F', price: 'From $120' },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white font-bold">
              SK
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">SecureKey</h1>
              <p className="text-[9px] text-blue-400 tracking-wider">LOCKSMITH SERVICES</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <a href="tel:5551234567" className="bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
              Call Now
            </a>
          </div>
          <button className="md:hidden text-blue-400" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-slate-800/95 p-6">
            {['Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-slate-300 hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <a href="tel:5551234567" className="w-full mt-4 bg-blue-500 text-white py-3 rounded-full font-medium text-center block">
              Call Now
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-24 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-400 text-sm">24/7 Emergency Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Locked Out?
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                We're On Our Way
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg">
              Fast, reliable locksmith services when you need them most. 
              Licensed, insured, and available 24/7 for all your security needs.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="tel:5551234567" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (555) 123-4567
              </a>
              <button className="border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-full text-lg font-medium hover:border-blue-500 hover:text-blue-400 transition-colors">
                View Services
              </button>
            </div>
            <div className="flex items-center gap-8">
              {[
                { num: '15min', label: 'Avg Response' },
                { num: '24/7', label: 'Available' },
                { num: '5K+', label: 'Jobs Done' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-white">{stat.num}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-medium mb-4">OUR SERVICES</p>
            <h2 className="text-4xl font-bold text-white mb-4">Professional Locksmith Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
                <div className="text-blue-400 font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-400 text-sm font-medium mb-4">WHY CHOOSE US</p>
              <h2 className="text-4xl font-bold text-white mb-6">Trusted & Licensed Professionals</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                With over 15 years of experience, SecureKey Locksmith has been the trusted choice 
                for residential, commercial, and automotive locksmith services. Our certified 
                technicians use the latest tools and techniques.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '\u2705', label: 'Licensed & Insured' },
                  { icon: '\uD83D\uDEE1\uFE0F', label: 'Background Checked' },
                  { icon: '\uD83D\uDD12', label: 'All Lock Brands' },
                  { icon: '\u26A1', label: 'Fast Response' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-slate-300 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                alt="Locksmith at Work"
                className="w-full rounded-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-sm">Average Response</div>
                <div className="text-2xl font-bold">15 Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Need a Locksmith Now?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Don't wait! Call us immediately for fast, professional service.
          </p>
          <a href="tel:5551234567" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-bold hover:shadow-xl transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (555) 123-4567
          </a>
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: '\uD83D\uDCCD', label: 'Service Area', value: 'Entire Metro Area' },
              { icon: '\u23F0', label: 'Hours', value: '24/7 Available' },
              { icon: '\uD83D\uDCB0', label: 'Pricing', value: 'Upfront & Honest' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-blue-100 text-sm">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                SK
              </div>
              <span className="text-slate-400">SecureKey Locksmith</span>
            </div>
            <div className="flex gap-6 text-slate-500 text-sm">
              <span>Licensed & Insured</span>
              <span>\u00B7</span>
              <span>24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
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
    { title: 'Emergency Repairs', desc: '24/7 rapid response for leaks and bursts', icon: '\uD83D\uDEA8', price: 'From $89' },
    { title: 'Drain Cleaning', desc: 'Professional unclogging and cleaning', icon: '\uD83D\uDD04', price: 'From $99' },
    { title: 'Water Heater', desc: 'Installation and repair services', icon: '\u2668\uFE0F', price: 'From $199' },
    { title: 'Pipe Installation', desc: 'New pipes and repiping services', icon: '\uD83D\uDD27', price: 'Free Estimate' },
  ];

  return (
    <div className="bg-sky-50 text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              F
            </div>
            <div>
              <h1 className="text-lg font-bold text-sky-800">FlowPro</h1>
              <p className="text-[9px] text-sky-600 tracking-wider">PLUMBING SERVICES</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-gray-600 hover:text-sky-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="bg-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-sky-700 transition-colors">
              Get Quote
            </button>
          </div>
          <button className="md:hidden text-sky-600" onClick={() => setMenuOpen(!menuOpen)}>
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
          <div className="md:hidden bg-white border-t p-6">
            {['Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-gray-600 hover:text-sky-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="w-full mt-4 bg-sky-600 text-white py-3 rounded-full font-medium">
              Get Quote
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sky-700 text-sm">24/7 Emergency Service</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-sky-900">
                Your Trusted
                <br />
                <span className="text-sky-600">Plumbing Experts</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Fast, reliable plumbing services when you need them most. 
                Licensed, insured, and committed to quality workmanship.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button className="bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-sky-700 transition-colors">
                  Call Now
                </button>
                <button className="border-2 border-sky-600 text-sky-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-sky-50 transition-colors">
                  Free Estimate
                </button>
              </div>
              <div className="flex items-center gap-8">
                {[
                  { num: '15min', label: 'Avg Response' },
                  { num: '24/7', label: 'Available' },
                  { num: '5K+', label: 'Jobs Done' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-sky-700">{stat.num}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80"
                  alt="Plumber at Work"
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-sky-600 text-white rounded-2xl px-6 py-4 shadow-lg">
                <div className="text-sm">Licensed &</div>
                <div className="text-lg font-bold">Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sky-600 text-sm font-medium mb-4">OUR SERVICES</p>
            <h2 className="text-4xl font-bold text-sky-900 mb-4">Professional Plumbing Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-sky-900 mb-2 group-hover:text-sky-600 transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{service.desc}</p>
                <div className="text-sky-600 font-bold">{service.price}</div>
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
              <img
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80"
                alt="Plumbing Team"
                className="w-full rounded-2xl"
              />
            </div>
            <div>
              <p className="text-sky-600 text-sm font-medium mb-4">WHY CHOOSE US</p>
              <h2 className="text-4xl font-bold text-sky-900 mb-6">Trusted Since 1995</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                With over 25 years of experience, FlowPro has been the trusted choice 
                for residential and commercial plumbing. Our licensed plumbers deliver 
                quality work with upfront pricing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '\u2705', label: 'Licensed & Insured' },
                  { icon: '\uD83D\uDCB0', label: 'Upfront Pricing' },
                  { icon: '\uD83D\uDD12', label: 'Guaranteed Work' },
                  { icon: '\u26A1', label: 'Fast Response' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-sky-50 rounded-xl p-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-sky-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Need a Plumber Now?</h2>
          <p className="text-sky-100 mb-8 max-w-xl mx-auto">
            Don't wait for small problems to become big ones. Call us for fast, professional service.
          </p>
          <a href="tel:5551234567" className="inline-flex items-center gap-3 bg-white text-sky-600 px-8 py-4 rounded-full text-xl font-bold hover:shadow-xl transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (555) 123-FLOW
          </a>
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: '\uD83D\uDCCD', label: 'Service Area', value: 'Entire Metro Area' },
              { icon: '\u23F0', label: 'Hours', value: '24/7 Available' },
              { icon: '\uD83D\uDCB0', label: 'Pricing', value: 'Free Estimates' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-sky-100 text-sm">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-sky-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                F
              </div>
              <span className="text-white">FlowPro Plumbing</span>
            </div>
            <div className="flex gap-6 text-sky-300 text-sm">
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
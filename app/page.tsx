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
    { title: 'Security Guards', desc: 'Professional on-site security personnel', icon: '\uD83D\uDC6E', price: 'From $25/hr' },
    { title: 'Mobile Patrol', desc: 'Regular patrol of your property', icon: '\uD83D\uDE93', price: 'From $500/mo' },
    { title: 'Alarm Systems', desc: 'Installation and monitoring', icon: '\uD83D\uDD14', price: 'From $99' },
    { title: 'Access Control', desc: 'Entry management systems', icon: '\uD83D\uDD11', price: 'Free Quote' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              SS
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">SecureShield</h1>
              <p className="text-[9px] text-blue-400 tracking-wider">SECURITY SERVICES</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              Get Quote
            </button>
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
          <div className="md:hidden bg-gray-800/95 p-6">
            {['Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-gray-400 hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="w-full mt-4 bg-blue-600 text-white py-3 font-medium">
              Get Quote
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1400&q=80"
            alt="Security"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-6">Professional Security Solutions</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Protecting What
              <br />
              <span className="text-blue-400">Matters Most</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg">
              24/7 security services for businesses and residential properties. 
              Licensed, trained, and ready to protect your assets.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 text-sm tracking-wider font-medium hover:bg-blue-700 transition-colors">
                REQUEST QUOTE
              </button>
              <button className="border border-gray-600 text-gray-300 px-8 py-4 text-sm tracking-wider hover:border-blue-500 hover:text-blue-400 transition-colors">
                CALL NOW
              </button>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {[
                { num: '20+', label: 'Years' },
                { num: '500+', label: 'Clients' },
                { num: '24/7', label: 'Monitoring' },
                { num: '100%', label: 'Licensed' },
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-blue-500 pl-4">
                  <div className="text-2xl font-bold text-white">{stat.num}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-medium mb-4">WHAT WE OFFER</p>
            <h2 className="text-4xl font-bold text-white">Security Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                <div className="text-blue-400 font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-400 text-sm font-medium mb-4">ABOUT US</p>
              <h2 className="text-4xl font-bold text-white mb-6">Your Trusted Security Partner</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                SecureShield has been providing professional security services for over 20 years. 
                Our team of trained professionals is dedicated to protecting your property and 
                ensuring your peace of mind.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Licensed & Insured' },
                  { label: 'Background Checked' },
                  { label: '24/7 Availability' },
                  { label: 'Rapid Response' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-300 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80"
                alt="Security Team"
                className="w-full rounded-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white rounded-xl px-6 py-4 shadow-xl">
                <div className="text-sm">Always</div>
                <div className="text-3xl font-bold">24/7</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get Protected Today</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Don't wait until it's too late. Contact us for a free security assessment.
          </p>
          <a href="tel:5551234567" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded text-xl font-bold hover:shadow-xl transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (555) 123-SAFE
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                SS
              </div>
              <span className="text-gray-400">SecureShield Security</span>
            </div>
            <div className="flex gap-6 text-gray-500 text-sm">
              <span>Licensed & Insured</span>
              <span>\u00B7</span>
              <span>24/7 Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
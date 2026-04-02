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
    { title: 'Roof Replacement', desc: 'Complete tear-off and new installation', icon: '\uD83C\uDFE0', price: 'Free Estimate' },
    { title: 'Roof Repair', desc: 'Leak repair and storm damage', icon: '\uD83D\uDD27', price: 'From $199' },
    { title: 'Inspection', desc: 'Comprehensive roof assessment', icon: '\uD83D\uDD0D', price: 'From $99' },
    { title: 'Gutter Services', desc: 'Installation and cleaning', icon: '\uD83D\uDCA7', price: 'From $149' },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              TR
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">TopRoof</h1>
              <p className="text-[9px] text-red-600 tracking-wider">ROOFING CONTRACTORS</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-gray-600 hover:text-red-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="bg-red-600 text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-red-700 transition-colors">
              Free Estimate
            </button>
          </div>
          <button className="md:hidden text-red-600" onClick={() => setMenuOpen(!menuOpen)}>
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
                className="block w-full text-left py-3 text-gray-600 hover:text-red-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="w-full mt-4 bg-red-600 text-white py-3 font-medium">
              Free Estimate
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=1400&q=80"
            alt="Roofing"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-red-700 text-sm">Storm Damage? Call Now!</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Protect Your
                <br />
                <span className="text-red-600">Biggest Investment</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Professional roofing services with guaranteed quality. Licensed, 
                insured, and trusted by 10,000+ homeowners.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button className="bg-red-600 text-white px-8 py-4 rounded text-lg font-medium hover:bg-red-700 transition-colors">
                  Get Free Estimate
                </button>
                <button className="border-2 border-red-600 text-red-700 px-8 py-4 rounded text-lg font-medium hover:bg-red-50 transition-colors">
                  Call (555) 123-ROOF
                </button>
              </div>
              <div className="flex items-center gap-8">
                {[
                  { num: '25+', label: 'Years Experience' },
                  { num: '10K+', label: 'Roofs Installed' },
                  { num: '50yr', label: 'Warranty' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-red-600">{stat.num}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&q=80"
                  alt="New Roof"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white rounded-xl px-6 py-4 shadow-lg">
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
            <p className="text-red-600 text-sm font-medium mb-4">OUR SERVICES</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Roofing Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{service.desc}</p>
                <div className="text-red-600 font-bold">{service.price}</div>
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
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                alt="Beautiful Home with New Roof"
                className="w-full rounded-2xl"
              />
            </div>
            <div>
              <p className="text-red-600 text-sm font-medium mb-4">WHY CHOOSE US</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted Since 1999</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                TopRoof has been protecting homes for over 25 years. Our certified 
                installers use only premium materials and back every job with our 
                industry-leading 50-year warranty.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '\u2705', label: 'Licensed & Insured' },
                  { icon: '\uD83C\uDFC6', label: 'Owens Corning Preferred' },
                  { icon: '\uD83D\uDD12', label: '50-Year Warranty' },
                  { icon: '\uD83D\uDCB0', label: 'Financing Available' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-100 rounded-lg p-4">
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
      <section id="contact" className="py-24 bg-red-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get Your Free Estimate Today</h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">
            Don't wait for leaks to cause damage. Schedule your free roof inspection now.
          </p>
          <a href="tel:5551237663" className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded text-xl font-bold hover:shadow-xl transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (555) 123-ROOF
          </a>
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: '\uD83D\uDCCD', label: 'Service Area', value: 'Entire Metro Area' },
              { icon: '\u23F0', label: 'Hours', value: 'Mon-Sat: 7AM - 7PM' },
              { icon: '\uD83D\uDCB0', label: 'Financing', value: '0% for 12 Months' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-red-100 text-sm">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                TR
              </div>
              <span className="text-white">TopRoof Contractors</span>
            </div>
            <div className="flex gap-6 text-gray-400 text-sm">
              <span>Licensed & Insured</span>
              <span>\u00B7</span>
              <span>BBB A+ Rated</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
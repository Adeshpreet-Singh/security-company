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

  const benefits = [
    { icon: '\uD83D\uDCB0', title: 'Save Money', desc: 'Reduce electricity bills by up to 90%' },
    { icon: '\uD83C\uDF0D', title: 'Go Green', desc: 'Reduce your carbon footprint' },
    { icon: '\uD83C\uDFE0', title: 'Increase Home Value', desc: 'Homes with solar sell for 4.1% more' },
    { icon: '\uD83D\uDD12', title: 'Energy Independence', desc: 'Protect against rising utility costs' },
  ];

  return (
    <div className="bg-yellow-50 text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <div>
              <h1 className="text-lg font-bold text-yellow-800">SunPower</h1>
              <p className="text-[9px] text-yellow-600 tracking-wider">SOLAR SOLUTIONS</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Benefits', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="bg-yellow-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-yellow-600 transition-colors">
              Get Free Quote
            </button>
          </div>
          <button className="md:hidden text-yellow-600" onClick={() => setMenuOpen(!menuOpen)}>
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
            {['Benefits', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-gray-600 hover:text-yellow-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="w-full mt-4 bg-yellow-500 text-white py-3 rounded-full font-medium">
              Get Free Quote
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-200/50 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-200 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-yellow-700 text-sm">30% Federal Tax Credit Available</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-yellow-900">
                Power Your Home
                <br />
                <span className="text-yellow-600">With Sunshine</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Go solar and save thousands on electricity. Clean, renewable energy 
                for your home with industry-leading warranty.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-yellow-600 transition-colors">
                  Get Free Estimate
                </button>
                <button className="border-2 border-yellow-500 text-yellow-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-yellow-50 transition-colors">
                  Calculate Savings
                </button>
              </div>
              <div className="flex items-center gap-8">
                {[
                  { num: '10K+', label: 'Installations' },
                  { num: '25yr', label: 'Warranty' },
                  { num: '$0', label: 'Down Payment' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-yellow-700">{stat.num}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80"
                  alt="Solar Panels"
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-white rounded-2xl px-6 py-4 shadow-lg">
                <div className="text-sm">Save Up To</div>
                <div className="text-2xl font-bold">$1,500/yr</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-600 text-sm font-medium mb-4">WHY GO SOLAR</p>
            <h2 className="text-4xl font-bold text-yellow-900 mb-4">Benefits of Solar Energy</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-yellow-900 mb-2 group-hover:text-yellow-600 transition-colors">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
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
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                alt="Solar Installation"
                className="w-full rounded-2xl"
              />
            </div>
            <div>
              <p className="text-yellow-600 text-sm font-medium mb-4">ABOUT US</p>
              <h2 className="text-4xl font-bold text-yellow-900 mb-6">Trusted Solar Experts</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                SunPower has been helping homeowners switch to clean energy for over 15 years. 
                Our certified installers use only premium equipment and back every installation 
                with our industry-leading 25-year warranty.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '\u2705', label: 'NABCEP Certified' },
                  { icon: '\uD83D\uDD12', label: '25-Year Warranty' },
                  { icon: '\uD83D\uDCB0', label: '$0 Down Options' },
                  { icon: '\u26A1', label: 'Premium Equipment' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-yellow-50 rounded-xl p-4">
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
      <section id="contact" className="py-24 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start Saving Today</h2>
          <p className="text-yellow-100 mb-8 max-w-xl mx-auto">
            Get a free, no-obligation quote and see how much you can save with solar.
          </p>
          <a href="tel:5551234567" className="inline-flex items-center gap-3 bg-white text-yellow-600 px-8 py-4 rounded-full text-xl font-bold hover:shadow-xl transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (555) 123-SUN
          </a>
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: '\uD83D\uDCB0', label: 'Financing', value: '$0 Down Available' },
              { icon: '\uD83D\uDCCB', label: 'Tax Credits', value: '30% Federal Credit' },
              { icon: '\uD83D\uDD12', label: 'Warranty', value: '25-Year Coverage' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-yellow-100 text-sm">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-yellow-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className="text-white">SunPower Solar</span>
            </div>
            <div className="flex gap-6 text-yellow-300 text-sm">
              <span>NABCEP Certified</span>
              <span>\u00B7</span>
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
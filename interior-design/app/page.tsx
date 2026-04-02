'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const projects = [
    { title: 'Modern Loft Apartment', type: 'residential', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80' },
    { title: 'Boutique Hotel Lobby', type: 'commercial', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80' },
    { title: 'Scandinavian Living Room', type: 'residential', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
    { title: 'Restaurant Interior', type: 'commercial', image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=80' },
    { title: 'Minimalist Bedroom', type: 'residential', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80' },
    { title: 'Office Space Design', type: 'commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  const services = [
    { title: 'Space Planning', desc: 'Optimizing layouts for functionality and flow', icon: '\uD83D\uDCC1' },
    { title: 'Color Consultation', desc: 'Creating harmonious color palettes', icon: '\uD83C\uDFA8' },
    { title: 'Custom Furniture', desc: 'Bespoke pieces tailored to your space', icon: '\uD83D\uDECB\uFE0F' },
    { title: 'Project Management', desc: 'End-to-end execution and coordination', icon: '\uD83D\uDD17' },
  ];

  return (
    <div className="bg-stone-50 text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-light tracking-[0.2em] text-stone-800">ATELIER</h1>
            <p className="text-[9px] tracking-[0.3em] text-stone-500 uppercase">Interior Design</p>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Projects', 'Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="bg-stone-800 text-white px-6 py-2.5 text-sm tracking-wider hover:bg-stone-700 transition-colors">
              Book Consultation
            </button>
          </div>
          <button className="md:hidden text-stone-800" onClick={() => setMenuOpen(!menuOpen)}>
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
            {['Projects', 'Services', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-stone-600 hover:text-stone-900 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="w-full mt-4 bg-stone-800 text-white py-3 tracking-wider">
              Book Consultation
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-24 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80"
            alt="Interior Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-50/90 via-stone-50/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-xl">
            <p className="text-stone-500 text-sm tracking-[0.3em] uppercase mb-6">Award-Winning Studio</p>
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight text-stone-800">
              Spaces That
              <br />
              <span className="font-medium">Inspire Living</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              We transform ordinary spaces into extraordinary experiences. 
              Thoughtful design that reflects your personality and enhances your lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-stone-800 text-white px-8 py-4 text-sm tracking-wider hover:bg-stone-700 transition-colors">
                VIEW PORTFOLIO
              </button>
              <button className="border-2 border-stone-800 text-stone-800 px-8 py-4 text-sm tracking-wider hover:bg-stone-800 hover:text-white transition-colors">
                OUR PROCESS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div>
              <p className="text-stone-500 text-sm font-medium mb-4">PORTFOLIO</p>
              <h2 className="text-4xl font-light text-stone-800">Featured Projects</h2>
            </div>
            <div className="flex gap-2">
              {['all', 'residential', 'commercial'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm capitalize transition-colors ${
                    activeFilter === filter
                      ? 'bg-stone-800 text-white'
                      : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-stone-800 px-4 py-2 text-sm tracking-wider">
                      VIEW PROJECT
                    </button>
                  </div>
                </div>
                <p className="text-stone-500 text-sm capitalize mb-1">{project.type}</p>
                <h3 className="text-lg text-stone-800">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-stone-500 text-sm font-medium mb-4">WHAT WE DO</p>
            <h2 className="text-4xl font-light text-stone-800">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-light text-stone-800 mb-2 group-hover:text-stone-600 transition-colors">{service.title}</h3>
                <p className="text-stone-500 text-sm">{service.desc}</p>
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
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                alt="Our Studio"
                className="w-full"
              />
            </div>
            <div>
              <p className="text-stone-500 text-sm font-medium mb-4">ABOUT US</p>
              <h2 className="text-4xl font-light text-stone-800 mb-6">Design Philosophy</h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                Founded in 2012, ATELIER has been creating timeless interiors that 
                balance aesthetics with functionality. We believe great design should 
                enhance everyday life while reflecting the unique character of each client.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: '150+', label: 'Projects' },
                  { num: '12', label: 'Years' },
                  { num: '8', label: 'Awards' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-medium text-stone-800">{stat.num}</div>
                    <div className="text-sm text-stone-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-stone-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <svg className="w-12 h-12 text-stone-500 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-light text-white italic leading-relaxed mb-8">
            &ldquo;They didn't just design our home, they understood how we live 
            and created a space that feels uniquely ours.&rdquo;
          </blockquote>
          <p className="text-stone-400 text-sm tracking-widest">&mdash; SARAH & MICHAEL, BROOKLYN</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-stone-500 text-sm font-medium mb-4">GET IN TOUCH</p>
              <h2 className="text-4xl font-light text-stone-800 mb-6">Start Your Project</h2>
              <p className="text-stone-600 mb-8">
                Ready to transform your space? Schedule a complimentary consultation 
                with our design team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-stone-800">Studio</div>
                    <div className="text-stone-500">456 Design District, Manhattan</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-stone-800">Email</div>
                    <div className="text-stone-500">hello@atelierdesign.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:border-stone-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:border-stone-400 focus:outline-none"
                />
                <select className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:border-stone-400 focus:outline-none">
                  <option value="">Project Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Consultation Only</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Tell us about your space and vision..."
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:border-stone-400 focus:outline-none resize-none"
                />
                <button className="w-full bg-stone-800 text-white py-4 rounded-xl tracking-wider hover:bg-stone-700 transition-colors">
                  REQUEST CONSULTATION
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-xl font-light tracking-[0.2em] text-white">ATELIER</h2>
            </div>
            <div className="flex gap-6 text-stone-400 text-sm">
              <span>Designing Spaces, Creating Stories</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
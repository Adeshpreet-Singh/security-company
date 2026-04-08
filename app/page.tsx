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
    { title: 'Security Guards', desc: 'Uniformed and plainclothes officers for events, properties, and executive protection.', price: 'From $25/hr', icon: '👮' },
    { title: 'Surveillance Systems', desc: 'HD camera installation, remote monitoring, and AI-powered threat detection.', price: 'From $599', icon: '📹' },
    { title: 'Alarm Systems', desc: 'Intrusion detection, fire alarms, and 24/7 monitoring with rapid dispatch.', price: 'From $299', icon: '🚨' },
    { title: 'Access Control', desc: 'Key card systems, biometric readers, and smart locks for secure entry management.', price: 'From $899', icon: '🔐' },
    { title: 'Cyber Security', desc: 'Network protection, penetration testing, and security awareness training.', price: 'Custom Quote', icon: '💻' },
    { title: 'Consulting', desc: 'Security assessments, risk analysis, and custom security plan development.', price: 'From $499', icon: '📋' },
  ];

  const testimonials = [
    { name: 'James Richardson', role: 'Property Manager', text: 'Sentinel transformed our building security. Their access control system and guard services have reduced incidents by 90%. Our tenants feel safer than ever.', rating: 5 },
    { name: 'Emily Chen', role: 'Event Coordinator', text: 'We use Sentinel for all our high-profile events. Their team is professional, discreet, and incredibly thorough. They handle everything from crowd control to VIP protection.', rating: 5 },
    { name: 'Marcus Williams', role: 'Retail Chain Owner', text: 'After a string of break-ins, Sentinel installed a comprehensive surveillance and alarm system. We haven&apos;t had a single incident since. Their monitoring center is top-notch.', rating: 5 },
  ];

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neon text-dark px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 glass">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neon/20 rounded-xl flex items-center justify-center text-neon text-xl neon-glow" aria-hidden="true">🛡️</div>
              <div><h1 className="text-lg font-bold text-white">Sentinel</h1><p className="text-[9px] text-neon tracking-widest">SECURITY</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Services','About','Reviews','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item} section`} className="text-sm text-slate-text hover:text-neon transition-colors focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Get a free security assessment" className="bg-neon text-dark px-6 py-2.5 rounded-full text-sm font-bold hover:bg-neon-dim transition-colors focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2">Free Assessment</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-neon focus-visible:outline-2 focus-visible:outline-neon rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden glass border-t border-dark-border px-6 py-4 space-y-4">
              {['Services','About','Reviews','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left text-slate-text hover:text-neon py-2">{item}</button>))}
              <button className="w-full bg-neon text-dark px-6 py-3 rounded-full font-bold">Free Assessment</button>
            </div>
          )}
        </nav>
      </header>

      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden grid-bg">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-20 right-20 w-96 h-96 bg-neon/10 rounded-full blur-[120px]"/>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon/5 rounded-full blur-[100px]"/>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-neon text-sm font-bold tracking-widest mb-4 animate-fade-in-up">24/7 PROTECTION SERVICES</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up stagger-1">Your Safety.<br/><span className="text-neon neon-text">Our Mission.</span></h2>
              <p className="text-xl text-slate-text mb-8 max-w-lg animate-fade-in-up stagger-2">Comprehensive security solutions for homes, businesses, and events. Licensed professionals, cutting-edge technology, unwavering commitment.</p>
              <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up stagger-3">
                <button aria-label="Get your free security assessment" className="bg-neon text-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-neon-dim transition-all hover:scale-105 neon-glow focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2">Free Assessment</button>
                <button aria-label="Call for immediate security response" className="border-2 border-neon/50 text-neon px-8 py-4 rounded-full text-lg font-bold hover:bg-neon/10 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2">24/7 Response</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'5K+',label:'Clients Protected'},{num:'99.9%',label:'Uptime Rate'},{num:'24/7',label:'Monitoring'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-neon">{s.num}</div><div className="text-sm text-slate-text">{s.label}</div></div>))}
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-3xl p-8 neon-glow">
                <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80" alt="Professional security monitoring center" className="w-full rounded-2xl opacity-90"/>
              </div>
            </div>
          </div>
        </section>

        <section id="services" aria-labelledby="services-heading" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-neon text-sm font-bold tracking-widest mb-4">WHAT WE OFFER</p>
              <h2 id="services-heading" className="text-4xl font-bold text-white mb-4">Security Services</h2>
              <p className="text-slate-text max-w-2xl mx-auto">Full-spectrum security solutions tailored to your unique needs. Physical, digital, and integrated protection.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s,i) => (
                <article key={i} className="glass rounded-2xl p-6 hover:border-neon/30 transition-all hover:scale-105 group">
                  <div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon transition-colors">{s.title}</h3>
                  <p className="text-slate-text text-sm mb-3">{s.desc}</p>
                  <div className="text-neon font-bold text-sm">{s.price}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="py-24 relative">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px]"/>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="glass rounded-3xl p-8">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Sentinel Security professional team" className="w-full rounded-2xl opacity-90"/>
            </div>
            <div>
              <p className="text-neon text-sm font-bold tracking-widest mb-4">WHY SENTINEL</p>
              <h2 id="about-heading" className="text-4xl font-bold text-white mb-6">5,000+ Clients Protected</h2>
              <p className="text-slate-text mb-8">Since 2006, Sentinel Security has been the trusted choice for comprehensive security solutions. Our team includes former law enforcement, military veterans, and certified security professionals.</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '✓', text: 'Licensed & Bonded' },
                  { icon: '✓', text: 'Background Checked' },
                  { icon: '✓', text: '24/7 Monitoring' },
                  { icon: '✓', text: 'Rapid Response' },
                  { icon: '✓', text: 'ASIS Certified' },
                  { icon: '✓', text: 'Custom Solutions' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-neon" aria-hidden="true">{item.icon}</span>
                    <span className="text-sm text-white-soft">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" aria-labelledby="reviews-heading" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-neon text-sm font-bold tracking-widest mb-4">TESTIMONIALS</p>
              <h2 id="reviews-heading" className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <article key={i} className="glass rounded-2xl p-6">
                  <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, j) => (
                      <span key={j} className="text-amber" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="text-white-soft mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-slate-text">{t.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-neon text-sm font-bold tracking-widest mb-4">GET PROTECTED</p>
              <h2 id="contact-heading" className="text-4xl font-bold text-white mb-6">Request Your Free Assessment</h2>
              <p className="text-slate-text mb-8">Our security experts will evaluate your property and provide a comprehensive protection plan tailored to your needs.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon" aria-hidden="true">📞</div>
                  <div><p className="text-sm text-slate-text">24/7 Command Center</p><p className="text-white font-bold">(555) 890-SAFE</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon" aria-hidden="true">📍</div>
                  <div><p className="text-sm text-slate-text">Headquarters</p><p className="text-white font-bold">500 Security Blvd</p></div>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-8">
              <form onSubmit={(e) => e.preventDefault()} noValidate className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white-soft mb-2">Your Name</label>
                  <input id="name" type="text" aria-required="true" placeholder="John Smith" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors"/>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white-soft mb-2">Phone</label>
                  <input id="phone" type="tel" aria-required="true" placeholder="(555) 000-0000" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors"/>
                </div>
                <div>
                  <label htmlFor="service-type" className="block text-sm font-medium text-white-soft mb-2">Service Needed</label>
                  <select id="service-type" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors">
                    <option value="">Select service</option>
                    <option value="guards">Security Guards</option>
                    <option value="surveillance">Surveillance Systems</option>
                    <option value="alarm">Alarm Systems</option>
                    <option value="access-control">Access Control</option>
                    <option value="consulting">Security Consulting</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-white-soft mb-2">Describe Your Security Needs</label>
                  <textarea id="details" rows={3} placeholder="Tell us about your security requirements..." className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors resize-none"/>
                </div>
                <button type="submit" aria-label="Request your free security assessment" className="w-full bg-neon text-dark py-4 rounded-xl font-bold hover:bg-neon-dim transition-all hover:scale-[1.02] neon-glow focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2">Get Free Assessment</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="py-12 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-neon/20 rounded-lg flex items-center justify-center text-neon" aria-hidden="true">🛡️</div>
              <span className="text-white font-bold">Sentinel Security</span>
            </div>
            <p className="text-slate-text text-sm">Licensed & Bonded | ASIS Member | UL Listed Monitoring</p>
          </div>
          <div className="mt-8 pt-8 border-t border-dark-border text-center">
            <p className="text-slate-text/60 text-xs">© 2024 Sentinel Security. All rights reserved. License #SC-2006-4456</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
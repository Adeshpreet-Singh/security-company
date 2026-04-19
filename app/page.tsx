'use client';

import { useState, FormEvent } from 'react';

export default function Home() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

 const scrollToSection = (id: string) => {
 const element = document.getElementById(id);
 if (element) {
 element.scrollIntoView({ behavior: 'smooth' });
 element.focus();
 }
 setMenuOpen(false);
 };

 const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setFormStatus('sending');
 const form = e.currentTarget;
 const formData = new FormData(form);

 try {
 const response = await fetch('https://api.web3forms.com/submit', {
 method: 'POST',
 body: formData,
 });
 const data = await response.json();
 if (data.success) {
 setFormStatus('success');
 form.reset();
 } else {
 setFormStatus('error');
 }
 } catch {
 setFormStatus('error');
 }

 setTimeout(() => setFormStatus('idle'), 5000);
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
 <div className="min-h-screen px-4 md:px-8">
 <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neon text-dark px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>

 {/* Emergency Banner */}
 <div className="emergency-banner" role="alert">
 <span className="emergency-icon" aria-hidden="true">🚨</span>
 <span className="emergency-text">24/7 Emergency Response — Call Now: </span>
 <a href="tel:+15558907233" className="text-white font-bold underline hover:no-underline">(555) 890-SAFE</a>
 </div>

 <header>
 <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 glass">
 <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 bg-neon/20 rounded-xl flex items-center justify-center text-neon text-xl neon-glow" aria-hidden="true">🛡️</div>
 <div>
 <span className="text-lg font-bold text-white">Sentinel</span>
 <span className="text-[9px] text-neon tracking-widest block">SECURITY</span>
 </div>
 </div>
        <div className="hidden md:flex items-center gap-6">
          {['Services', 'About', 'Reviews', 'Contact'].map(item => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item} section`} className="text-sm text-slate-text hover:text-neon transition-colors focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 rounded px-3 py-2 min-h-[44px] flex items-center">
              {item}
            </button>
          ))}
          <button onClick={() => scrollToSection('contact')} aria-label="Get a free security assessment" className="bg-neon text-dark px-6 py-3 rounded-full text-sm font-bold hover:bg-neon-dim transition-colors focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 min-h-[44px]">
            Free Assessment
          </button>
        </div>
        <button aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} className="md:hidden text-neon focus-visible:outline-2 focus-visible:outline-neon rounded p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setMenuOpen(!menuOpen)}>
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
 {menuOpen ? (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
 ) : (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
 )}
 </svg>
 </button>
 </div>
 {menuOpen && (
        <div className="md:hidden glass border-t border-dark-border px-6 py-4 space-y-2">
          {['Services', 'About', 'Reviews', 'Contact'].map(item => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="mobile-nav-item block w-full text-left text-slate-text hover:text-neon py-3 px-3 rounded-lg hover:bg-white/5 transition-colors text-base">
              {item}
            </button>
          ))}
          <button onClick={() => scrollToSection('contact')} className="w-full bg-neon text-dark px-6 py-4 rounded-full font-bold text-base min-h-[48px]">
            Free Assessment
          </button>
        </div>
 )}
 </nav>
 </header>

 <main id="main-content" role="main">
 {/* Hero Section */}
 <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden grid-bg">
 <div className="absolute inset-0" aria-hidden="true">
 <div className="absolute top-20 right-20 w-96 h-96 bg-neon/10 rounded-full blur-[120px]" />
 <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon/5 rounded-full blur-[100px]" />
 </div>
 <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
 <div>
 <p className="text-neon text-sm font-bold tracking-widest mb-4 animate-fade-in-up">24/7 PROTECTION SERVICES</p>
              <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up stagger-1">
 Your Safety.<br /><span className="text-neon neon-text">Our Mission.</span>
 </h1>
 <p className="text-xl text-slate-text mb-8 max-w-lg animate-fade-in-up stagger-2">
 Comprehensive security solutions for homes, businesses, and events. Licensed professionals, cutting-edge technology, unwavering commitment.
 </p>
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up stagger-3">
              <button onClick={() => scrollToSection('contact')} aria-label="Get your free security assessment" className="bg-neon text-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-neon-dim transition-all hover:scale-105 neon-glow focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 min-h-[48px]">
                Free Assessment
              </button>
              <a href="tel:+155****7233" aria-label="Call for immediate security response" className="border-2 border-neon/50 text-neon px-8 py-4 rounded-full text-lg font-bold hover:bg-neon/10 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 min-h-[48px] flex items-center">
                24/7 Response
              </a>
            </div>
            <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
              {[
                { num: '5K+', label: 'Clients Protected' },
                { num: '99.9%', label: 'Uptime Rate' },
                { num: '24/7', label: 'Monitoring' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-xl sm:text-2xl font-bold text-neon">{s.num}</div>
                  <div className="text-sm text-slate-text">{s.label}</div>
                </div>
              ))}
 </div>
 </div>
 <div className="relative">
 <div className="glass rounded-3xl p-8 neon-glow">
 <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80" alt="Professional security monitoring center" width={600} height={400} className="w-full rounded-2xl opacity-90" />
 </div>
 </div>
 </div>
 </section>

 {/* Services Section */}
 <section id="services" aria-labelledby="services-heading" className="py-24 relative">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-16">
 <p className="text-neon text-sm font-bold tracking-widest mb-4">WHAT WE OFFER</p>
 <h2 id="services-heading" className="text-4xl font-bold text-white mb-4">Security Services</h2>
 <p className="text-slate-text max-w-2xl mx-auto">Full-spectrum security solutions tailored to your unique needs. Physical, digital, and integrated protection.</p>
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {services.map((s, i) => (
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

 {/* About Section */}
 <section id="about" aria-labelledby="about-heading" className="py-24 relative">
 <div className="absolute inset-0" aria-hidden="true">
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px]" />
 </div>
 <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
 <div className="glass rounded-3xl p-8">
 <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Sentinel Security professional team" width={600} height={400} loading="lazy" className="w-full rounded-2xl opacity-90" />
 </div>
 <div>
 <p className="text-neon text-sm font-bold tracking-widest mb-4">WHY SENTINEL</p>
 <h2 id="about-heading" className="text-4xl font-bold text-white mb-6">5,000+ Clients Protected</h2>
 <p className="text-slate-text mb-8">
 Since 2006, Sentinel Security has been the trusted choice for comprehensive security solutions. Our team includes former law enforcement, military veterans, and certified security professionals.
 </p>
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

 {/* Certifications */}
 <div className="mt-8 pt-6 border-t border-dark-border">
 <p className="text-neon text-xs font-bold tracking-widest mb-3">CERTIFICATIONS</p>
 <div className="flex flex-wrap gap-3">
 {['ASIS International', 'UL Listed', 'NFPA Member', 'SIA Certified', 'State Licensed'].map((cert, i) => (
 <span key={i} className="badge">{cert}</span>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Testimonials Section */}
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

 {/* Contact Section */}
 <section id="contact" aria-labelledby="contact-heading" className="py-24 relative">
 <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
 <div>
 <p className="text-neon text-sm font-bold tracking-widest mb-4">GET PROTECTED</p>
 <h2 id="contact-heading" className="text-4xl font-bold text-white mb-6">Request Your Free Assessment</h2>
 <p className="text-slate-text mb-8">Our security experts will evaluate your property and provide a comprehensive protection plan tailored to your needs.</p>
 <div className="space-y-4">
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon" aria-hidden="true">📞</div>
 <div>
 <p className="text-sm text-slate-text">24/7 Command Center</p>
 <a href="tel:+15558907233" className="text-white font-bold hover:text-neon transition-colors">(555) 890-SAFE</a>
 </div>
 </div>
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon" aria-hidden="true">✉️</div>
 <div>
 <p className="text-sm text-slate-text">Email Us</p>
 <a href="mailto:info@sentinelsecurity.com" className="text-white font-bold hover:text-neon transition-colors">info@sentinelsecurity.com</a>
 </div>
 </div>
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon" aria-hidden="true">📍</div>
 <div>
 <p className="text-sm text-slate-text">Headquarters</p>
 <a href="https://maps.google.com/?q=500+Security+Blvd+Los+Angeles+CA+90001" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-neon transition-colors">
 500 Security Blvd, Los Angeles, CA 90001
 </a>
 </div>
 </div>
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon" aria-hidden="true">💬</div>
 <div>
 <p className="text-sm text-slate-text">WhatsApp</p>
 <a href="https://wa.me/15558907233" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-neon transition-colors">
 Chat with us on WhatsApp
 </a>
 </div>
 </div>
 </div>

 {/* Business Hours */}
 <div className="mt-8 p-6 glass rounded-2xl">
 <h3 className="text-neon text-sm font-bold tracking-widest mb-4">BUSINESS HOURS</h3>
 <div className="space-y-2 text-sm">
 <div className="flex justify-between">
 <span className="text-slate-text">Monday – Friday</span>
 <span className="text-white font-medium">8:00 AM – 6:00 PM</span>
 </div>
 <div className="flex justify-between">
 <span className="text-slate-text">Saturday</span>
 <span className="text-white font-medium">9:00 AM – 2:00 PM</span>
 </div>
 <div className="flex justify-between">
 <span className="text-slate-text">Sunday</span>
 <span className="text-white font-medium">Closed</span>
 </div>
 <div className="flex justify-between pt-2 border-t border-dark-border">
 <span className="text-neon font-bold">Emergency Line</span>
 <span className="text-neon font-bold">24/7 Available</span>
 </div>
 </div>
 </div>
 </div>

 <div className="glass rounded-2xl p-8">
 <form onSubmit={handleFormSubmit} noValidate className="space-y-6">
 <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
 <input type="hidden" name="subject" value="New Free Assessment Request - Sentinel Security" />
 <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

 <div>
 <label htmlFor="name" className="block text-sm font-medium text-white-soft mb-2">Your Name</label>
 <input id="name" name="name" type="text" required aria-required="true" placeholder="John Smith" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors" />
 </div>
 <div>
 <label htmlFor="email" className="block text-sm font-medium text-white-soft mb-2">Email</label>
 <input id="email" name="email" type="email" required aria-required="true" placeholder="john@example.com" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors" />
 </div>
 <div>
 <label htmlFor="phone" className="block text-sm font-medium text-white-soft mb-2">Phone</label>
 <input id="phone" name="phone" type="tel" aria-required="true" placeholder="(555) 000-0000" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors" />
 </div>
 <div>
 <label htmlFor="service-type" className="block text-sm font-medium text-white-soft mb-2">Service Needed</label>
 <select id="service-type" name="service" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors">
 <option value="">Select service</option>
 <option value="guards">Security Guards</option>
 <option value="surveillance">Surveillance Systems</option>
 <option value="alarm">Alarm Systems</option>
 <option value="access-control">Access Control</option>
 <option value="cyber">Cyber Security</option>
 <option value="consulting">Security Consulting</option>
 </select>
 </div>
 <div>
 <label htmlFor="details" className="block text-sm font-medium text-white-soft mb-2">Describe Your Security Needs</label>
 <textarea id="details" name="message" rows={3} placeholder="Tell us about your security requirements..." className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors resize-none" />
 </div>

 {formStatus === 'success' && (
 <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm" role="alert">
 ✅ Thank you! We&apos;ll contact you within 24 hours to schedule your free assessment.
 </div>
 )}
 {formStatus === 'error' && (
 <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm" role="alert">
 ❌ Something went wrong. Please call us at (555) 890-SAFE or try again.
 </div>
 )}

            <button type="submit" disabled={formStatus === 'sending'} aria-label="Request your free security assessment" className="w-full bg-neon text-dark py-4 rounded-xl font-bold hover:bg-neon-dim transition-all hover:scale-[1.02] neon-glow focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[52px] text-base">
              {formStatus === 'sending' ? 'Sending...' : 'Get Free Assessment'}
            </button>
 </form>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-20 bg-gradient-to-r from-neon/10 to-transparent" aria-labelledby="cta-heading">
 <div className="max-w-4xl mx-auto px-6 text-center">
 <h2 id="cta-heading" className="text-4xl font-bold text-white mb-4">Ready to Get Protected?</h2>
 <p className="text-slate-text text-lg mb-8">Don&apos;t wait for an incident to happen. Get your free security assessment today and sleep better tonight.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollToSection('contact')} className="bg-neon text-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-neon-dim transition-all hover:scale-105 neon-glow min-h-[48px]">
              Get Free Assessment
            </button>
            <a href="tel:+155****7233" className="border-2 border-neon/50 text-neon px-8 py-4 rounded-full text-lg font-bold hover:bg-neon/10 transition-all hover:scale-105 min-h-[48px] flex items-center">
              Call (555) 890-SAFE
            </a>
            <a href="https://wa.me/15558907233" target="_blank" rel="noopener noreferrer" className="border-2 border-green-500/50 text-green-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-green-500/10 transition-all hover:scale-105 min-h-[48px] flex items-center">
              WhatsApp Us
            </a>
          </div>
 </div>
 </section>

 {/* Google Maps Section */}
 <section className="py-16" aria-label="Our location on map">
 <div className="max-w-7xl mx-auto px-6">
 <div className="text-center mb-8">
 <p className="text-neon text-sm font-bold tracking-widest mb-2">FIND US</p>
 <h2 className="text-3xl font-bold text-white">Our Location</h2>
 </div>
 <div className="glass rounded-2xl overflow-hidden">
 <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
 width="100%"
 height="400"

 allowFullScreen
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 title="Sentinel Security headquarters location in Los Angeles, CA"
 className="w-full"
 />
 </div>
 </div>
 </section>
 </main>

 {/* Footer */}
 <footer role="contentinfo" className="py-12 border-t border-dark-border">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid md:grid-cols-4 gap-8 mb-8">
 <div>
 <div className="flex items-center gap-3 mb-4">
 <div className="w-8 h-8 bg-neon/20 rounded-lg flex items-center justify-center text-neon" aria-hidden="true">🛡️</div>
 <span className="text-white font-bold">Sentinel Security</span>
 </div>
 <p className="text-slate-text text-sm mb-4">Professional security services since 2006. Licensed, bonded, and committed to your safety.</p>
 <div className="flex gap-3">
 <a href="https://facebook.com/sentinelsecurity" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 bg-neon/10 rounded-lg flex items-center justify-center text-neon hover:bg-neon/20 transition-colors">
 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
 </a>
 <a href="https://twitter.com/sentinelsec" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 bg-neon/10 rounded-lg flex items-center justify-center text-neon hover:bg-neon/20 transition-colors">
 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
 </a>
 <a href="https://linkedin.com/company/sentinelsecurity" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 bg-neon/10 rounded-lg flex items-center justify-center text-neon hover:bg-neon/20 transition-colors">
 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
 </a>
 <a href="https://instagram.com/sentinelsecurity" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 bg-neon/10 rounded-lg flex items-center justify-center text-neon hover:bg-neon/20 transition-colors">
 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
 </a>
 </div>
 </div>
 <div>
 <h4 className="text-white font-bold mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-text">
<li><a href="#services" className="hover:text-neon transition-colors py-1 block">Security Guards</a></li>
<li><a href="#services" className="hover:text-neon transition-colors py-1 block">Surveillance Systems</a></li>
<li><a href="#services" className="hover:text-neon transition-colors py-1 block">Alarm Systems</a></li>
<li><a href="#services" className="hover:text-neon transition-colors py-1 block">Access Control</a></li>
<li><a href="#services" className="hover:text-neon transition-colors py-1 block">Cyber Security</a></li>
<li><a href="#services" className="hover:text-neon transition-colors py-1 block">Consulting</a></li>
</ul>
 </div>
 <div>
<h4 className="text-white font-bold mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-text">
<li><a href="#about" className="hover:text-neon transition-colors py-1 block">About Us</a></li>
<li><a href="#reviews" className="hover:text-neon transition-colors py-1 block">Testimonials</a></li>
<li><a href="#contact" className="hover:text-neon transition-colors py-1 block">Contact</a></li>
<li><a href="mailto:careers@sentinelsecurity.com" className="hover:text-neon transition-colors py-1 block">Careers</a></li>
</ul>
 </div>
 <div>
<h4 className="text-white font-bold mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-text">
<li><a href="tel:+155****7233" className="hover:text-neon transition-colors py-1 block">(555) 890-SAFE</a></li>
<li><a href="mailto:info@sentinelsecurity.com" className="hover:text-neon transition-colors py-1 block">info@sentinelsecurity.com</a></li>
<li><a href="https://maps.google.com/?q=500+Security+Blvd+Los+Angeles+CA+90001" target="_blank" rel="noopener noreferrer" className="hover:text-neon transition-colors py-1 block">500 Security Blvd<br />Los Angeles, CA 90001</a></li>
</ul>
 </div>
 </div>
 <div className="pt-8 border-t border-dark-border text-center">
 <p className="text-slate-text/60 text-xs">Licensed & Bonded | ASIS Member | UL Listed Monitoring</p>
 <p className="text-slate-text/60 text-xs mt-2">© 2024 Sentinel Security. All rights reserved. License #SC-2006-4456</p>
 </div>
 </div>
 </footer>
 </div>
 );
}

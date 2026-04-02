"use client";

import { useState, useEffect } from "react";

const services = [
  { name: "Lawn Care", icon: "🌱", desc: "Mowing, edging, fertilizing" },
  { name: "Garden Design", icon: "🌸", desc: "Custom landscape planning" },
  { name: "Tree Service", icon: "🌳", desc: "Trimming & removal" },
  { name: "Hardscaping", icon: "🪨", desc: "Patios, walkways, walls" },
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request sent! We'll contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-[#f0fdf4] overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-xl rounded-full shadow-lg border border-green-100">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🌿</span>
            </div>
            <span className="text-xl font-bold text-green-800 tracking-wider">GREENSCAPE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Portfolio", "About", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-green-500 transition-all"
          >
            Get Quote
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" 
            alt="Garden" 
            className="w-full h-full object-cover"
            style={{ transform: `scale(1.05) translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-transparent" />
        </div>

        {/* Floating Leaves */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-32 left-20 text-3xl animate-pulse">🍃</div>
          <div className="absolute top-60 right-32 text-2xl animate-pulse delay-300">🌿</div>
          <div className="absolute bottom-40 left-40 text-3xl animate-pulse delay-700">🌸</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full mb-8">
              <span className="text-green-400">✓</span>
              <span className="text-green-300 text-sm">Eco-Friendly Practices</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Your Outdoor</span><br />
              Space
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Professional landscaping that brings your vision to life. 
              Sustainable designs, expert craftsmanship, lasting beauty.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection("contact")} 
                className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-500 transition-all hover:scale-105 shadow-xl shadow-green-600/30"
              >
                Get Free Quote
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")} 
                className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                View Portfolio
              </button>
            </div>

            <div className="flex gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">500+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">15+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Sustainable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 text-sm tracking-[0.3em] uppercase mb-4 block">What We Do</span>
            <h2 className="text-5xl font-bold text-gray-800">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-green-100 hover:border-green-300"
              >
                <span className="text-5xl mb-6 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-32 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-200 text-sm tracking-[0.3em] uppercase mb-4 block">Our Work</span>
            <h2 className="text-5xl font-bold">Portfolio</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
              "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
              "https://images.unsplash.com/photo-1598902108854-d1446671f7d4?w=600&q=80",
            ].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <img src={img} alt={`Project ${i + 1}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" 
              alt="Garden" 
              className="rounded-2xl w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80" 
              alt="Plants" 
              className="rounded-2xl w-full h-48 object-cover mt-8"
            />
            <img 
              <final_file_content path="landscaping/app/page.tsx">
"use client";

import { useState, useEffect } from "react";

const services = [
  { name: "Lawn Care", icon: "🌱", desc: "Mowing, edging, fertilizing" },
  { name: "Garden Design", icon: "🌸", desc: "Custom landscape planning" },
  { name: "Tree Service", icon: "🌳", desc: "Trimming & removal" },
  { name: "Hardscaping", icon: "🪨", desc: "Patios, walkways, walls" },
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request sent! We'll contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-[#f0fdf4] overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-xl rounded-full shadow-lg border border-green-100">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🌿</span>
            </div>
            <span className="text-xl font-bold text-green-800 tracking-wider">GREENSCAPE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Portfolio", "About", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-green-500 transition-all"
          >
            Get Quote
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" 
            alt="Garden" 
            className="w-full h-full object-cover"
            style={{ transform: `scale(1.05) translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-transparent" />
        </div>

        {/* Floating Leaves */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-32 left-20 text-3xl animate-pulse">🍃</div>
          <div className="absolute top-60 right-32 text-2xl animate-pulse delay-300">🌿</div>
          <div className="absolute bottom-40 left-40 text-3xl animate-pulse delay-700">🌸</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full mb-8">
              <span className="text-green-400">✓</span>
              <span className="text-green-300 text-sm">Eco-Friendly Practices</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Your Outdoor</span><br />
              Space
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Professional landscaping that brings your vision to life. 
              Sustainable designs, expert craftsmanship, lasting beauty.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection("contact")} 
                className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-500 transition-all hover:scale-105 shadow-xl shadow-green-600/30"
              >
                Get Free Quote
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")} 
                className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                View Portfolio
              </button>
            </div>

            <div className="flex gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">500+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">15+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Sustainable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 text-sm tracking-[0.3em] uppercase mb-4 block">What We Do</span>
            <h2 className="text-5xl font-bold text-gray-800">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-green-100 hover:border-green-300"
              >
                <span className="text-5xl mb-6 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-32 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-200 text-sm tracking-[0.3em] uppercase mb-4 block">Our Work</span>
            <h2 className="text-5xl font-bold">Portfolio</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
              "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
              "https://images.unsplash.com/photo-1598902108854-d1446671f7d4?w=600&q=80",
            ].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <img src={img} alt={`Project ${i + 1}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" 
              alt="Garden" 
              className="rounded-2xl w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80" 
              alt="Plants" 
              className="rounded-2xl w-full h-48 object-cover mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1598902108854-d1446671f7d4?w=400&q=80" 
              alt="Path" 
              className="rounded-2xl w-full h-48 object-cover -mt-4"
            />
            <img 
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80" 
              alt="Flowers" 
              className="rounded-2xl w-full h-48 object-cover mt-4"
            />
          </div>

          <div>
            <span className="text-green-600 text-sm tracking-[0.3em] uppercase mb-4 block">Our Story</span>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Creating Beauty</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              For over 15 years, Greenscape has been transforming outdoor spaces into beautiful, 
              sustainable environments. We believe in working with nature, not against it.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-2xl p-6">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-gray-500 text-sm">Sustainable</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-6">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-gray-500 text-sm">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-green-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 text-sm tracking-[0.3em] uppercase mb-4 block">Get Started</span>
            <h2 className="text-5xl font-bold text-gray-800">Request Quote</h2>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-green-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="Your name"
                  required
                />
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder="Phone"
                />
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                >
                  <option value="">Service needed</option>
                  {services.map((s, i) => (
                    <option key={i} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all resize-none"
                placeholder="Describe your outdoor space..."
              />
              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-green-500 transition-all hover:scale-[1.02]"
              >
                Request Quote
              </button>
            </form>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-3 block">📍</span>
              <p className="text-gray-600">123 Garden Lane<br />Green Valley, CA 90210</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-3 block">📞</span>
              <p className="text-gray-600">+1 (555) 456-7890</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <span className="text-3xl mb-3 block">🕐</span>
              <p className="text-gray-600">Mon-Sat: 7AM - 7PM<br />Sun: 9AM - 5PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white">🌿</span>
              </div>
              <span className="text-xl font-bold tracking-wider">GREENSCAPE</span>
            </div>
            <div className="flex gap-6">
              {["Instagram", "Facebook", "Pinterest"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-green-300 hover:text-white transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center">
            <p className="text-green-400 text-sm">© 2026 Greenscape Landscaping. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
</final_file_content>

IMPORTANT: For any previous changes to this file, use the final_file_content shown above as your reference point. Always use the final_file_content shown in the most recent message as your reference for any future changes.

 <task_progress>
- [x] Create truly unique design for architecture-firm (split screen)
- [x] Create truly unique design for boutique-hotel (full screen scrolling)
- [x] Create truly unique design for tech-agency (futuristic cards)
- [x] Create unique design for gym-fitness (bold energetic)
- [x] Create unique design for wedding-venue (romantic soft)
- [x] Create unique design for fine-dining-restaurant (elegant dark)
- [x] Create unique design for law-firm (professional navy)
- [x] Create unique design for dental-medical-clinic (soft teal/cyan)
- [x] Create unique design for photography-studio (artistic dramatic)
- [x] Create unique design for fashion-brand (editorial black/white with side nav)
- [x] Create unique design for spa-wellness (soft purple/violet)
- [x] Create unique design for organic-farm (earthy green)
- [x] Create unique design for car-dealer (bold red/black)
- [x] Create unique design for bakery-cake-shop (soft pink/pastel)
- [x] Create unique design for cafe-casual-restaurant (warm amber/brown)
- [x] Create unique design for auto-workshop (industrial orange/black)
- [x] Create unique design for yoga-studio (peaceful purple/indigo)
- [x] Create unique design for coaching-institute (professional blue/academic)
- [x] Create unique design for pet-store-vet (playful orange/pet-friendly)
- [x] Create unique design for furniture-store (warm wood tones)
- [x] Create unique design for makeup-artist (glamorous pink/gold)
- [x] Create unique design for jewelry-store (luxurious gold/diamond dark)
- [x] Create unique design for tattoo-studio (edgy red/black artistic)
- [x] Create unique design for home-decor-shop (elegant neutral stone)
- [x] Create unique design for electronics-store (tech blue/cyan sleek)
- [x] Create unique design for hair-beauty-salon (trendy purple/pink)
- [x] Create unique design for event-planner (vibrant colorful gradient)
- [x] Create unique design for real-estate-developer (luxury amber/gold split)
- [x] Create unique design for barbershop (classic red/black masculine)
- [x] Create unique design for ecommerce-general (clean indigo/shopping)
- [x] Create unique design for school-education (friendly blue/green academic)
- [x] Create unique design for manufacturing-b2b (professional gray/industrial)
- [x] Create unique design for hospitality-consulting (professional emerald/teal)
- [x] Create unique design for business-consulting (professional indigo/violet)
- [x] Create unique design for car-wash (fresh cyan/blue clean)
- [x] Create unique design for interior-design (elegant stone/amber sophisticated)
- [x] Create unique design for cleaning-company (fresh green/clean)
- [x] Create unique design for insurance-agency (professional blue/trustworthy)
- [x] Create unique design for accounting-firm (professional slate/trustworthy)
- [x] Create unique design for moving-company (professional orange/trustworthy)
- [x] Create unique design for landscaping (natural green/eco-friendly)
- [ ] Create unique designs for remaining 9 projects
- [ ] Push all projects at once
</task_progress>
</write_to_file>
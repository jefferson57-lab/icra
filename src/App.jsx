import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Wind, Droplets, Thermometer, TrendingUp, Globe, Users, BookOpen, ChevronRight, Leaf, Sprout, Trees, Moon, Sun, Shield, Twitter, Linkedin, Facebook, Mail, MapPin, Phone, Target, Eye, Award, ShieldCheck, Heart, Building2, GraduationCap, Briefcase, MessageSquare } from 'lucide-react';

export default function ClimateInstituteWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const impactStats = [
    { value: "2.5M+", label: "Trees Planted", icon: BookOpen },
    { value: "18", label: "African Countries", icon: Globe },
    { value: "50K+", label: "Community Members", icon: Users },
    { value: "15yr", label: "Restoration Impact", icon: TrendingUp }
  ];

  const researchAreas = [
    {
      title: "Reforestation Science",
      icon: Wind,
      description: "Evidence-based approaches to restore native forests and combat desertification across African landscapes",
      color: "from-#52B788 to-[#2D6A4F]"
    },
    {
      title: "Water Conservation",
      icon: Droplets,
      description: "Sustainable water management systems that support both communities and reforestation efforts",
      color: "from-cyan-400 to-teal-600"
    },
    {
      title: "Climate Adaptation",
      icon: Thermometer,
      description: "Building resilient ecosystems and communities prepared for climate variability and change",
      color: "from-orange-400 to-red-600"
    },
    {
      title: "Community Impact",
      icon: TrendingUp,
      description: "Measuring environmental recovery and socioeconomic benefits for local communities",
      color: "from-[#95D5B2] to-[#2D6A4F]"
    }
  ];

  const latestInsights = [
    {
      category: "Impact Story",
      title: "Kenya's Great Green Wall: 500,000 Trees Transform Arid Landscape",
      date: "January 15, 2026",
      readTime: "8 min"
    },
    {
      category: "Community Update",
      title: "Women-Led Reforestation Initiative Doubles Tree Survival Rates",
      date: "January 8, 2026",
      readTime: "12 min"
    },
    {
      category: "Scientific Progress",
      title: "Native Species Selection: 5-Year Growth Study Results",
      date: "December 28, 2025",
      readTime: "6 min"
    }
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: isDarkMode ? `
              radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(74, 222, 128, 0.1) 0%, transparent 50%)
            ` : `
              radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(74, 222, 128, 0.05) 0%, transparent 50%)
            `,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div className={`absolute inset-0 ${isDarkMode ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" : ''}`} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-colors duration-300 ${isDarkMode ? 'bg-slate-950/80 border-b border-slate-800/50' : 'bg-white/80 border-b border-slate-200/50'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src="/images/logo_icra.png" alt="ICRA Logo" className="w-10 h-10" />
              </div>
              <div>
                <div className="text-xl font-bold tracking-tight">Institute of Climate Restoration for Africa</div>
                <div className="text-xs text-slate-400 tracking-wide">RESTORING • SUSTAINING • THRIVING</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setActivePage('home')} className={`${isDarkMode ? 'text-slate-300 hover:text-[#52B788]' : 'text-slate-700 hover:text-[#2D6A4F]'} transition-colors text-sm font-medium tracking-wide ${activePage === 'home' ? 'text-[#52B788]' : ''}`}>Home</button>
              <button onClick={() => setActivePage('restoration')} className={`${isDarkMode ? 'text-slate-300 hover:text-[#95D5B2]' : 'text-slate-700 hover:text-[#2D6A4F]'} transition-colors text-sm font-medium tracking-wide ${activePage === 'restoration' ? 'text-[#52B788]' : ''}`}>Our Work</button>
              <button onClick={() => setActivePage('contact')} className={`${isDarkMode ? 'text-slate-300 hover:text-[#95D5B2]' : 'text-slate-700 hover:text-[#2D6A4F]'} transition-colors text-sm font-medium tracking-wide ${activePage === 'contact' ? 'text-[#52B788]' : ''}`}>Contact</button>
              <button onClick={() => setActivePage('about')} className={`${isDarkMode ? 'text-slate-300 hover:text-[#52B788]' : 'text-slate-700 hover:text-[#2D6A4F]'} transition-colors text-sm font-medium tracking-wide ${activePage === 'about' ? 'text-[#52B788]' : ''}`}>About</button>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              {/* <button className="px-5 py-2.5 bg-[#52B788] hover:bg-[#2D6A4F] rounded-lg text-sm font-semibold text-white transition-all duration-300">
                Plant Trees
              </button> */}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-200'}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t transition-colors ${isDarkMode ? 'border-slate-800 bg-slate-950/95' : 'border-slate-200 bg-white/95'} backdrop-blur-xl`}>
            <div className="px-6 py-6 space-y-4">
              <button onClick={() => { setActivePage('home'); setIsMenuOpen(false); }} className={`block w-full text-left transition-colors font-medium ${isDarkMode ? 'text-slate-300 hover:text-[#52B788]' : 'text-slate-700 hover:text-[#2D6A4F]'} ${activePage === 'home' ? 'text-[#52B788]' : ''}`}>Home</button>
              <button onClick={() => { setActivePage('restoration'); setIsMenuOpen(false); }} className={`block w-full text-left transition-colors font-medium ${isDarkMode ? 'text-slate-300 hover:text-[#95D5B2]' : 'text-slate-700 hover:text-[#2D6A4F]'} ${activePage === 'restoration' ? 'text-[#52B788]' : ''}`}>Our Work</button>
              <button onClick={() => { setActivePage('contact'); setIsMenuOpen(false); }} className={`block w-full text-left transition-colors font-medium ${isDarkMode ? 'text-slate-300 hover:text-[#95D5B2]' : 'text-slate-700 hover:text-[#2D6A4F]'} ${activePage === 'contact' ? 'text-[#52B788]' : ''}`}>Contact</button>
              <button onClick={() => { setActivePage('about'); setIsMenuOpen(false); }} className={`block w-full text-left transition-colors font-medium ${isDarkMode ? 'text-slate-300 hover:text-[#52B788]' : 'text-slate-700 hover:text-[#2D6A4F]'} ${activePage === 'about' ? 'text-[#52B788]' : ''}`}>About</button>
              <button className="w-full px-5 py-3 bg-[#52B788] hover:bg-[#2D6A4F] rounded-lg font-semibold text-white transition-all">
                Plant Trees
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Pages Container */}
      <div className="relative">
      
      {/* HOME PAGE */}
      {activePage === 'home' && (
      <>
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image_3.jpg"
            alt="African Landscape Restoration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#52B788]/20 border border-[#52B788]/30 backdrop-blur-sm text-[#52B788] text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52B788] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#52B788]"></span>
              </span>
              Restoring Africa's Resilience
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Science-Driven <span className="text-[#52B788] italic">Climate Restoration</span> for Africa
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              Empowering communities across Africa to lead climate and health solutions through citizen science, bridging research and real-world action. We integrate innovation, local knowledge, and inclusive collaboration to drive sustainable change in community health, water security, and agri-food systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => setActivePage('restoration')} className="rounded-full text-lg px-8 h-14 bg-[#52B788] text-white hover:bg-[#2D6A4F] shadow-lg transition-all flex items-center justify-center font-semibold">
                Explore Our Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              {/* <button className="rounded-full text-lg px-8 h-14 bg-white text-slate-950 hover:bg-slate-100 shadow-lg transition-all font-semibold">
                Join the Network
              </button> */}
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 right-12 hidden lg:flex gap-8 bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-1">
            <p className="text-[#52B788] text-4xl font-bold">2.5M+</p>
            <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Trees Planted</p>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="space-y-1">
            <p className="text-[#52B788] text-4xl font-bold">10+</p>
            <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Strategic Partners</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                A Vision for a <span className="text-[#52B788]">Thriving African Continent</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                The Institute of Climate Restoration for Africa (I.C.R.A) serves as the continent's premier hub for climate solutions. We bridge the gap between global climate goals and local African realities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {[
                  { icon: Shield, title: 'Resilience', desc: 'Building communities that can withstand climate shifts.' },
                  { icon: Wind, title: 'Innovation', desc: 'Deploying cutting-edge carbon capture and storage.' },
                  { icon: Leaf, title: 'Ecology', desc: 'Protecting biodiversity hotspots across Africa.' },
                  { icon: Globe, title: 'Policy', desc: 'Influencing pan-African climate governance.' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all">
                      <Icon className="w-8 h-8 text-[#52B788]" />
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/image_2.jpg"
                  alt="Restoration Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-slate-900 p-8 rounded-3xl text-white shadow-2xl max-w-xs hidden md:block">
                <Users className="w-12 h-12 text-[#52B788] mb-4" />
                <h4 className="text-xl font-bold mb-2">Community Driven</h4>
                <p className="text-sm text-white/70">Our success lies in empowering local leaders to spearhead restoration in their own regions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Mobile */}
      <section className="py-16 bg-slate-900 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8 text-center">
          <div>
            <p className="text-[#52B788] text-4xl font-bold">2.5M+</p>
            <p className="text-white/60 text-xs uppercase mt-2">Trees Planted</p>
          </div>
          <div>
            <p className="text-[#52B788] text-4xl font-bold">10+</p>
            <p className="text-white/60 text-xs uppercase mt-2">Strategic Partners</p>
          </div>
        </div>
      </section>

      {/* Programs Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Priority Restoration Areas</h2>
              <p className="text-lg text-slate-600">Strategic initiatives designed to maximize environmental impact and social equity.</p>
            </div>
            <button onClick={() => setActivePage('restoration')} className="text-slate-900 font-bold group flex items-center whitespace-nowrap hover:text-[#52B788] transition-colors">
              View All Programs
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Great Green Wall Support',
                image: '/images/image_1.jpg',
                category: 'Reforestation'
              },
              {
                title: 'Water Conservation',
                image: '/images/image_5.jpg',
                category: 'Blue Carbon'
              },
              {
                title: 'Sustainable Agro-Ecology',
                image: '/images/image_6.jpg',
                category: 'Regenerative'
              }
            ].map((program, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 p-8 w-full space-y-2">
                  <span className="text-[#52B788] text-xs font-bold uppercase tracking-widest">{program.category}</span>
                  <h3 className="text-2xl font-bold text-white leading-tight">{program.title}</h3>
                  <button className="inline-flex items-center text-white/70 text-sm hover:text-white transition-colors pt-4">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#52B788] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#52B788] rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white">Let's Restore Africa, Together.</h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Whether you're a potential strategic partner, a researcher, or a community leader, your voice and expertise are vital to our mission.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <button onClick={() => setActivePage('contact')} className="rounded-full text-lg px-8 h-14 bg-[#52B788] text-white hover:bg-[#2D6A4F] shadow-lg transition-all font-semibold flex items-center justify-center">
                  Partner With I.C.R.A
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                {/* <button className="rounded-full text-lg px-8 h-14 bg-white text-slate-900 hover:bg-slate-100 shadow-lg transition-all font-semibold">
                  Download 2024 Impact Report
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      </>
      )}

      {/* RESTORATION PAGE */}
      {activePage === 'restoration' && (
      <>
        {/* Header Section - Dark */}
        <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-100">Our Restoration Work</h1>
              <p className="text-xl text-slate-400 max-w-3xl">
                We implement comprehensive climate restoration programs across Africa, combining traditional ecological knowledge with modern science.
              </p>
            </div>
          </div>
        </section>

        {/* Research Areas - White Section */}
        <section className="py-24 bg-white text-slate-900 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div 
                    key={index}
                    className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg hover:border-[#52B788]/50 transition-all duration-500"
                  >
                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.color} mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-[#2D6A4F] transition-colors">
                        {area.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {area.description}
                      </p>
                      
                      <button className="flex items-center text-[#2D6A4F] font-semibold group-hover:translate-x-2 transition-transform">
                        Learn More
                        <ChevronRight className="ml-1 w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects - Dark Section */}
        <section className="py-20 bg-slate-950 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden aspect-video mb-16">
              <img 
                src="/images/image_7.jpg" 
                alt="Restoration project"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Active Restoration Projects</h2>
                <p className="text-[#95D5B2] max-w-2xl">Across 18 African countries, we're implementing restoration projects that restore ecosystems and transform communities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats - White Section */}
        <section className="py-24 bg-white text-slate-900 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Progress</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-4xl font-bold text-[#2D6A4F] mb-2">2.5M+</div>
                <div className="text-slate-900 font-semibold mb-2">Trees Planted</div>
                <p className="text-slate-600 text-sm">Native species restoration across degraded landscapes</p>
              </div>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-4xl font-bold text-[#2D6A4F] mb-2">850K</div>
                <div className="text-slate-900 font-semibold mb-2">Tons CO₂ Sequestered</div>
                <p className="text-slate-600 text-sm">Annual carbon capture through forest restoration</p>
              </div>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-4xl font-bold text-[#2D6A4F] mb-2">50K+</div>
                <div className="text-slate-900 font-semibold mb-2">Lives Improved</div>
                <p className="text-slate-600 text-sm">Communities directly benefiting from restoration</p>
              </div>
            </div>
          </div>
        </section>
      </>
      )}

      {/* IMPACT PAGE */}
      {/* {activePage === 'impact' && (
      <section className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Our Impact</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Measurable environmental and community benefits from our restoration initiatives across Africa.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-[#52B788]/50 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-8 h-8 text-[#52B788] mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-#52B788 to-[#52B788] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img 
                src="/images/image_5.jpg" 
                alt="Environmental impact"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Environmental Recovery</h3>
                <p className="text-slate-300">Ecosystems are healing with increased biodiversity and soil health restoration</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img 
                src="/images/image_6.jpg" 
                alt="Community benefits"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Community Benefits</h3>
                <p className="text-slate-300">Income generation, education, and improved livelihoods for local communities</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-8">Key Impact Metrics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Carbon Sequestered</span>
                    <span className="text-[#52B788] font-bold">850K tons/year</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-#52B788 to-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Forest Coverage</span>
                    <span className="text-[#52B788] font-bold">250K hectares</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-#52B788 to-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Species Restored</span>
                    <span className="text-[#52B788] font-bold">300+ species</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-#52B788 to-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">Community Members</span>
                    <span className="text-[#52B788] font-bold">50K+ engaged</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-#52B788 to-green-500 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )} */}

      {/* CONTACT PAGE */}
      {activePage === 'contact' && (
      <section className={`pt-32 pb-20 px-6 lg:px-12 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Let's Connect</h1>
            <p className={`text-xl max-w-3xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Whether you're interested in collaboration, partnerships, or learning more about our restoration initiatives, we'd love to hear from you.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Inquiry Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Explore Partnership Opportunities — Inquiries</h2>
              <form className="space-y-6">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Full Name</label>
                  <input 
                    type="text"
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white focus:ring-#52B788' : 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-#52B788'}`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email Address</label>
                  <input 
                    type="email"
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white focus:ring-#52B788' : 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-#52B788'}`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Inquiry Type</label>
                  <select 
                    className={`w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white focus:ring-#52B788' : 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-#52B788'}`}
                  >
                    <option>Select an inquiry type</option>
                    <option>Partnership Opportunity</option>
                    <option>Research Collaboration</option>
                    <option>Funding & Grants</option>
                    <option>Media Inquiry</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Message</label>
                  <textarea 
                    placeholder="Tell us more about your inquiry..."
                    rows="5"
                    className={`w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white focus:ring-#52B788' : 'bg-slate-50 border-slate-300 text-slate-900 focus:ring-#52B788'}`}
                  />
                </div>

                <button className="w-full bg-[#52B788] hover:bg-[#2D6A4F] text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
                  Send Inquiry
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Right Column - Partnership Tracks & Office Details */}
            <div>
              {/* Strategic Partnership Tracks */}
              <h2 className="text-3xl font-bold mb-8">Strategic Partnership Tracks</h2>
              <div className="space-y-4 mb-12">
                <div className={`p-6 rounded-xl border transition-all ${isDarkMode ? 'bg-[#52B788]/10 border-[#52B788]/20 hover:border-[#52B788]/50' : 'bg-[#52B788]/5 border-[#95D5B2]/30 hover:border-[#52B788]'}`}>
                  <div className="flex items-start gap-4">
                    <Briefcase className={`w-6 h-6 flex-shrink-0 ${isDarkMode ? 'text-[#52B788]' : 'text-[#2D6A4F]'}`} />
                    <div>
                      <h3 className="font-bold mb-1">Corporate ESG</h3>
                      <p className={isDarkMode ? 'text-slate-400 text-sm' : 'text-slate-600 text-sm'}>Develop sustainable business models aligned with Africa's restoration goals</p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-xl border transition-all ${isDarkMode ? 'bg-[#52B788]/10 border-[#52B788]/20 hover:border-[#52B788]/50' : 'bg-[#52B788]/5 border-[#95D5B2]/30 hover:border-[#52B788]'}`}>
                  <div className="flex items-start gap-4">
                    <GraduationCap className={`w-6 h-6 flex-shrink-0 ${isDarkMode ? 'text-[#52B788]' : 'text-[#2D6A4F]'}`} />
                    <div>
                      <h3 className="font-bold mb-1">Academic Institutions</h3>
                      <p className={isDarkMode ? 'text-slate-400 text-sm' : 'text-slate-600 text-sm'}>Collaborate on research and educational programs advancing climate science</p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-xl border transition-all ${isDarkMode ? 'bg-[#52B788]/10 border-[#52B788]/20 hover:border-[#52B788]/50' : 'bg-[#52B788]/5 border-[#95D5B2]/30 hover:border-[#52B788]'}`}>
                  <div className="flex items-start gap-4">
                    <Building2 className={`w-6 h-6 flex-shrink-0 ${isDarkMode ? 'text-[#52B788]' : 'text-[#2D6A4F]'}`} />
                    <div>
                      <h3 className="font-bold mb-1">Institutional Partners</h3>
                      <p className={isDarkMode ? 'text-slate-400 text-sm' : 'text-slate-600 text-sm'}>Work with governments and NGOs to scale restoration impact</p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-xl border transition-all ${isDarkMode ? 'bg-[#52B788]/10 border-[#52B788]/20 hover:border-[#52B788]/50' : 'bg-[#52B788]/5 border-[#95D5B2]/30 hover:border-[#52B788]'}`}>
                  <div className="flex items-start gap-4">
                    <MessageSquare className={`w-6 h-6 flex-shrink-0 ${isDarkMode ? 'text-[#52B788]' : 'text-[#2D6A4F]'}`} />
                    <div>
                      <h3 className="font-bold mb-1">Media & Communications</h3>
                      <p className={isDarkMode ? 'text-slate-400 text-sm' : 'text-slate-600 text-sm'}>Share our restoration stories and amplify Africa's climate action</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Headquarters */}
              <h2 className="text-3xl font-bold mb-8">Regional Headquarters</h2>
              <div className={`p-8 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#52B788] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Nairobi, Kenya</p>
                      <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Premier African hub for climate restoration research and innovation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#52B788] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">+254 (0) 725 216 292</p>
                      <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Available Monday-Friday, 9am-5pm EAT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-[#52B788] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Global Presence</p>
                      <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Active in African countries with field offices and research centers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ABOUT PAGE */}
      {activePage === 'about' && (
      <>
        {/* Header Section */}
        <section className="py-24 bg-slate-950 text-white pt-32">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold">About I.C.R.A</h1>
              <p className="text-lg md:text-2xl font-medium">
  The Institute of Climate Restoration for Africa (ICRA) is a pioneering Kenyan organization dedicated to transforming how climate and health challenges are addressed across the continent.

  <br /><br />

  We bridge academic research and grassroots practice through a practo-academia model, providing digital and in-person training for practitioners, fellows, and interns. Our work empowers communities through citizen science to lead solutions in community health, water security, and agri-food systems.

  <br /><br />

  By integrating digital tools for climate adaptation and mitigation, we ensure solutions are innovative, inclusive, and rooted in local realities.

  <br /><br />

  Our philosophy centers on democratizing knowledge—repositioning citizens as co-creators and lead researchers. Through ICRA Hubs, we foster collaboration among communities, academics, and policymakers, amplifying the voices of those most affected.

  <br /><br />

  <span className="text-slate-400 text-sm">
    📍 Nairobi, Kenya &nbsp;•&nbsp; 🌍 Across Africa
  </span>
</p>
            </div>
          </div>
        </section>

        {/* Vision & Mission - White Section */}
        <section className="py-24 bg-white text-slate-900 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-slate-50 p-12 rounded-2xl space-y-6 border border-slate-200">
                <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  To build the capacity of marginalized communities—especially women and youth—to lead inclusive citizen science and training initiatives that advance water security, food security, climate, health, and gender justice in Africa.
                </p>
              </div>
              <div className="bg-slate-50 p-12 rounded-2xl space-y-6 border border-slate-200">
                <div className="bg-[#52B788] w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  To become Africa’s leading Practo-Academia hub, bridging community practice and academic research to achieve gender-responsive justice in health, climate action, and community-led inquiry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values - Light Section */}
        <section className="py-24 bg-slate-50 text-slate-900 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto mb-16 space-y-4 text-center">
              <h2 className="text-4xl font-bold text-slate-900">Our Core Values</h2>
              <p className="text-slate-600">The principles that guide our research, advocacy, and on-the-ground initiatives.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, title: 'Scientific Integrity', desc: 'Every solution we advocate for is rooted in peer-reviewed science.' },
                { icon: Users, title: 'Cooperation', desc: 'We believe in the power of partnerships. We actively build bridges across communities, academia, and practice to ensure our climate restoration efforts are just, inclusive, and have a lasting impact.' },
                { icon: Award, title: 'Excellence', desc: 'We strive for the highest standards in data, execution, and impact.' },
                { icon: Heart, title: 'Understanding', desc: 'We lead with empathy. We actively listen and learn from local contexts without judgment, ensuring that solutions are co-created, not imposed.' },
              ].map((value, i) => (
                <div key={i} className="space-y-4 p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-[#52B788]-100 rounded-xl flex items-center justify-center mx-auto">
                    <value.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900">{value.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Teaser - White Section */}
        <section className="py-24 bg-white text-slate-900 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Our Founder:  <span className="text-[#2D6A4F] italic">Dr. STELLA WANJALA</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Dr. Stella Wanjala is the Founder and Lead Researcher at ICRA, bringing over 25 years of experience in community development, climate action, and the critical intersections between environmental health and human well-being.
As a dedicated Lecturer in the Department of Biological Sciences (Environmental Conservation) at Masinde Muliro University of Science and Technology, Dr. Wanjala embodies the Practo-Academia model. She translates academic rigor into practical, community-led solutions.
Her leadership extends to pioneering roles, including serving as Project Lead for the world's first women-led water fund, The River Yala Water Fund, in partnership with The Nature Conservancy. She is also a Co-Founder and Director of Women in Water and Natural Resources Conservation (WWANC) .
Throughout her distinguished career, Dr. Wanjala has collaborated with leading organizations such as GIZ, The Nature Conservancy, the International Tree Foundation (ITF), the World Resources Institute (WRI), and the Women Earth Alliance. Her work consistently champions Nature-based Solutions, water and food security, and the empowerment of communities to lead their own development. Her passion lies in bridging the gap between high-level policy, academic knowledge, and tangible impact on the ground.
                </p>
                <button className="rounded-full px-8 h-14 bg-[#2D6A4F] text-white hover:bg-[#52B788]-700 shadow-lg transition-all font-semibold">Meet the Team</button>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
  <div className="col-span-2 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg translate-y-8">
    <img src="/images/dr-stella.jpg" alt="Leader" className="w-full h-full object-cover" />
  </div>

                {/* <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/dr-paul.jpg" alt="Leader" className="w-full h-full object-cover" />
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </>
      )}

      </div>
      {/* End Pages Container */}

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="flex flex-col gap-6">
              <button onClick={() => setActivePage('home')} className="flex items-center gap-2 group">
                <div className="bg-white p-2 rounded-lg">
                  <img src="/images/logo_icra.png" alt="ICRA Logo" className="w-6 h-6" />
                </div>
                <span className="font-bold text-2xl tracking-tight">I.C.R.A</span>
              </button>
              <p className="text-white/70 leading-relaxed max-w-xs">
                Leading Africa's climate restoration efforts through science, community engagement, and innovative solutions for a sustainable future.
              </p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-white/10 p-2 rounded-full hover:bg-[#52B788] hover:text-white transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-xl mb-6">Explore</h4>
              <ul className="flex flex-col gap-4">
                {['Our Mission', 'Restoration Programs', 'Impact Reports', 'Resources', 'Join I.C.R.A'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-[#52B788] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-xl mb-6">Contact Us</h4>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 shrink-0 text-[#52B788]" />
                  <span> ICAD Center, Nairobi, Kenya</span>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <Phone className="w-5 h-5 shrink-0 text-[#52B788]" />
                  <span>+254 725-216-292</span>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <Mail className="w-5 h-5 shrink-0 text-[#52B788]" />
                  <span>climaterestorationafrica@gmail.com</span>
                </li>
              </ul>
            </div>


            {/* Newsletter */}
            {/* <div>
              <h4 className="font-bold text-xl mb-6">Stay Informed</h4>
              <p className="text-white/70 mb-4 text-sm leading-relaxed">
                Subscribe to our Insights newsletter for the latest in African climate restoration.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-#52B788 text-white placeholder-white/50"
                />
                <button type="submit" className="bg-[#52B788] text-white px-4 py-2 rounded-lg text-sm font-bold hover:scale-105 transition-transform">
                  Join
                </button>
              </form>
            </div> */}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© 2026 Institute of Climate Restoration for Africa. All rights reserved.</p>
            {/* <div className="flex gap-6">
              <a href="#" className="hover:text-[#52B788] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#52B788] transition-colors">Terms of Service</a>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
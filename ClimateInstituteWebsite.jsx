import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Wind, Droplets, Thermometer, TrendingUp, Globe, Users, BookOpen, ChevronRight, Leaf, Sprout, Trees } from 'lucide-react';

export default function ClimateInstituteWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [activePage, setActivePage] = useState('home'); // home, restoration, impact, stories, team

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
      color: "from-emerald-400 to-green-600"
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
      color: "from-lime-400 to-green-600"
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(74, 222, 128, 0.1) 0%, transparent 50%)
            `,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold tracking-tight">Institute of Climate Restoration for Africa</div>
                <div className="text-xs text-slate-400 tracking-wide">RESTORING • SUSTAINING • THRIVING</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setActivePage('home')} className={`text-sm font-medium tracking-wide transition-colors ${activePage === 'home' ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>Home</button>
              <button onClick={() => setActivePage('restoration')} className={`text-sm font-medium tracking-wide transition-colors ${activePage === 'restoration' ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>Our Work</button>
              <button onClick={() => setActivePage('impact')} className={`text-sm font-medium tracking-wide transition-colors ${activePage === 'impact' ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>Impact</button>
              <button onClick={() => setActivePage('stories')} className={`text-sm font-medium tracking-wide transition-colors ${activePage === 'stories' ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>Stories</button>
              <button onClick={() => setActivePage('team')} className={`text-sm font-medium tracking-wide transition-colors ${activePage === 'team' ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>Team</button>
              <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                Plant Trees
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl">
            <div className="px-6 py-6 space-y-4">
              <button onClick={() => { setActivePage('home'); setIsMenuOpen(false); }} className={`block font-medium transition-colors ${activePage === 'home' ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>Home</button>
              <button onClick={() => { setActivePage('restoration'); setIsMenuOpen(false); }} className={`block font-medium transition-colors ${activePage === 'restoration' ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>Our Work</button>
              <button onClick={() => { setActivePage('impact'); setIsMenuOpen(false); }} className={`block font-medium transition-colors ${activePage === 'impact' ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>Impact</button>
              <button onClick={() => { setActivePage('stories'); setIsMenuOpen(false); }} className={`block font-medium transition-colors ${activePage === 'stories' ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>Stories</button>
              <button onClick={() => { setActivePage('team'); setIsMenuOpen(false); }} className={`block font-medium transition-colors ${activePage === 'team' ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}>Team</button>
              <button className="w-full px-5 py-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg font-semibold">
                Plant Trees
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HOME PAGE */}
      {activePage === 'home' && (
        <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide backdrop-blur-sm">
                  Restoring Africa's Climate Since 2010
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Restoring
                <span className="block bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent">
                  Africa's Climate
                </span>
                <span className="block">One Tree at a Time</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Through grassroots action and scientific innovation, we're reversing climate degradation 
                across Africa—planting forests, restoring ecosystems, and building resilient communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center">
                  Our Impact
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-slate-700 rounded-xl text-lg font-semibold hover:border-emerald-500 hover:bg-emerald-500/5 transition-all duration-300">
                  Plant With Us
                </button>
              </div>
            </div>

            {/* Auto-scrolling Image Carousel */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              {/* Carousel Container */}
              <div className="absolute inset-0">
                {/* Image slides with CSS animation */}
                <div className="relative w-full h-full">
                  {[
                    { src: '/images/image_3.jpg', alt: 'Lush forest canopy' },
                    { src: '/images/image_2.jpg', alt: 'Planting seedlings' },
                    { src: '/images/image_1.jpg', alt: 'Fresh seedlings' },
                    { src: '/images/image_5.jpg', alt: 'Dry landscape' },
                  ].map((image, index) => (
                    <div
                      key={index}
                      className="absolute inset-0 w-full h-full transition-opacity duration-1000"
                      style={{
                        backgroundImage: `url('${image.src}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        animation: `fadeSlide 20s infinite`,
                        animationDelay: `${index * 5}s`,
                        opacity: 0
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/50 to-emerald-950/60 z-10" />
              
              {/* Content overlay */}
              <div className="relative z-20 h-full flex flex-col justify-end p-8 lg:p-12">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium tracking-wide backdrop-blur-sm">
                    <Leaf className="w-4 h-4" />
                    Living Ecosystems
                  </div>
                  <h3 className="text-3xl font-bold text-white">From Seed to Forest</h3>
                  <p className="text-emerald-100 max-w-xl">
                    Every tree we plant contributes to biodiversity, soil health, and carbon sequestration—creating lasting environmental benefits for communities across Africa.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="px-4 py-2 rounded-lg bg-slate-950/60 backdrop-blur-sm border border-emerald-500/30">
                      <div className="text-emerald-400 text-sm font-medium">Carbon Stored</div>
                      <div className="text-2xl font-bold text-white">850K tons</div>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-slate-950/60 backdrop-blur-sm border border-emerald-500/30">
                      <div className="text-emerald-400 text-sm font-medium">Biodiversity</div>
                      <div className="text-2xl font-bold text-white">300+ species</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CSS Animation */}
              <style>{`
                @keyframes fadeSlide {
                  0% { opacity: 0; transform: scale(1); }
                  5% { opacity: 1; transform: scale(1); }
                  20% { opacity: 1; transform: scale(1.1); }
                  25% { opacity: 0; transform: scale(1.1); }
                  100% { opacity: 0; transform: scale(1); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Image Gallery */}
      <section className="py-12 relative overflow-hidden">
        <div className="relative">
          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* First set of images */}
            {[
              '/images/image_1.jpg',
              '/images/image_2.jpg',
              '/images/image_3.jpg',
              '/images/image_5.jpg',
              '/images/image_6.jpg',
              '/images/image_7.jpg',
            ].map((src, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-80 h-64 mx-3 rounded-xl overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              '/images/image_1.jpg',
              '/images/image_2.jpg',
              '/images/image_3.jpg',
              '/images/image_5.jpg',
              '/images/image_6.jpg',
              '/images/image_7.jpg',
            ].map((src, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-80 h-64 mx-3 rounded-xl overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CSS Animation */}
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Climate Action Gallery */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide backdrop-blur-sm mb-6">
              <Leaf className="w-4 h-4" />
              Climate Action in Progress
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Restoration in Action</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Witness the transformation as communities across Africa come together to plant, nurture, and protect our forests for generations to come.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Tree Planting Image */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <img 
                src="/images/image_2.jpg" 
                alt="Community member planting seedling"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Community Tree Planting</h3>
                <p className="text-emerald-200 text-sm mb-3">Kenya Highlands Initiative</p>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  15,000 trees planted in 2025
                </div>
              </div>
            </div>

            {/* Seedling Watering Image */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <img 
                src="/images/image_1.jpg" 
                alt="Fresh seedlings with healthy root system"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Nurturing New Growth</h3>
                <p className="text-teal-200 text-sm mb-3">Tanzania Reforestation Project</p>
                <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  95% seedling survival rate
                </div>
              </div>
            </div>

            {/* Forest Growth Image */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <img 
                src="/images/image_3.jpg" 
                alt="Thriving forest ecosystem"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Thriving Ecosystems</h3>
                <p className="text-green-200 text-sm mb-3">Uganda Forest Restoration</p>
                <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  5-year growth documented
                </div>
              </div>
            </div>

            {/* Youth Education Image */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-emerald-700/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Youth Climate Leaders</h3>
                  <p className="text-emerald-200 text-sm">Ghana Education Program</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  5,000+ youth trained
                </div>
              </div>
            </div>

            {/* Community Gathering Image */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-lime-600/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Globe className="w-16 h-16 text-lime-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Community Mobilization</h3>
                  <p className="text-lime-200 text-sm">Rwanda Village Initiative</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2 text-lime-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                  200+ villages engaged
                </div>
              </div>
            </div>

            {/* Restored Landscape Image */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-teal-700/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <TrendingUp className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Landscape Restoration</h3>
                  <p className="text-teal-200 text-sm">Ethiopia Highlands Recovery</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  50,000 hectares restored
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 inline-flex items-center gap-2">
              <Trees className="w-5 h-5" />
              View Full Impact Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Climate Challenge & Action Section */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">The Challenge We Face</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Climate change threatens Africa's ecosystems, but together we're reversing the damage through collective action and restoration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Climate Crisis Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img 
                src="/images/image_5.jpg" 
                alt="Cracked earth showing climate impact"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-medium mb-3">
                  The Crisis
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Degraded Landscapes</h3>
                <p className="text-slate-300">Desertification and drought threaten millions of hectares across the continent</p>
              </div>
            </div>

            {/* Climate Action Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img 
                src="/images/image_6.jpg" 
                alt="Climate action protest"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-3">
                  Our Response
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Collective Action</h3>
                <p className="text-slate-300">Communities mobilizing for a sustainable future through restoration and advocacy</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
              <div className="text-3xl font-bold text-emerald-400 mb-2">2.5M+</div>
              <div className="text-slate-300">Trees planted to combat desertification</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
              <div className="text-3xl font-bold text-emerald-400 mb-2">850K</div>
              <div className="text-slate-300">Tons of CO₂ sequestered annually</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
              <div className="text-3xl font-bold text-emerald-400 mb-2">50K+</div>
              <div className="text-slate-300">Lives improved through restoration</div>
            </div>
          </div>
        </div>
      </section>
      <section id="research" className="py-20 px-6 lg:px-12 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/image_7.jpg" 
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Restoration Approach</h2>
            <p className="text-xl text-slate-400 max-w-3xl">
              We combine traditional ecological knowledge with modern science to create lasting environmental change across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                      {area.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {area.description}
                    </p>
                    
                    <button className="flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">
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

      {/* Latest Insights */}
      <section id="insights" className="py-20 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stories of Change</h2>
            <p className="text-xl text-slate-400 max-w-3xl">
              Read about the communities, innovations, and breakthroughs driving Africa's climate restoration movement.
            </p>
          </div>

          <div className="space-y-6">
            {latestInsights.map((insight, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide">
                        {insight.category}
                      </span>
                      <span className="text-slate-500 text-sm">{insight.date}</span>
                      <span className="text-slate-500 text-sm">• {insight.readTime} read</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">
                      {insight.title}
                    </h3>
                  </div>
                  
                  <button className="flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform whitespace-nowrap">
                    Read Article
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 border-2 border-slate-700 rounded-xl text-lg font-semibold hover:border-emerald-500 hover:bg-emerald-500/5 transition-all duration-300">
              Read More Stories
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQyIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAgMCBMIDAgMCAwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQyKSIvPjwvc3ZnPg==')] opacity-30" />
            
            <div className="relative z-10 p-12 lg:p-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Plant the Seeds of Change
              </h2>
              <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
                Join thousands of individuals and organizations working together to restore Africa's climate—one tree, one community, one ecosystem at a time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Start Planting Today
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-xl text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                  Partner With Us
                </button>
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
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
            <div 
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: "url('/images/image_3.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide backdrop-blur-sm mb-6">
                  <Trees className="w-4 h-4" />
                  Our Restoration Work
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                  Building Africa's
                  <span className="block bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent">
                    Green Future
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  From degraded landscapes to thriving ecosystems, our holistic approach combines traditional knowledge with modern science to restore Africa's natural heritage.
                </p>
              </div>
            </div>
          </section>

          {/* Restoration Approach */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Four-Pillar Approach</h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  Every restoration project follows our proven methodology, adapted to local conditions and community needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    number: "01",
                    title: "Site Assessment & Planning",
                    description: "We conduct comprehensive ecological surveys, soil analysis, and community consultations to develop customized restoration plans.",
                    icon: BookOpen,
                    color: "from-emerald-400 to-green-600"
                  },
                  {
                    number: "02",
                    title: "Native Species Selection",
                    description: "Working with local botanists, we identify indigenous tree species that will thrive in each specific microclimate and ecosystem.",
                    icon: Leaf,
                    color: "from-teal-400 to-emerald-600"
                  },
                  {
                    number: "03",
                    title: "Community Engagement",
                    description: "Local communities are partners from day one—trained in propagation, planting, and ongoing maintenance of restored areas.",
                    icon: Users,
                    color: "from-green-400 to-lime-600"
                  },
                  {
                    number: "04",
                    title: "Long-Term Monitoring",
                    description: "We track growth rates, survival percentages, biodiversity metrics, and socioeconomic benefits for 5+ years post-planting.",
                    icon: TrendingUp,
                    color: "from-lime-400 to-green-600"
                  }
                ].map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={index} className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500">
                      <div className="flex items-start gap-6">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-emerald-400 font-bold text-sm mb-2">{pillar.number}</div>
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{pillar.title}</h3>
                          <p className="text-slate-400 leading-relaxed">{pillar.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Active Projects Map */}
          <section className="py-20 px-6 lg:px-12 bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Active Projects Across Africa</h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  Currently operating in 18 countries with over 200 restoration sites.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { country: "Kenya", projects: 45, trees: "680K", image: "/images/image_2.jpg" },
                  { country: "Tanzania", projects: 32, trees: "520K", image: "/images/image_1.jpg" },
                  { country: "Uganda", projects: 28, trees: "410K", image: "/images/image_3.jpg" },
                  { country: "Ethiopia", projects: 38, trees: "590K", image: "/images/image_5.jpg" },
                  { country: "Rwanda", projects: 22, trees: "290K", image: "/images/image_6.jpg" },
                  { country: "Ghana", projects: 19, trees: "245K", image: "/images/image_7.jpg" },
                ].map((project, index) => (
                  <div key={index} className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                    <img src={project.image} alt={project.country} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.country}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="text-emerald-400 font-semibold">{project.projects} Projects</div>
                        <div className="text-slate-300">{project.trees} Trees</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Get Involved CTA */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="relative rounded-3xl bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 overflow-hidden p-12 lg:p-16 text-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQyIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAgMCBMIDAgMCAwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQyKSIvPjwvc3ZnPg==')] opacity-30" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Join a Restoration Project</h2>
                  <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
                    Whether you're an individual, organization, or corporate partner—there's a place for you in our restoration work.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      Volunteer With Us
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white rounded-xl text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                      Corporate Partnerships
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* IMPACT PAGE */}
      {activePage === 'impact' && (
        <>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img src="/images/image_3.jpg" alt="Impact" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide backdrop-blur-sm mb-6">
                  <TrendingUp className="w-4 h-4" />
                  Measuring Our Impact
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                  Real Numbers,
                  <span className="block bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent">
                    Real Change
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Every tree planted, every hectare restored, every life improved—we measure what matters to ensure lasting environmental and social benefits.
                </p>
              </div>
            </div>
          </section>

          {/* Key Metrics Dashboard */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  { value: "2.5M+", label: "Trees Planted", change: "+450K this year", icon: Trees },
                  { value: "18", label: "Countries", change: "Across Africa", icon: Globe },
                  { value: "50,000+", label: "People Engaged", change: "+12K this year", icon: Users },
                  { value: "850K", label: "Tons CO₂ Stored", change: "Annually", icon: Wind }
                ].map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
                      <Icon className="w-10 h-10 text-emerald-400 mb-4" />
                      <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                        {metric.value}
                      </div>
                      <div className="text-slate-300 font-medium mb-1">{metric.label}</div>
                      <div className="text-emerald-400 text-sm">{metric.change}</div>
                    </div>
                  );
                })}
              </div>

              {/* Environmental Impact */}
              <div className="mb-20">
                <h2 className="text-4xl font-bold mb-12 text-center">Environmental Restoration</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Biodiversity Recovery",
                      stats: [
                        { label: "Native Species Returned", value: "300+" },
                        { label: "Wildlife Corridors Created", value: "45" },
                        { label: "Endangered Species Protected", value: "12" }
                      ]
                    },
                    {
                      title: "Soil & Water",
                      stats: [
                        { label: "Hectares Restored", value: "85,000" },
                        { label: "Soil Erosion Reduced", value: "67%" },
                        { label: "Water Retention Improved", value: "54%" }
                      ]
                    },
                    {
                      title: "Carbon Sequestration",
                      stats: [
                        { label: "Annual CO₂ Captured", value: "850K tons" },
                        { label: "Equivalent Cars Off Road", value: "185K" },
                        { label: "Carbon Credits Generated", value: "2.1M" }
                      ]
                    }
                  ].map((category, index) => (
                    <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50">
                      <h3 className="text-2xl font-bold mb-6 text-emerald-400">{category.title}</h3>
                      <div className="space-y-4">
                        {category.stats.map((stat, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between items-baseline mb-1">
                              <span className="text-slate-400 text-sm">{stat.label}</span>
                              <span className="text-white font-bold text-lg">{stat.value}</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500" style={{ width: '75%' }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Impact */}
              <div>
                <h2 className="text-4xl font-bold mb-12 text-center">Community Benefits</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative rounded-2xl overflow-hidden aspect-video">
                    <img src="/images/image_2.jpg" alt="Community impact" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-4">Economic Opportunity</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-emerald-400 text-2xl font-bold">15,000+</div>
                          <div className="text-slate-300 text-sm">Jobs Created</div>
                        </div>
                        <div>
                          <div className="text-emerald-400 text-2xl font-bold">$8.5M</div>
                          <div className="text-slate-300 text-sm">Income Generated</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      { label: "Women in Leadership Roles", value: "58%", description: "Of project managers are women" },
                      { label: "Youth Participation", value: "42%", description: "Participants under 30 years old" },
                      { label: "Food Security Improvement", value: "73%", description: "Communities report better harvests" },
                      { label: "Clean Water Access", value: "+35%", description: "Increase in local areas" }
                    ].map((impact, index) => (
                      <div key={index} className="p-6 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-300 font-medium">{impact.label}</span>
                          <span className="text-3xl font-bold text-emerald-400">{impact.value}</span>
                        </div>
                        <p className="text-slate-500 text-sm">{impact.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Annual Reports */}
          <section className="py-20 px-6 lg:px-12 bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Annual Impact Reports</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {['2025', '2024', '2023'].map((year) => (
                  <div key={year} className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all cursor-pointer group">
                    <BookOpen className="w-12 h-12 text-emerald-400 mb-4" />
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{year} Impact Report</h3>
                    <p className="text-slate-400 mb-6">Comprehensive analysis of our environmental and social impact</p>
                    <button className="flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">
                      Download PDF
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* STORIES PAGE */}
      {activePage === 'stories' && (
        <>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img src="/images/image_6.jpg" alt="Stories" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide backdrop-blur-sm mb-6">
                  <BookOpen className="w-4 h-4" />
                  Stories of Restoration
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                  Voices From
                  <span className="block bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent">
                    The Frontlines
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Meet the communities, leaders, and changemakers transforming Africa's landscapes one tree at a time.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Stories */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              {[
                {
                  category: "Community Leader",
                  title: "How Amina Built Kenya's Most Successful Women-Led Tree Nursery",
                  excerpt: "From a small backyard operation to supplying 50,000 seedlings annually, Amina's story shows the power of grassroots leadership.",
                  image: "/images/image_2.jpg",
                  date: "January 28, 2026",
                  readTime: "8 min read",
                  author: "Sarah Kamau"
                },
                {
                  category: "Scientific Breakthrough",
                  title: "Native Species That Outperformed Our Wildest Predictions",
                  excerpt: "A 5-year study reveals indigenous trees growing 40% faster than expected in restored Ethiopian highlands.",
                  image: "/images/image_3.jpg",
                  date: "January 22, 2026",
                  readTime: "12 min read",
                  author: "Dr. Abiola Okonkwo"
                },
                {
                  category: "Before & After",
                  title: "Tanzania's Dead Zone: Now a Thriving Wildlife Corridor",
                  excerpt: "Satellite imagery and ground reports document the remarkable recovery of 5,000 hectares over 8 years.",
                  image: "/images/image_1.jpg",
                  date: "January 15, 2026",
                  readTime: "10 min read",
                  author: "James Mwangi"
                },
                {
                  category: "Youth Movement",
                  title: "Gen Z Climate Warriors: Ghana's University Students Lead Restoration",
                  excerpt: "How a student-led initiative planted 100,000 trees and changed campus culture forever.",
                  image: "/images/image_7.jpg",
                  date: "January 10, 2026",
                  readTime: "7 min read",
                  author: "Kofi Mensah"
                },
                {
                  category: "Traditional Knowledge",
                  title: "Elder Wisdom Meets Modern Science in Rwanda's Forests",
                  excerpt: "Indigenous planting techniques combined with satellite monitoring yield unprecedented survival rates.",
                  image: "/images/image_5.jpg",
                  date: "January 5, 2026",
                  readTime: "9 min read",
                  author: "Marie Uwase"
                },
                {
                  category: "Economic Impact",
                  title: "From Drought to Prosperity: One Village's Transformation Story",
                  excerpt: "How reforestation created 200 jobs and tripled household incomes in rural Uganda.",
                  image: "/images/image_6.jpg",
                  date: "December 28, 2025",
                  readTime: "11 min read",
                  author: "Peter Okello"
                }
              ].map((story, index) => (
                <div key={index} className={`group mb-12 ${index === 0 ? 'md:grid md:grid-cols-2 gap-8 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50' : ''}`}>
                  {index === 0 ? (
                    <>
                      <div className="relative rounded-2xl overflow-hidden aspect-video">
                        <img src={story.image} alt={story.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4 w-fit">
                          Featured • {story.category}
                        </div>
                        <h2 className="text-4xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{story.title}</h2>
                        <p className="text-slate-400 text-lg mb-6 leading-relaxed">{story.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                          <span>{story.author}</span>
                          <span>•</span>
                          <span>{story.date}</span>
                          <span>•</span>
                          <span>{story.readTime}</span>
                        </div>
                        <button className="flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">
                          Read Full Story
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all cursor-pointer flex gap-6">
                      <div className="relative rounded-xl overflow-hidden w-64 h-48 flex-shrink-0">
                        <img src={story.image} alt={story.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
                          {story.category}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{story.title}</h3>
                        <p className="text-slate-400 mb-4 leading-relaxed">{story.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <span>{story.author}</span>
                          <span>•</span>
                          <span>{story.date}</span>
                          <span>•</span>
                          <span>{story.readTime}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Story Categories */}
          <section className="py-20 px-6 lg:px-12 bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Explore By Topic</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { name: "Community Leaders", count: 28 },
                  { name: "Scientific Research", count: 35 },
                  { name: "Before & After", count: 19 },
                  { name: "Youth Movements", count: 24 }
                ].map((category, index) => (
                  <button key={index} className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all text-left group">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{category.name}</h3>
                    <p className="text-slate-400 text-sm">{category.count} stories</p>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* TEAM PAGE */}
      {activePage === 'team' && (
        <>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img src="/images/image_2.jpg" alt="Team" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium tracking-wide backdrop-blur-sm mb-6">
                  <Users className="w-4 h-4" />
                  Our Team
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                  Meet The People
                  <span className="block bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent">
                    Behind The Mission
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  From scientists to community organizers, our diverse team brings passion, expertise, and deep local knowledge to every restoration project.
                </p>
              </div>
            </div>
          </section>

          {/* Leadership Team */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Leadership Team</h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  Guided by experienced leaders with decades of combined expertise in ecology, community development, and climate science.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {[
                  {
                    name: "Dr. Amara Osei",
                    role: "Executive Director",
                    bio: "25 years in ecological restoration across West Africa",
                    image: "/images/image_2.jpg"
                  },
                  {
                    name: "James Kipchoge",
                    role: "Director of Operations",
                    bio: "Led 150+ successful reforestation projects in East Africa",
                    image: "/images/image_1.jpg"
                  },
                  {
                    name: "Dr. Sarah Nkosi",
                    role: "Chief Scientific Officer",
                    bio: "Published 40+ papers on native species conservation",
                    image: "/images/image_3.jpg"
                  }
                ].map((leader, index) => (
                  <div key={index} className="group">
                    <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-6">
                      <img src={leader.image} alt={leader.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{leader.name}</h3>
                    <p className="text-emerald-400 font-semibold mb-3">{leader.role}</p>
                    <p className="text-slate-400">{leader.bio}</p>
                  </div>
                ))}
              </div>

              {/* Regional Coordinators */}
              <div className="mb-20">
                <h2 className="text-4xl font-bold mb-12 text-center">Regional Coordinators</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { name: "Fatima Hassan", region: "North Africa", projects: "12 active" },
                    { name: "Michael Banda", region: "East Africa", projects: "28 active" },
                    { name: "Zanele Dlamini", region: "Southern Africa", projects: "15 active" },
                    { name: "Emmanuel Adeyemi", region: "West Africa", projects: "22 active" }
                  ].map((coordinator, index) => (
                    <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all cursor-pointer group">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-2xl font-bold text-white mb-4">
                        {coordinator.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-emerald-400 transition-colors">{coordinator.name}</h3>
                      <p className="text-emerald-400 text-sm mb-2">{coordinator.region}</p>
                      <p className="text-slate-400 text-sm">{coordinator.projects}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scientific Advisory Board */}
              <div>
                <h2 className="text-4xl font-bold mb-12 text-center">Scientific Advisory Board</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "Prof. David Mutua",
                      expertise: "Forest Ecology & Biodiversity",
                      institution: "University of Nairobi"
                    },
                    {
                      name: "Dr. Aisha Mohammed",
                      expertise: "Climate Change Adaptation",
                      institution: "African Climate Research Institute"
                    },
                    {
                      name: "Prof. John Okafor",
                      expertise: "Soil Science & Restoration",
                      institution: "Lagos Environmental Research Center"
                    },
                    {
                      name: "Dr. Thandiwe Ncube",
                      expertise: "Indigenous Knowledge Systems",
                      institution: "Southern African Traditional Ecology Network"
                    }
                  ].map((advisor, index) => (
                    <div key={index} className="p-6 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50 hover:border-emerald-500/50 transition-all flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center text-lg font-bold text-white flex-shrink-0">
                        {advisor.name.split(' ')[1][0]}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{advisor.name}</h3>
                        <p className="text-emerald-400 text-sm mb-1">{advisor.expertise}</p>
                        <p className="text-slate-400 text-sm">{advisor.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Join the Team CTA */}
          <section className="py-20 px-6 lg:px-12 bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
              <div className="relative rounded-3xl bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 overflow-hidden p-12 lg:p-16 text-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQyIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAgMCBMIDAgMCAwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQyKSIvPjwvc3ZnPg==')] opacity-30" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Join Our Team</h2>
                  <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
                    We're always looking for passionate individuals to join our mission. Explore current openings in restoration, research, and community engagement.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      View Open Positions
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white rounded-xl text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                      Volunteer Opportunities
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-bold">ICRA</div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Institute of Climate Restoration for Africa — Planting hope, growing futures.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Work</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Tree Planting</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Impact Stories</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Methodology</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Active Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Media</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Social Media</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div>© 2026 Institute of Climate Restoration for Africa. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
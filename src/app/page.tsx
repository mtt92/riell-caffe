'use client';

import { useState } from 'react';
import { Coffee, Utensils, Wine, Star, MapPin, Phone, Clock, Instagram, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Inter, Pacifico } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const pacifico = Pacifico({ weight: '400', subsets: ['latin'], variable: '--font-pacifico' });

type MenuTab = 'colazione' | 'pranzo' | 'apericena';

const menuContent = {
  colazione: {
    title: 'Colazione',
    subtitle: 'Sveglia alle 05:00',
    description: 'Inizia la giornata con il piede giusto. La nostra colazione ti aspetta dalle prime luci dell\'alba con prodotti freschi e genuini.',
    icon: Coffee,
    image: '/images/brioches.jpeg',
    items: [
      'Focaccia genovese calda appena sfornata',
      'Caffè Boasi - Miscela esclusiva',
      'Brioches artigianali ripiene',
      'Cornetti (cioccolato, pistacchio, mandorle, cocco)',
      'Cappuccini cremosi con latte art',
      'Donuts al pistacchio',
      'Spremute fresche di stagione'
    ],
    accent: 'amber-700'
  },
  pranzo: {
    title: 'Pranzo Bistrot',
    subtitle: 'Pausa veloce ma gustosa',
    description: 'Non hai tempo ma non vuoi rinunciare al gusto? Il nostro bistrot offre piatti veloci, freschi e preparati con ingredienti locali.',
    icon: Utensils,
    image: '/images/hamburger.jpeg',
    items: [
      'Hamburger con carne fresca locale',
      'Insalatone complete e bilanciate',
      'Primi piatti del giorno',
      'Panini e piadine gourmet',
      'Piatti vegetariani'
    ],
    accent: 'red-800'
  },
  apericena: {
    title: 'Apericena',
    subtitle: 'Relax post lavoro',
    description: 'Dopo una lunga giornata, concediti un momento di relax con i nostri cocktail artigianali e stuzzichini selezionati.',
    icon: Wine,
    image: '/images/tagliere.jpeg',
    items: [
      'Cocktail artigianali e signature drinks',
      'Aperol Spritz e Hugo Spritz',
      'Gin Tonic premium',
      'Taglieri di salumi e formaggi',
      'Prosecco e bollicine',
      'Aperitivi analcolici gourmet'
    ],
    accent: 'red-700'
  }
};

// Menu dettagliato per accordion
const detailedMenu = {
  caffetteria: [
    'Caffè Espresso', 'Decaffeinato HAG', 'Caffè Corretto', 'Caffè Americano',
    'Cappuccino', 'Cappuccino HAG', 'Cappuccino d\'Orzo', 'Cappuccino Ginseng',
    'Latte Macchiato', 'Marocchino Nutella', 'Cioccolata Calda'
  ],
  primi: [
    'Spaghetti Carbonara', 'Risotto Zafferano', 'Mezze Penne Pomodoro',
    'Trofie al Pesto', 'Penne Arrabbiata', 'Risotto Funghi'
  ],
  hamburger: [
    'Classico (hamburger, formaggio)',
    'Light (insalata, pomodoro, olio sale)',
    'Ricco (formaggio, bacon, cipolla croccante)'
  ],
  panini: [
    'Prosciutto Cotto Formaggio', 'Prosciutto Crudo Formaggio',
    'Speck e Brie', 'Tonno Pomodoro Insalata',
    'Verdure Grigliate Stracchino', 'Salame Formaggio'
  ],
  insalate: [
    'Leggera (insalata, pomodoro, olive, mozzarella)',
    'Maxi (insalata, pomodoro, carote, tonno, uovo, mozzarella)',
    'Caprese', 'Crudo e Mozzarella'
  ],
  cocktail: [
    'Aperol Spritz', 'Hugo Spritz', 'Limoncello Spritz', 'Campari Spritz',
    'Negroni', 'Negroni Sbagliato', 'Mojito', 'Moscow Mule'
  ],
  gin: [
    'Gin Tonic', 'Gin Lemon',
    'Gin Deluxe (Mare, Malfy, Hendrick\'s, Bombay Sapphire, Tanqueray)'
  ],
  analcolici: [
    'Virgin Mojito', 'Virgin Spritz', 'Virgin Hugo',
    'Crodino', 'Sanbitter'
  ]
};

export default function RiellCafePage() {
  const [activeTab, setActiveTab] = useState<MenuTab>('colazione');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const currentContent = menuContent[activeTab];
  const IconComponent = currentContent.icon;

  return (
    <div className={`${inter.variable} ${pacifico.variable} font-sans bg-stone-50 text-stone-900`}>
      {/* Navbar Sticky */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/images/logo.jpeg" 
                alt="Riell Cafè Logo" 
                className="h-12 md:h-16 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-red-800 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('menu')} className="hover:text-red-800 transition-colors">
                Il Nostro Menu
              </button>
              <button onClick={() => scrollToSection('recensioni')} className="hover:text-red-800 transition-colors">
                Dicono di Noi
              </button>
              <button onClick={() => scrollToSection('contatti')} className="hover:text-red-800 transition-colors">
                Dove Siamo
              </button>
              <span className="bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Aperti dalle 05:00!
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-stone-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-red-800 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-left hover:text-red-800 transition-colors">
                Il Nostro Menu
              </button>
              <button onClick={() => scrollToSection('recensioni')} className="text-left hover:text-red-800 transition-colors">
                Dicono di Noi
              </button>
              <button onClick={() => scrollToSection('contatti')} className="text-left hover:text-red-800 transition-colors">
                Dove Siamo
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/cappuccino.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/50 to-stone-900/30"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${pacifico.className} text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight`}
          >
            Il buongiorno inizia qui,<br />nel salotto di Voltri.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-stone-100"
          >
            Dalla colazione all'alba, al pranzo veloce, fino all'aperitivo serale.<br />
            Dal 2010, la tua pausa di qualità.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => scrollToSection('menu')}
            className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all hover:scale-105"
          >
            Scopri le nostre specialità
          </motion.button>
        </div>
      </section>

      {/* Menu Tab Section */}
      <section id="menu" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`${pacifico.className} text-4xl md:text-5xl text-red-800 mb-4`}>
              La Tua Giornata al Riell
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Ogni momento della giornata ha il suo sapore speciale. Scopri le nostre proposte dall'alba al tramonto.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(menuContent) as MenuTab[]).map((tab) => {
              const TabIcon = menuContent[tab].icon;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all shadow-lg ${
                    activeTab === tab
                      ? 'bg-red-800 text-white scale-105'
                      : 'bg-white text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  <TabIcon className="w-5 h-5" />
                  {menuContent[tab].title}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"
            >
              {/* Image */}
              <div className="order-2 md:order-1">
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 md:order-2 bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full bg-${currentContent.accent}/10`}>
                    <IconComponent className={`w-8 h-8 text-${currentContent.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-stone-900">{currentContent.title}</h3>
                    <p className={`text-${currentContent.accent} font-semibold`}>{currentContent.subtitle}</p>
                  </div>
                </div>

                <p className="text-stone-600 mb-6 leading-relaxed">
                  {currentContent.description}
                </p>

                <ul className="space-y-3">
                  {currentContent.items.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Coffee className={`w-5 h-5 text-${currentContent.accent} flex-shrink-0 mt-1`} />
                      <span className="text-stone-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Menu Dettagliato Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className={`${pacifico.className} text-4xl md:text-5xl text-red-800 mb-4 text-center`}>
            Menu Completo
          </h2>
          <p className="text-center text-stone-600 mb-12">Clicca per espandere le categorie</p>

          <div className="space-y-4">
            {/* Caffetteria */}
            <div className="bg-stone-50 rounded-xl overflow-hidden shadow-lg">
              <button
                onClick={() => setExpandedMenu(expandedMenu === 'caffetteria' ? null : 'caffetteria')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-amber-50 transition-colors"
              >
                <span className="font-semibold text-lg flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-amber-700" />
                  Caffetteria & Colazione
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedMenu === 'caffetteria' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenu === 'caffetteria' && (
                <div className="px-6 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    {detailedMenu.caffetteria.map((item, idx) => (
                      <p key={idx} className="text-stone-700 text-sm">• {item}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Primi */}
            <div className="bg-stone-50 rounded-xl overflow-hidden shadow-lg">
              <button
                onClick={() => setExpandedMenu(expandedMenu === 'primi' ? null : 'primi')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-red-50 transition-colors"
              >
                <span className="font-semibold text-lg flex items-center gap-3">
                  <Utensils className="w-5 h-5 text-red-800" />
                  Primi Piatti
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedMenu === 'primi' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenu === 'primi' && (
                <div className="px-6 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    {detailedMenu.primi.map((item, idx) => (
                      <p key={idx} className="text-stone-700 text-sm">• {item}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Hamburger */}
            <div className="bg-stone-50 rounded-xl overflow-hidden shadow-lg">
              <button
                onClick={() => setExpandedMenu(expandedMenu === 'hamburger' ? null : 'hamburger')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-red-50 transition-colors"
              >
                <span className="font-semibold text-lg flex items-center gap-3">
                  <Utensils className="w-5 h-5 text-red-800" />
                  Hamburger
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedMenu === 'hamburger' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenu === 'hamburger' && (
                <div className="px-6 pb-4 space-y-1">
                  {detailedMenu.hamburger.map((item, idx) => (
                    <p key={idx} className="text-stone-700 text-sm">• {item}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Panini */}
            <div className="bg-stone-50 rounded-xl overflow-hidden shadow-lg">
              <button
                onClick={() => setExpandedMenu(expandedMenu === 'panini' ? null : 'panini')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-red-50 transition-colors"
              >
                <span className="font-semibold text-lg flex items-center gap-3">
                  <Utensils className="w-5 h-5 text-red-800" />
                  Panini & Piadine
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedMenu === 'panini' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenu === 'panini' && (
                <div className="px-6 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    {detailedMenu.panini.map((item, idx) => (
                      <p key={idx} className="text-stone-700 text-sm">• {item}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Insalate */}
            <div className="bg-stone-50 rounded-xl overflow-hidden shadow-lg">
              <button
                onClick={() => setExpandedMenu(expandedMenu === 'insalate' ? null : 'insalate')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-red-50 transition-colors"
              >
                <span className="font-semibold text-lg flex items-center gap-3">
                  <Utensils className="w-5 h-5 text-red-800" />
                  Insalate
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedMenu === 'insalate' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenu === 'insalate' && (
                <div className="px-6 pb-4 space-y-1">
                  {detailedMenu.insalate.map((item, idx) => (
                    <p key={idx} className="text-stone-700 text-sm">• {item}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Cocktail */}
            <div className="bg-stone-50 rounded-xl overflow-hidden shadow-lg">
              <button
                onClick={() => setExpandedMenu(expandedMenu === 'cocktail' ? null : 'cocktail')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-red-50 transition-colors"
              >
                <span className="font-semibold text-lg flex items-center gap-3">
                  <Wine className="w-5 h-5 text-red-700" />
                  Cocktail Signature
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedMenu === 'cocktail' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenu === 'cocktail' && (
                <div className="px-6 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    {detailedMenu.cocktail.map((item, idx) => (
                      <p key={idx} className="text-stone-700 text-sm">• {item}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Gin */}
            <div className="bg-stone-50 rounded-xl overflow-hidden shadow-lg">
              <button
                onClick={() => setExpandedMenu(expandedMenu === 'gin' ? null : 'gin')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-red-50 transition-colors"
              >
                <span className="font-semibold text-lg flex items-center gap-3">
                  <Wine className="w-5 h-5 text-red-700" />
                  Gin Bar Premium
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedMenu === 'gin' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenu === 'gin' && (
                <div className="px-6 pb-4 space-y-1">
                  {detailedMenu.gin.map((item, idx) => (
                    <p key={idx} className="text-stone-700 text-sm">• {item}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Analcolici */}
            <div className="bg-stone-50 rounded-xl overflow-hidden shadow-lg">
              <button
                onClick={() => setExpandedMenu(expandedMenu === 'analcolici' ? null : 'analcolici')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-red-50 transition-colors"
              >
                <span className="font-semibold text-lg flex items-center gap-3">
                  <Wine className="w-5 h-5 text-red-700" />
                  Analcolici
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedMenu === 'analcolici' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMenu === 'analcolici' && (
                <div className="px-6 pb-4 space-y-1">
                  {detailedMenu.analcolici.map((item, idx) => (
                    <p key={idx} className="text-stone-700 text-sm">• {item}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Aperitivi Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className={`${pacifico.className} text-4xl md:text-5xl text-red-800 mb-12 text-center`}>
            I Nostri Aperitivi
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <img src="/images/spritz.jpeg" alt="Spritz" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-800 mb-2">Spritz</h3>
                <p className="text-stone-600">Aperol, Hugo, Limoncello e Campari Spritz</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <img src="/images/gin.jpeg" alt="Gin" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-800 mb-2">Gin Premium</h3>
                <p className="text-stone-600">Gin Mare, Malfy, Hendrick's e altri selezionati</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <img src="/images/prosecco.jpeg" alt="Prosecco" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-800 mb-2">Bollicine</h3>
                <p className="text-stone-600">Prosecco Astoria e Spumanti selezionati</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="recensioni" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${pacifico.className} text-4xl md:text-5xl text-red-800 mb-4`}>
              Dicono di Noi
            </h2>
            <p className="text-lg text-stone-600">
              La soddisfazione dei nostri clienti è il nostro miglior biglietto da visita.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-stone-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-stone-700 mb-4 leading-relaxed italic">
                "Aperitivo 10+... locale consigliato anche per la gentilezza. Ottimo bar, ampi spazi, ordinato e pulito."
              </p>
              <p className="text-stone-900 font-semibold">— Cliente verificato</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-stone-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-stone-700 mb-4 leading-relaxed italic">
                "Pranzo sempre veloce con un panino a piacimento. Personale simpatico e competente."
              </p>
              <p className="text-stone-900 font-semibold">— Cliente abituale</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer & Contatti */}
      <footer id="contatti" className="bg-stone-900 text-stone-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.7!2d8.75!3d44.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzQ4LjAiTiA4wrA0NScwMC4wIkU!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Riell Cafè"
              ></iframe>
            </div>

            {/* Info Contatti */}
            <div className="space-y-6">
              <h3 className={`${pacifico.className} text-3xl text-red-400 mb-6`}>
                Vieni a trovarci
              </h3>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Indirizzo</p>
                  <p className="text-stone-300">Piazza Nicolò da Voltri, 2/R</p>
                  <p className="text-stone-300">16158 Genova Voltri (GE)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Orari di apertura</p>
                  <p className="text-stone-300">Lunedì - Sabato: 05:00 – 20:00</p>
                  <p className="text-red-400 font-semibold">Domenica: CHIUSO</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Telefono</p>
                  <a 
                    href="tel:+393403935560" 
                    className="text-stone-300 hover:text-red-400 transition-colors"
                  >
                    +39 340 393 5560
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Social</p>
                  <a 
                    href="https://instagram.com/riellcafe" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-300 hover:text-red-400 transition-colors"
                  >
                    @riellcafe
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 pt-8 text-center text-stone-400">
            <p className={`${pacifico.className} text-2xl text-red-400 mb-2`}>Riell Cafè</p>
            <p>© 2025 Riell Cafè - Il Salotto di Voltri. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/393403935560"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
        aria-label="Contattaci su WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

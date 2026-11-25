"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { catalogue } from './mini-jeux/jeux';
import { faqs } from './home-data';

const WHATSAPP = `https://wa.me/22391220321?text=${encodeURIComponent("Bonjour BNG, j'aimerais un devis gratuit pour mon projet.")}`;

export default function HomePage() {
  const expertises = [
    {
      title: 'Sites web',
      tag: 'Vitrine • Restaurant • Commerce',
      desc: 'Des sites rapides, beaux sur mobile et pensés pour transformer vos visiteurs en clients : appel, WhatsApp, réservation ou devis en un clic.',
      img: '/images/dev.jpg',
    },
    {
      title: 'Logiciels de gestion',
      tag: 'Factures • Stocks • Finances',
      desc: "Une application à votre image pour gérer factures, clients, stocks ou missions. Elle marche sur ordinateur et téléphone, même hors connexion.",
      img: '/images/strategie.jpg',
    },
    {
      title: 'Branding & marketing',
      tag: 'Logo • Réseaux sociaux • Vidéo',
      desc: "Logo, charte graphique, affiches, vidéos et publicités en ligne pour une marque qu'on reconnaît au premier coup d'œil.",
      img: '/images/branding.jpg',
    },
  ];

  const projets = [
    {
      title: 'Logiciel de gestion sur mesure',
      client: 'Coulba Services',
      category: 'Logiciel',
      img: '/images/coulba-services/logiciel/cover.svg',
      fit: 'object-contain bg-white p-10',
    },
    {
      title: 'Site vitrine de transitaire',
      client: 'Coulba Services',
      category: 'Site web',
      img: '/images/coulba-services/site/accueil-hero-desktop.png',
      fit: 'object-cover object-left-top',
    },
    {
      title: 'Identité & affiches',
      client: "A&A Food'",
      category: 'Branding',
      img: '/images/aa-food-poster-woudjila.jpg',
      fit: 'object-cover',
    },
  ];

  const stats = [
    { value: '6', label: 'Projets clients en vitrine' },
    { value: '3', label: "Pôles d'expertise" },
    { value: '24h', label: 'Devis et réponse garantis' },
    { value: '100%', label: 'Sur mesure, sans template' },
  ];

  const clients = ['Coulba Services', "A&A Food'", 'BBK Barber Shop', "Dia'agro", 'Love Connect'];

  const process = [
    {
      step: '01',
      title: 'Découverte',
      desc: "Échange sur WhatsApp ou par mail, analyse de votre besoin, devis gratuit sous 24 heures.",
    },
    {
      step: '02',
      title: 'Design',
      desc: 'Maquettes et identité visuelle validées avec vous avant chaque étape de production.',
    },
    {
      step: '03',
      title: 'Réalisation',
      desc: 'Développement, contenus et tests qualité jusqu\u2019à un résultat irréprochable.',
    },
    {
      step: '04',
      title: 'Lancement',
      desc: 'Mise en ligne, formation à la prise en main et suivi après livraison.',
    },
  ];

  const testimonials = [
    {
      quote:
        "Du logo aux affiches hebdomadaires, BNG a donné une vraie identité à notre marque. Nos plats traditionnels méritaient une image moderne : aujourd'hui, nos clients nous reconnaissent au premier coup d'œil.",
      author: "A&A Food'",
      context: 'Branding & Communication',
    },
    {
      quote:
        "La vidéo réalisée pour le salon a parfaitement capturé notre ambiance et notre savoir-faire. Un travail sérieux, rapide, et un résultat que nous partageons fièrement sur nos réseaux.",
      author: 'BBK Barber Shop',
      context: 'Production vidéo',
    },
    {
      quote:
        "Huit produits, une seule identité cohérente : la gamme d'étiquettes réalisée par BNG a transformé la présentation de nos produits du terroir. Un partenaire attentif, du premier brief à la livraison.",
      author: "Dia'agro",
      context: 'Branding & Packaging',
    },
  ];

  const vitrineJeux = "/mini-jeux";

  return (
    <div className="bg-premiumBlack min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accentBlue/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 text-center max-w-7xl px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-2 px-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-accentBlue text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
          >
            Sites web • Logiciels de gestion • Bamako & International
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight md:tracking-tighter mb-8 leading-[1.15] text-white"
          >
            Le digital qui fait <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue via-blue-400 to-cyan-300">
              grandir votre entreprise.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Sites web et logiciels de gestion sur mesure, à prix accessibles. Vous gagnez des clients en ligne et du temps au quotidien, où que vous soyez dans le monde.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group relative bg-white text-black px-12 py-5 rounded-full text-lg font-bold transition overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors">Devis gratuit en 24 h</span>
              <div className="absolute inset-0 bg-accentBlue translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <Link href="/portfolio" className="text-white hover:text-accentBlue px-10 py-4 text-lg font-bold transition flex items-center gap-2">
              Voir nos réalisations <span className="text-2xl">→</span>
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400"
          >
            {['Devis gratuit sous 24 h', 'Sur mesure, sans template', 'Suivi après livraison'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="text-accentBlue" aria-hidden="true">✓</span> {t}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Grid Expertise */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Expertise</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Ce que nous faisons pour vous.</h3>
            </div>
            <p className="text-gray-500 max-w-sm">Trois métiers, une seule équipe : du premier logo au logiciel qui fait tourner votre activité.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertises.map((s) => (
              <motion.div 
                key={s.title}
                whileHover={{ y: -15 }}
                className="group relative h-[440px] md:h-[500px] overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/5"
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-premiumBlack via-premiumBlack/40 to-transparent"></div>
                
                <div className="absolute bottom-0 p-10">
                  <div className="h-1 w-12 bg-accentBlue mb-6 group-hover:w-24 transition-all duration-500"></div>
                  <p className="text-accentBlue text-[10px] font-bold uppercase tracking-[0.25em] mb-3">{s.tag}</p>
                  <h4 className="text-3xl font-bold text-white mb-4">{s.title}</h4>
                  <p className="text-gray-200 text-sm leading-relaxed md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Réalisations</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Des projets livrés, pas des promesses.</h3>
            </div>
            <Link href="/portfolio" className="text-white hover:text-accentBlue font-bold transition flex items-center gap-2 shrink-0">
              Tous les projets <span className="text-2xl">→</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projets.map((p) => (
              <Link
                key={p.title}
                href="/portfolio"
                className="group block rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden hover:border-accentBlue/50 transition"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                  <Image
                    src={p.img}
                    alt={`${p.title} — ${p.client}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized={p.img.endsWith('.svg')}
                    className={`${p.fit} transition duration-700 group-hover:scale-105`}
                  />
                </div>
                <div className="p-8">
                  <p className="text-accentBlue text-[10px] font-bold uppercase tracking-[0.25em] mb-2">{p.category}</p>
                  <h4 className="text-xl font-bold text-white">{p.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{p.client}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{s.value}</div>
              <div className="text-gray-500 text-xs uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Preuves</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-12">Ils nous font confiance.</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((c) => (
              <Link
                key={c}
                href="/portfolio"
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-gray-300 font-bold hover:border-accentBlue hover:text-white transition"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Méthode</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Un processus simple et transparent.</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-accentBlue/50 transition">
                <div className="text-accentBlue text-5xl font-black mb-6 opacity-30">{p.step}</div>
                <h4 className="text-xl font-bold text-white mb-3">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Avis clients</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Ils témoignent.</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.author} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col hover:border-accentBlue/50 transition">
                <div className="text-accentBlue tracking-[0.3em] mb-6" aria-label="Note : 5 sur 5">★★★★★</div>
                <blockquote className="text-gray-300 text-sm leading-relaxed italic flex-1">
                  « {t.quote} »
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-white/5">
                  <div className="text-white font-bold">{t.author}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">{t.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">FAQ</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Questions fréquentes.</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white/5 border border-white/10 rounded-2xl px-6 open:border-accentBlue/50 transition">
                <summary className="py-5 cursor-pointer font-bold text-white list-none flex justify-between items-center gap-4">
                  {f.q}
                  <span className="text-accentBlue text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="pb-6 text-gray-400 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Mini-jeux de marque */}
      <section id="mini-jeux" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-accentBlue font-bold uppercase tracking-widest text-[10px] mb-4">Mini-jeux</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Mini-jeux de marque.</h3>
            <p className="text-gray-400 text-lg mt-6 leading-relaxed">
              Trois formats : empiler, tourner la roue, ou gratter une carte. Vos clients jouent à votre concours et vous laissent leur email.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {catalogue.map((jeu) => (
              <Link
                key={jeu.id}
                href={vitrineJeux}
                className="group border border-white/10 rounded-[2rem] p-8 hover:border-white/30 transition"
                style={{ background: `linear-gradient(160deg, ${jeu.color}26, transparent 60%)` }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">{jeu.emoji}</div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2" style={{ color: jeu.color }}>{jeu.short}</p>
                <h4 className="text-xl font-bold text-white mb-3">{jeu.name}</h4>
                <p className="text-gray-400 mb-6">{jeu.desc}</p>
                <span className="text-white font-bold group-hover:translate-x-1 inline-block transition-transform">Voir les démos →</span>
              </Link>
            ))}
          </div>
          <Link href={vitrineJeux} className="group relative inline-block bg-white text-black px-12 py-5 rounded-full text-lg font-bold transition overflow-hidden">
            <span className="relative z-10">Découvrir l'offre</span>
            <div className="absolute inset-0 bg-accentBlue translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </div>
      </section>

      {/* Appel à l'action final */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-accentBlue rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-white/20 transition-all duration-1000"></div>
          
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-8 md:mb-10 tracking-tighter leading-tight">
            Votre projet mérite <br /> d&apos;être en ligne.
          </h2>
          <p className="text-white/80 text-base md:text-xl max-w-xl mx-auto -mt-2 mb-10">
            Décrivez-le en deux lignes : nous revenons vers vous sous 24 heures avec une proposition claire.
          </p>
          
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto max-w-[280px] sm:max-w-none bg-white text-accentBlue px-6 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg font-black hover:scale-105 transition shadow-2xl">
              Écrire sur WhatsApp
            </a>
            <Link href="/contact" className="inline-block w-full sm:w-auto max-w-[280px] sm:max-w-none border-2 border-white text-white px-6 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg font-black hover:bg-white hover:text-accentBlue transition">
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

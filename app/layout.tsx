import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')

const TITLE = 'BNG Digital Agency — Sites web & logiciels de gestion sur mesure'
const DESCRIPTION =
  'Agence digitale basée à Bamako : création de sites web, logiciels de gestion sur mesure, branding et marketing digital à prix accessibles. Devis gratuit sous 24 h, clients au Mali, en Afrique et dans le monde.'

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: TITLE,
    template: '%s | BNG Digital Agency',
  },
  description: DESCRIPTION,
  applicationName: 'BNG Digital Agency',
  category: 'business',
  keywords: [
    'agence digitale Bamako',
    'création site web Mali',
    'création site internet pas cher',
    'logiciel de gestion sur mesure',
    'application de gestion entreprise',
    'développeur web Bamako',
    'site vitrine restaurant',
    'branding Mali',
    'marketing digital Bamako',
    'BNG Digital Agency',
  ],
  authors: [{ name: 'BNG Digital Agency' }],
  creator: 'BNG Digital Agency',
  publisher: 'BNG Digital Agency',
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'BNG Digital Agency',
    title: TITLE,
    description:
      'Sites web et logiciels de gestion sur mesure, à prix accessibles. Basés à Bamako, nous travaillons avec des entreprises du monde entier.',
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Sites web et logiciels de gestion sur mesure à prix accessibles. Bamako • International.',
  },
}

export const viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

/* Fiche entreprise lisible par Google (schema.org) */
const organization = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl ?? ''}/#agence`,
      name: 'BNG Digital Agency',
      description: DESCRIPTION,
      ...(siteUrl ? { url: siteUrl, logo: `${siteUrl}/images/logo-bng.png`, image: `${siteUrl}/opengraph-image` } : {}),
      email: 'bngdigitalagency@gmail.com',
      telephone: '+22391220321',
      priceRange: '$',
      founder: { '@type': 'Person', name: 'Mohamed S. Bengaly' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bamako',
        addressCountry: 'ML',
      },
      areaServed: [
        { '@type': 'Country', name: 'Mali' },
        { '@type': 'Place', name: 'Afrique' },
        { '@type': 'Place', name: 'France' },
        { '@type': 'Place', name: 'Monde' },
      ],
      availableLanguage: ['fr', 'en'],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+22391220321',
        email: 'bngdigitalagency@gmail.com',
        contactType: 'customer service',
        availableLanguage: ['French', 'English'],
      },
      sameAs: ['https://www.instagram.com/bng_digital_agency'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services BNG Digital Agency',
        itemListElement: [
          'Création de site web vitrine',
          'Logiciel de gestion sur mesure',
          'Identité visuelle et branding',
          'Marketing digital et réseaux sociaux',
          'Production vidéo',
          'Mini-jeux concours de marque',
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl ?? ''}/#site`,
      name: 'BNG Digital Agency',
      inLanguage: 'fr',
      ...(siteUrl ? { url: siteUrl } : {}),
      publisher: { '@id': `${siteUrl ?? ''}/#agence` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#0A0A0A] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

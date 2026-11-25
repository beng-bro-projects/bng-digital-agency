import type { Metadata } from 'next'
import HomePage from './HomePage'
import { faqs } from './home-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')

export const metadata: Metadata = {
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomePage />
    </>
  )
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://masoodazhar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "GoHighLevel Expert & AI Automation Specialist | Masood Azhar",
  description: "GoHighLevel expert helping service businesses build CRM systems, AI voice and chat agents, automated follow-up, funnels, advertising workflows, and N8N or Zapier integrations.",
  applicationName: "Masood Azhar Portfolio",
  authors: [{ name: "Masood Azhar" }],
  creator: "Masood Azhar",
  publisher: "Masood Azhar",
  keywords: [
    "GoHighLevel Expert",
    "GoHighLevel Automation Specialist",
    "GoHighLevel CRM Setup",
    "GoHighLevel Workflow Automation",
    "AI Voice Agents",
    "AI Chat Agents",
    "CRM Automation",
    "Marketing Automation",
    "N8N Integrations",
    "Zapier Integrations",
    "GoHighLevel Funnels",
    "GoHighLevel Pipelines",
    "Lead Follow-Up Automation",
    "Appointment-Booking Automation",
    "Meta Ads Automation",
    "Google Ads Lead Generation",
    "API and Webhook Integrations",
    "CRM Systems for Service Businesses",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GoHighLevel, AI Agents & Automation Systems | Masood Azhar",
    description: "CRM, AI-agent, advertising, and workflow automation systems designed to capture leads, automate follow-up, and book more appointments.",
    url: siteUrl,
    siteName: "Masood Azhar Portfolio",
    images: [
      {
        url: "/masood-azhar-og.png",
        width: 1200,
        height: 630,
        alt: "Masood Azhar - GoHighLevel & AI Automation Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel, AI Agents & Automation Systems | Masood Azhar",
    description: "CRM, AI-agent, advertising, and workflow automation systems designed to capture leads, automate follow-up, and book more appointments.",
    images: ["/masood-azhar-og.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Truthful JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": "Masood Azhar",
        "jobTitle": "GoHighLevel & AI Automation Specialist",
        "url": siteUrl,
        "image": `${siteUrl}/masood-azhar.jpg`,
        "sameAs": [
          "https://linkedin.com",
          "https://upwork.com"
        ],
        "description": "GoHighLevel expert helping service businesses build CRM systems, AI voice and chat agents, automated follow-up, funnels, advertising workflows, and N8N or Zapier integrations."
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        "name": "Masood Azhar - GoHighLevel & AI Automation Architecture",
        "url": siteUrl,
        "image": `${siteUrl}/masood-azhar.jpg`,
        "priceRange": "$$",
        "description": "GoHighLevel CRM setups, AI voice and chat agent integration, N8N/Zapier automation workflows, and paid lead generation campaigns.",
        "knowsAbout": [
          "GoHighLevel CRM Setup",
          "AI Voice and Chat Agents",
          "N8N and Zapier Integrations",
          "Sales Pipeline Automation",
          "Meta & Google Ads Lead Generation"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Masood Azhar Portfolio",
        "publisher": {
          "@id": `${siteUrl}/#person`
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`light ${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}

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

export const metadata: Metadata = {
  title: "Masood Azhar | GoHighLevel, AI Automation & CRM Systems Expert",
  description: "Architect of business automation engines. Deploying custom CRM systems, conversational AI agents, and paid ad funnels that turn leads into booked calls.",
  keywords: [
    "Masood Azhar",
    "GoHighLevel Expert",
    "AI Automation Consultant",
    "CRM System Integrator",
    "Conversational AI Voice Agents",
    "Meta Ads Lead Generation",
    "Google Ads Optimization",
    "Make.com Zapier Integrations"
  ],
  authors: [{ name: "Masood Azhar" }],
  creator: "Masood Azhar",
  openGraph: {
    title: "Masood Azhar | GoHighLevel & AI Automation Expert",
    description: "Personal portfolio of Masood Azhar. Automated lead intake, CRM systems, custom AI tools, and paid ads scale.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Masood Azhar",
    "description": "Architect of high-precision business automation engines, specializing in GoHighLevel CRM workflows, custom AI integrations, and paid advertising systems.",
    "knowsAbout": [
      "GoHighLevel CRM Setup",
      "Conversational AI Agents",
      "Sales Pipeline Automation",
      "Lead Generation Systems",
      "Paid Marketing Optimization"
    ],
    "image": "https://example.com/masood-azhar.jpg"
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
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}

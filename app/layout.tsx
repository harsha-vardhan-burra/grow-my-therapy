import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://drmayareynolds.com"),
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
  description:
    "Grounded, evidence-based therapy for adults navigating anxiety, panic, trauma, and burnout. In-person care in Santa Monica, CA and secure telehealth across California.",
  keywords: [
    "Clinical Psychologist Santa Monica",
    "Therapist Santa Monica CA",
    "Anxiety Therapy Santa Monica",
    "Trauma and EMDR Therapy California",
    "Burnout Psychologist Santa Monica",
    "Dr. Maya Reynolds PsyD",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  creator: "Dr. Maya Reynolds, PsyD",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drmayareynolds.com",
    title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist Santa Monica",
    description:
      "Grounded, evidence-based therapy for high-achieving adults navigating anxiety, panic, trauma, and burnout in Santa Monica and across California.",
    siteName: "Dr. Maya Reynolds, PsyD Clinical Psychology",
    images: [
      {
        url: "/maya/reynolds.png",
        width: 1024,
        height: 1536,
        alt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#283E34",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-linen text-charcoal selection:bg-accent/30 selection:text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}

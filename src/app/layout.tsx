import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riell Cafè - Il Salotto di Voltri | Bar Genova",
  description: "Bar storico a Genova Voltri. Colazione dalle 05:00, pranzo bistrot e apericena. Focaccia genovese, Caffè Boasi, cocktail artigianali. Piazza Nicolò da Voltri, 2/R.",
  keywords: "bar genova, caffè voltri, colazione genova, aperitivo genova, focaccia genovese, caffè boasi, riell cafè",
  openGraph: {
    title: "Riell Cafè - Il Salotto di Voltri",
    description: "Dal 2005 il punto di riferimento per colazione, pranzo e aperitivo a Genova Voltri",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

import { Pacifico } from 'next/font/google';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Privacy Policy - Riell Cafè',
  description: 'Informativa sulla privacy e cookie policy di Riell Cafè',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-red-800 hover:text-red-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna alla Home
        </Link>

        <h1 className={`${pacifico.className} text-4xl md:text-5xl text-red-800 mb-8`}>
          Privacy & Cookie Policy
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-stone-700 leading-relaxed">
          <p>
            Questo sito web ha finalità esclusivamente informative e di presentazione dell'attività.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Cookie</h2>
            <p>
              Questo sito non utilizza cookie di profilazione o tracciamento pubblicitario. 
              Potrebbero essere utilizzati esclusivamente cookie tecnici essenziali per il corretto 
              funzionamento della navigazione (hosting fornito da Vercel Inc.).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3">Dati Personali</h2>
            <p>
              Il sito non raccoglie dati personali degli utenti: non sono presenti moduli di contatto, 
              newsletter o aree di registrazione.
            </p>
            <p className="mt-3">
              Per qualsiasi informazione, l'utente è invitato a contattare l'attività tramite i 
              recapiti telefonici o email indicati nella home page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

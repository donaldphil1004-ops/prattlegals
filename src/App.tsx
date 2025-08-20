import React from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Scale,
  Users,
  Globe,
  FileText,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Scale className="w-8 h-8 text-amber-400" />
              <h1 className="text-2xl font-bold">PRATT LEGALS</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+39 350 939 8753</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>pratt.legals@mail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>finance@prattlegals.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-800 text-white py-3">
        <div className="container mx-auto px-6">
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-amber-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#servizi"
                className="hover:text-amber-400 transition-colors"
              >
                Servizi
              </a>
            </li>
            <li>
              <a
                href="#chi-siamo"
                className="hover:text-amber-400 transition-colors"
              >
                Chi Siamo
              </a>
            </li>
            <li>
              <a
                href="#contatti"
                className="hover:text-amber-400 transition-colors"
              >
                Contatti
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-slate-50 to-slate-100 py-20"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Studio Legale di Eccellenza
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              PRATT LEGALS è uno studio legale con sede in Italia specializzato
              in trasferimenti internazionali per studenti e professionisti.
              Offriamo assistenza legale completa per tutte le pratiche di
              immigrazione e trasferimento internazionale.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2 text-slate-700">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span className="font-medium">Ubicato in Italia</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <Globe className="w-5 h-5 text-amber-600" />
                <span className="font-medium">Servizi Internazionali</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            I Nostri Servizi
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-12 h-12 text-amber-600 mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Studenti Internazionali
              </h4>
              <p className="text-slate-600">
                Assistenza completa per visti studenteschi, permessi di
                soggiorno e pratiche universitarie.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Globe className="w-12 h-12 text-amber-600 mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Professionisti
              </h4>
              <p className="text-slate-600">
                Supporto legale per trasferimenti lavorativi, visti
                professionali e riconoscimento titoli.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <FileText className="w-12 h-12 text-amber-600 mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Documentazione
              </h4>
              <p className="text-slate-600">
                Preparazione e gestione di tutta la documentazione necessaria
                per i trasferimenti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="chi-siamo" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Chi Siamo
            </h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-semibold text-slate-900 mb-4">
                  La Nostra Esperienza
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  PRATT LEGALS è uno studio legale specializzato che opera dal
                  territorio italiano offrendo servizi di eccellenza nel campo
                  dei trasferimenti internazionali. La nostra expertise si
                  concentra sull'assistenza a studenti e professionisti che
                  desiderano trasferirsi per motivi di studio o lavoro.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Con una profonda conoscenza delle normative internazionali e
                  dei processi burocratici, garantiamo un supporto completo e
                  personalizzato per ogni cliente.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <img
                    src="pic.jpeg"
                    alt="Avv. Settimo Zito"
                    className="w-48 h-48 rounded-sm mx-auto mb-4 object-cover"
                  />
                  <h5 className="text-xl font-semibold text-slate-900 mb-2">
                    Avv. Settimo Zito
                  </h5>
                  <p className="text-amber-600 font-medium">Socio Senior</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Contatti
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-semibold text-slate-900 mb-6">
                  Informazioni di Contatto
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h5 className="font-semibold text-slate-900">Telefono</h5>
                      <p className="text-slate-600">+39 350 939 8753</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h5 className="font-semibold text-slate-900">Email</h5>
                      <p className="text-slate-600">pratt.legals@mail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h5 className="font-semibold text-slate-900">Email</h5>
                      <p className="text-slate-600">finance@prattlegals.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Address className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h5 className="font-semibold text-slate-900">
                        Indirizzo
                      </h5>
                      <p className="text-slate-600">Viale Etiopia 2D</p>
                      <p className="text-slate-600">00199 Rome</p>
                      <p className="text-slate-600">Italy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h5 className="font-semibold text-slate-900">
                        Orari di Apertura
                      </h5>
                      <p className="text-slate-600">Lunedì - Venerdì</p>
                      <p className="text-slate-600">09:00 - 17:00</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h5 className="font-semibold text-slate-900">
                        Ubicazione
                      </h5>
                      <p className="text-slate-600">Italia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">
                  Richiedi una Consulenza
                </h4>
                <p className="text-slate-600 mb-6">
                  Contattaci per una consulenza personalizzata sui tuoi progetti
                  di trasferimento internazionale.
                </p>
                <div className="space-y-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800 font-medium">
                      📞 Chiamaci al +39 350 939 8753
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 font-medium">
                      ✉️ Scrivici a pratt.legals@mail.com
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 font-medium">
                      ✉️ finance@prattlegals.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Scale className="w-6 h-6 text-amber-400" />
              <span className="text-lg font-semibold">PRATT LEGALS</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm">
                © 2025 PRATT LEGALS. Tutti i diritti riservati.
              </p>
              <p className="text-slate-400 text-sm">
                Studio Legale specializzato in trasferimenti internazionali
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

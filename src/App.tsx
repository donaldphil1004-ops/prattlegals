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
                <span>prattlegals@gmail.com</span>
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
                href="#services"
                className="hover:text-amber-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-amber-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-amber-400 transition-colors"
              >
                Contact
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
              Law Firm of Excellence
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              PRATT LEGALS is a law firm based in Italy specializing in
              international relocations for students and professionals.
              We provide complete legal assistance for all immigration
              and international relocation procedures.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2 text-slate-700">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span className="font-medium">Located in Italy</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <Globe className="w-5 h-5 text-amber-600" />
                <span className="font-medium">International Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Our Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-12 h-12 text-amber-600 mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                International Students
              </h4>
              <p className="text-slate-600">
                Full assistance for student visas, residence permits,
                and university paperwork.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Globe className="w-12 h-12 text-amber-600 mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Professionals
              </h4>
              <p className="text-slate-600">
                Legal support for work relocations, professional visas,
                and degree recognition.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <FileText className="w-12 h-12 text-amber-600 mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Documentation
              </h4>
              <p className="text-slate-600">
                Preparation and management of all necessary documentation
                for relocations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
              About Us
            </h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-semibold text-slate-900 mb-4">
                  Our Experience
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  PRATT LEGALS is a specialized law firm operating from Italy,
                  offering excellent services in the field of international
                  relocations. Our expertise focuses on assisting students
                  and professionals who wish to move abroad for study or work.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  With in-depth knowledge of international regulations and
                  bureaucratic processes, we provide complete and
                  personalized support for each client.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <img
                    src="pic.jpeg"
                    alt="Lawyer Settimo Zito"
                    className="w-48 h-48 rounded-sm mx-auto mb-4 object-cover"
                  />
                  <h5 className="text-xl font-semibold text-slate-900 mb-2">
                    Atty. Settimo Zito
                  </h5>
                  <p className="text-amber-600 font-medium">Senior Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Contact
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-semibold text-slate-900 mb-6">
                  Contact Information
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h5 className="font-semibold text-slate-900">Phone</h5>
                      <p className="text-slate-600">+39 350 939 8753</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h5 className="font-semibold text-slate-900">Email</h5>
                      <p className="text-slate-600">prattlegals@gmail.com</p>
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
                    <Clock className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <h5 className="font-semibold text-slate-900">
                        Opening Hours
                      </h5>
                      <p className="text-slate-600">Monday - Friday</p>
                      <p className="text-slate-600">09:00 - 17:00</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                       <div>
                      <h5 className="font-semibold text-slate-900">
                        Address
                      </h5>
                      <p className="text-slate-600">Viale Etiopia 2D</p>
                      <p className="text-slate-600">00199 Rome</p>
                      <p className="text-slate-600">Italy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">
                  Request a Consultation
                </h4>
                <p className="text-slate-600 mb-6">
                  Contact us for a personalized consultation about your
                  international relocation projects.
                </p>
                <div className="space-y-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800 font-medium">
                      📞 Call us at +39 350 939 8753
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 font-medium">
                      ✉️ Write to us at prattlegals@gmail.com
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
                © 2025 PRATT LEGALS. All rights reserved.
              </p>
              <p className="text-slate-400 text-sm">
                Law Firm specialized in international relocations
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

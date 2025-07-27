import { Mail, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:matteo.garbelli@univr.it" className="hover:text-blue-600 dark:hover:text-blue-400">
                  matteo.garbelli@univr.it
                </a>
              </div>
              <div className="flex items-start text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <div>
                  <p>Room 2.22, Department of Informatics</p>
                  <p>University of Verona</p>
                  <p>Strada Le Grazie 15, Verona</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Profiles
            </h3>
            <div className="space-y-2">
              <a
                href="https://scholar.google.com/citations?user=XuqRLqUAAAAJ&hl=it&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Google Scholar
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
              <a
                href="https://orcid.org/0000-0003-1642-0846"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                ORCID
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Matteo-Garbelli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                ResearchGate
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
              <a
                href="https://github.com/matteogarbelli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                GitHub
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  )
} 
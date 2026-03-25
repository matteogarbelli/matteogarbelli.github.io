'use client'

import Image from 'next/image'
import { ExternalLink, Mail, BookOpen, GraduationCap, Award, Github, Code, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column: Text and Icons */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
                Matteo Garbelli
              </h1>
              <p className="text-xl text-gray-300 mb-2 font-light">
                Postdoc Researcher in Applied Mathematics
              </p>
              <p className="text-lg text-gray-400 mb-8 font-light">
                MOX, Department of Mathematics, Politecnico di Milano
              </p>
              
              <div className="flex items-center justify-center lg:justify-start space-x-6">
                <a 
                  href="mailto:matteo.garbelli@polimi.it" 
                  className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                  title="Email"
                >
                  <Mail className="h-7 w-7" />
                  <span className="sr-only">Email</span>
                </a>
                <a 
                  href="https://scholar.google.com/citations?user=XuqRLqUAAAAJ&hl=it&oi=ao" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                  title="Google Scholar"
                >
                  <GraduationCap className="h-7 w-7" />
                  <span className="sr-only">Google Scholar</span>
                </a>
                <a 
                  href="https://www.researchgate.net/profile/Matteo-Garbelli" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                  title="ResearchGate"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z" />
                  </svg>
                  <span className="sr-only">ResearchGate</span>
                </a>
                <a 
                  href="https://github.com/matteogarbelli" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                  title="GitHub"
                >
                  <Github className="h-7 w-7" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/matteo-garbelli-1a0bb3b1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                  title="LinkedIn"
                >
                  <Linkedin className="h-7 w-7" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Column: Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative h-36 w-36 lg:h-56 lg:w-56">
                <Image
                  src="/images/profile.png"
                  alt="Matteo Garbelli"
                  fill
                  className="rounded-2xl object-cover border-4 border-white/10 shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              About
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a <a
                  href="https://mox.polimi.it/people/people-details/?id_staff=100179&nome_staff=Matteo%20Garbelli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Postdoc Researcher
                </a> in Applied Mathematics at the <a
                  href="https://mox.polimi.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  MOX Laboratory
                </a>, Department of Mathematics, Politecnico di Milano.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                Previously, I was a Postdoc Researcher at the Department of Computer Science, University of Verona, where I worked on the GIRO-WM project.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                My current research focuses on:
              </p>
              <ul className="mt-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Mean Field Games with (and without) common noise</li>
                <li>• Adapted Wasserstein Distance</li>
                <li>• BSDEs with memory features</li>
                <li>• McKean Vlasov S(P)DES</li>
                <li>• Reinforcement Learning for energy markets</li>
              </ul>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  <GraduationCap className="inline h-5 w-5 mr-2" />
                  Education
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">PhD in Mathematics</p>
                    <p className="text-gray-600 dark:text-gray-400">University of Trento, 2023</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-2 leading-relaxed">
                      <a
                        href="https://iris.unitn.it/handle/11572/398234"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        Thesis
                      </a>: <em>&ldquo;Stochastic Differential Equations and Mean Field Games towards Machine Learning applications&rdquo;</em>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  <Award className="inline h-5 w-5 mr-2" />
                  Current Grant
                </h3>
                <div className="text-sm">
                  <p className="font-medium text-gray-900 dark:text-white mb-2">Contract Researcher (art. 22)</p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-3">
                    Under FIS Starting Grant <a
                      href="https://mox.polimi.it/industrial-and-scientific-projects/project-detail/?id=198"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      SYNERGIZE
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  <Award className="inline h-5 w-5 mr-2" />
                  Past Grants
                </h3>
                <div className="text-sm">
                  <p className="font-medium text-gray-900 dark:text-white mb-2">GIRO-WM Project</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">2024-2025</p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-3">
                    &ldquo;Green Inspired Revolution for Optimal-Workforce Management&rdquo; 
                    funded by Fondazione Caritro
                  </p>
                  <a
                    href="https://www.di.univr.it/?ent=progetto&id=6130&lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-xs"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Project Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-12 sm:py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Publications
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  title: "Reinforcement Learning for Bidding Strategy Optimization in Day-Ahead Energy Market",
                  venue: "Energy Economics",
                  year: "2025",
                  url: "https://doi.org/10.1016/j.eneco.2025.108673"
                },
                
                {
                  title: "Time-Delayed Generalized BSDEs",
                  venue: "Stochastic Processes and their Applications",
                  year: "2024",
                  url: "https://doi.org/10.1016/j.spa.2023.104277"
                },
                {
                  title: "Volatility Forecasting with Hybrid Neural Networks methods for Risk Parity Investment Strategies",
                  venue: "Expert Systems with Applications",
                  year: "2023",
                  url: "https://doi.org/10.1016/j.eswa.2023.120418"
                },
                {
                  title: "From Optimal Control to Mean Field Optimal Transport via Stochastic Neural Networks",
                  venue: "Symmetry",
                  year: "2023",
                  url: "https://doi.org/10.3390/sym15091724"
                },
                {
                  title: "Feynman-Kac Formula for BSDEs with Jumps and Time Delayed Generators Associated to Path-Dependent Nonlinear Kolmogorov Equations",
                  venue: "Nonlinear Differential Equations and Applications NoDEA",
                  year: "2023",
                  url: "https://link.springer.com/article/10.1007/s00030-023-00879-3"
                },
              ].map((publication, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {publication.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {publication.venue} ({publication.year})
                  </p>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    View Publication
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Preprints
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Mild Solutions for Path-Dependent Parabolic PDEs with Neumann Boundary Conditions via Generalized BSDEs",
                    venue: "Preprint on arXiv",
                    year: "2026",
                    url: "https://arxiv.org/abs/2601.16178"
                  },
                  {
                    title: "Data-Driven Stochastic VRP: Integration of Forecast Duration into Optimization for Utility Workforce Management",
                    venue: "Preprint on arXiv",
                    year: "2026",
                    url: "https://arxiv.org/abs/2601.07514"
                  },
                  {
                    title: "The Master Equation in a Bounded Domain with Absorption",
                    venue: "Preprint on arXiv",
                    year: "2025",
                    url: "https://arxiv.org/abs/2203.15583"
                  }
                ].map((publication, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {publication.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {publication.venue} ({publication.year})
                    </p>
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      View Preprint
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                For a complete list of publications, visit my{' '}
                <a
                  href="https://scholar.google.com/citations?user=XuqRLqUAAAAJ&hl=it&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Google Scholar profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Teaching
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  title: "Numerical Methods for Mathematical Finance",
                  type: "Master Degree in Mathematics",
                  venue: "University of Verona",
                  year: "2025-2026",
                  description: "Numerical techniques for SDEs",
                  githubUrl: "https://github.com/matteogarbelli/NMMF",
                  url: "https://www.corsi.univr.it/?ent=cs&id=1352&menu=studiare&tab=insegnamenti&codiceCs=S72R&codins=4S001114&crediti=6.0&aa=2025/2026&lang=it"
                },
                {
                  title: "Numerical Methods for Mathematical Finance",
                  type: "Master Degree in Mathematics",
                  venue: "University of Verona",
                  year: "2024-2025",
                  description: "Numerical techniques for SDEs"
                },
                {
                  title: "Statistical Learning",
                  type: "Master Degree in Data Science",
                  venue: "University of Verona",
                  year: "2020-2021",
                  description: "Statistical methods and machine learning techniques for data science"
                },
                {
                  title: "Advanced Topics in Mathematical Finance",
                  type: "Master Degree in Mathematics",
                  venue: "University of Verona",
                  year: "2020-2021",
                  description: "Mathematical techniques for financial modeling and risk management"
                }
              ].map((course, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {course.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {course.type}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {course.venue} • {course.year}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {course.description}
                      </p>
                      {course.githubUrl && (
                        <a
                          href={course.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
                        >
                          <Github className="mr-1 h-4 w-4" />
                          Course Material
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Additional Information
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  <BookOpen className="inline h-5 w-5 mr-2" />
                  Peer Review Activity
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Journal of Scientific Computing</p>
                    <p className="text-gray-600 dark:text-gray-400">Springer</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Chaos</p>
                    <p className="text-gray-600 dark:text-gray-400">American Institute of Physics</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Nonlinear Dynamics</p>
                    <p className="text-gray-600 dark:text-gray-400">Springer Nature</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  <Code className="inline h-5 w-5 mr-2" />
                  ML Frameworks & Coding
                </h3>
                <div className="text-sm">
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">Programming Languages</p>
                      <p className="text-gray-600 dark:text-gray-400">Python, R, MATLAB</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">ML Frameworks</p>
                      <p className="text-gray-600 dark:text-gray-400">PyTorch, TensorFlow, Scikit-learn</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">Forecasting Algorithms</p>
                      <p className="text-gray-600 dark:text-gray-400">XGBoost, LSTM, Tree-based methods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8">
              Contact Information
            </h2>
            <div className="text-gray-600 dark:text-gray-400 space-y-2">
              <p>Room 222, Edificio 14 (Nave)</p>
              <p>Department of Mathematics</p>
              <p>Politecnico di Milano</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

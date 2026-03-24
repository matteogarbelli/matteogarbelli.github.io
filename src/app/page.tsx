'use client'

import Image from 'next/image'
import { ExternalLink, Mail, BookOpen, GraduationCap, Award, Github, Code, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative h-32 w-32 lg:h-40 lg:w-40 mb-8">
              <Image
                src="/images/profile.png"
                alt="Matteo Garbelli"
                fill
                className="rounded-full object-cover border-4 border-white/10"
                priority
              />
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
              Matteo Garbelli
            </h1>
            <p className="text-xl text-gray-300 mb-2 font-light">
              Postdoc Researcher in Applied Mathematics
            </p>
            <p className="text-lg text-gray-400 mb-8 font-light">
              MOX, Department of Mathematics, Politecnico di Milano
            </p>
            
            <div className="flex items-center space-x-6">
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
                  <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.564.377-.97.91-1.215 1.6h-2.596c-.482-1.38-1.74-2.165-3.77-2.165-2.612 0-4.503 1.636-4.503 5.347 0 3.733 1.946 5.397 4.542 5.397 1.258 0 2.254-.37 2.986-1.112v-2.03H9.982V5.7h5.81v6.78c-.97.945-2.624 1.51-4.832 1.51-4.225 0-7.07-2.75-7.07-7.21 0-4.585 2.825-7.39 7.378-7.39 2.053 0 3.655.77 4.503 2.05.356-.84.97-1.32 1.84-1.44H19.587c1.78.11 2.895 1.13 3.35 3.06h-2.22c-.225-.95-.59-1.43-1.1-1.43-.507 0-.85.49-1.03 1.48h2.36c.21.99.04 1.77-.52 2.34l-3.32 3.69 3.52 4.16h-2.68l-2.2-2.81-1.18 1.29v1.52h-2.24V8.58h2.24v3.6l4.74-5.32h2.24l-3.35 3.68 3.84 4.53h-2.65l-2.64-3.21-1.26 1.43v1.78h-2.24V8.58h2.24v3.6l4.74-5.32h2.24l-3.35 3.68 3.84 4.53h-2.65z" />
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:matteo.garbelli@univr.it"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
              <a
                href="https://scholar.google.com/citations?user=XuqRLqUAAAAJ&hl=it&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

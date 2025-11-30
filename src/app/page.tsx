'use client'

import Image from 'next/image'
import { ArrowRight, ExternalLink, Mail, BookOpen, GraduationCap, Award, Github, Code } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section - Smaller */}
      <section id="home" className="relative overflow-hidden bg-white dark:bg-gray-900 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                Matteo Garbelli
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Postdoc Researcher in Applied Mathematics at University of Verona
              </p>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                Stochastic Processes, Machine Learning, Mean Field Games
              </p>
            </div>
            <div className="relative">
              <div className="relative mx-auto h-48 w-48 lg:h-56 lg:w-56">
                <Image
                  src="/images/profile.png"
                  alt="Matteo Garbelli - Postdoc Researcher in Applied Mathematics at University of Verona"
                  fill
                  className="rounded-full object-contain"
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
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a <a
                  href="https://www.di.univr.it/?ent=persona&id=62393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Postdoc Researcher
                </a> in Applied Mathematics at the Department of Computer Science, University of Verona.
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
            
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
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
                  title: "The Master Equation in a Bounded Domain with Absorption",
                  venue: "Preprint on arXiv",
                  year: "2024",
                  url: "https://doi.org/10.48550/arXiv.2203.15583"
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

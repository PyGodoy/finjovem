'use client'

import { motion } from 'framer-motion'
import { RocketLaunchIcon, BookOpenIcon } from '@heroicons/react/24/solid'

export default function HeroSection() {
  return (
    <section className="hero bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="hero-content md:w-1/2 mb-10 md:mb-0">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="badge bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block"
          >
            Edição 2025
          </motion.span>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Domine seu futuro financeiro agora!
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 mb-8"
          >
            Aprenda a cuidar do seu dinheiro de forma interativa e divertida, construindo hábitos que vão transformar sua vida financeira para sempre.
          </motion.p>
          
           <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <a href="#educacao" className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 touch-manipulation min-h-[44px] text-sm inline-flex">
              <RocketLaunchIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="whitespace-nowrap">Começar Jornada</span>
            </a>
          </motion.div>
        </div>
        
        <div className="hero-image md:w-1/2 relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            src="/images/img1.png"
            alt="Jovens aprendendo sobre finanças"
            className="main-img w-full max-w-md mx-auto rounded-xl shadow-xl"
          />
          
          {['piggy-bank', 'chart-line', 'coins'].map((icon, index) => (
            <motion.div
              key={icon}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.8 + index * 0.2,
                type: 'spring',
                stiffness: 100
              }}
              className={`absolute bg-white p-3 rounded-full shadow-lg text-blue-500 text-xl ${index === 0 ? 'top-10 left-10' : index === 1 ? 'top-20 right-10' : 'bottom-10 left-1/4'}`}
            >
              <i className={`fas fa-${icon}`}></i>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
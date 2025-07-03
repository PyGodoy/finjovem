'use client'

import { motion } from 'framer-motion'
import { AcademicCapIcon, PuzzlePieceIcon, TrophyIcon, UsersIcon } from '@/components/Icons'

const benefits = [
  {
    icon: <AcademicCapIcon className="h-8 w-8" />,
    title: "Aprenda com Diversão",
    description: "Nossos conteúdos são criados para tornar o aprendizado financeiro divertido e envolvente."
  },
  {
    icon: <PuzzlePieceIcon className="h-8 w-8" />,
    title: "Simule Decisões",
    description: "Pratique escolhas financeiras em ambiente seguro antes de aplicá-las na vida real."
  },
  {
    icon: <TrophyIcon className="h-8 w-8" />,
    title: "Conquiste Recompensas",
    description: "Ganhe medalhas e certificados à medida que avança nos módulos de educação financeira."
  },
  {
    icon: <UsersIcon className="h-8 w-8" />,
    title: "Compartilhe Experiências",
    description: "Compare suas escolhas com outros jovens e aprenda com experiências compartilhadas."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function BenefitsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção para mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 block sm:hidden"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Por que escolher nossa plataforma?
          </h2>
          <p className="text-gray-600 px-4">
            Descubra os benefícios de aprender finanças conosco
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              {/* Container do ícone - melhor alinhamento mobile */}
              <div className="flex items-center justify-center sm:justify-start mb-3 sm:mb-4">
                <div className="text-blue-500 bg-blue-50 p-2 rounded-lg">
                  {benefit.icon}
                </div>
              </div>
              
              {/* Título - centralizado no mobile */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 text-center sm:text-left leading-tight">
                {benefit.title}
              </h3>
              
              {/* Descrição - melhor legibilidade mobile */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
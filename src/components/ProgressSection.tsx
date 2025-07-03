'use client'

import { motion } from 'framer-motion'
import { TrophyIcon } from '@heroicons/react/24/solid'
import { useProgress } from '@/contexts/ProgressContext'

export default function ProgressSection() {
  const { progress } = useProgress()
  const circumference = 2 * Math.PI * 54
  const offset = circumference - (progress.totalProgress / 100) * circumference

  const badges = [
    { id: 1, name: 'Iniciante Financeiro', earned: progress.storiesCompleted >= 1 },
    { id: 2, name: 'Poupador', earned: progress.storiesCompleted >= 2 },
    { id: 3, name: 'Investidor Iniciante', earned: progress.storiesCompleted >= 3 },
    { id: 4, name: 'Mestre do Orçamento', earned: progress.storiesCompleted >= 4 }
  ]

  return (
    <section id="progresso" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <TrophyIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mr-2" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Seu Progresso</h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Acompanhe seu desenvolvimento e conquistas na jornada financeira
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Seção do Progresso Total e Badges */}
          <div className="lg:w-1/2">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-sm">
              {/* Círculo de Progresso */}
              <div className="flex flex-col items-center mb-6 sm:mb-8">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="#e0e0e0"
                      strokeWidth="12"
                    />
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="12"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset: offset }}
                      transition={{ duration: 1 }}
                      transform="rotate(-90, 60, 60)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span 
                      className="text-xl sm:text-2xl font-bold text-gray-800"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {progress.totalProgress}%
                    </motion.span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center text-gray-800">Progresso Total</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center px-2">
                  Continue aprendendo para completar sua jornada
                </p>
              </div>

              {/* Badges */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center justify-center sm:justify-start text-gray-800">
                  <TrophyIcon className="h-5 w-5 text-blue-500 mr-2" />
                  Suas Conquistas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {badges.map((badge) => (
                    <div 
                      key={badge.id}
                      className={`p-3 sm:p-4 rounded-lg border transition-all duration-200 ${
                        badge.earned 
                          ? 'bg-blue-50 border-blue-200 shadow-sm' 
                          : 'bg-gray-100 border-gray-200 opacity-50'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full mr-3 flex-shrink-0 ${
                          badge.earned ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-400'
                        }`}>
                          <TrophyIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <span className={`font-medium text-sm sm:text-base leading-tight ${
                          badge.earned ? 'text-gray-800' : 'text-gray-500'
                        }`}>
                          {badge.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Seção de Estatísticas */}
          <div className="lg:w-1/2">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-sm h-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center sm:text-left text-gray-800 ">
                Estatísticas Detalhadas
              </h3>
              
              <div className="space-y-5 sm:space-y-6">
                {[
                  {
                    label: "Histórias Completadas",
                    value: `${progress.storiesCompleted}/${progress.totalStories}`,
                    percentage: (progress.storiesCompleted / progress.totalStories) * 100
                  },
                  {
                    label: "Quizzes Respondidos",
                    value: `${progress.quizzesCompleted}/${progress.totalQuizzes}`,
                    percentage: (progress.quizzesCompleted / progress.totalQuizzes) * 100
                  },
                  {
                    label: "Pontos Acumulados",
                    value: progress.totalPoints,
                    percentage: Math.min((progress.totalPoints / 1000) * 100, 100)
                  }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm sm:text-base text-gray-700 font-medium">
                        {stat.label}
                      </span>
                      <span className="font-bold text-sm sm:text-base text-gray-900">
                        {stat.value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                      <motion.div 
                        className="bg-blue-600 h-2 sm:h-2.5 rounded-full transition-all duration-300"
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.percentage}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      />
                    </div>
                    <div className="mt-1">
                      <span className="text-xs text-gray-500">
                        {Math.round(stat.percentage)}% completo
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Resumo de Pontos - Só aparece em mobile */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 sm:hidden">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {progress.totalPoints}
                  </div>
                  <div className="text-sm text-blue-800 font-medium">
                    Pontos Totais
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
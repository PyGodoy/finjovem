'use client'

import { useState } from 'react'
import { Modal } from '@/components/Modal'
import {
  BanknotesIcon,
  BriefcaseIcon,
  ExclamationTriangleIcon,
  ChartPieIcon,
  BookOpenIcon,
  StarIcon,
  ClockIcon,
  PlayIcon,
  ChartBarIcon
} from '@heroicons/react/24/solid'

import { mesada } from '@/simulacoes/Mesada'
import { MesadaSimulator } from '@/simulacoes/Mesada'
import { emprego } from '@/simulacoes/Emprego'
import { EmpregoSimulator } from '@/simulacoes/Emprego'
import { emergencia } from '@/simulacoes/Emergencia'
import { EmergenciaSimulator } from '@/simulacoes/Emergencia'
import { investimento } from '@/simulacoes/Investimento'
import { InvestimentoSimulator } from '@/simulacoes/Investimento'
import { Story } from '@/types/StoryTypes'

const allStories: Story[] = [mesada, emprego, emergencia, investimento]

const getIconByStoryId = (id: string) => {
  switch (id) {
    case 'mesada':
      return <BanknotesIcon className="h-10 w-10" />
    case 'emprego':
      return <BriefcaseIcon className="h-10 w-10" />
    case 'imprevisto':
      return <ExclamationTriangleIcon className="h-10 w-10" />
    case 'investimento':
      return <ChartPieIcon className="h-10 w-10" />
    default:
      return null
  }
}

// Função para obter cor de fundo baseada no ID da história
const getCardColorsByStoryId = (id: string) => {
  switch (id) {
    case 'mesada':
      return {
        icon: 'text-emerald-500',
        gradient: 'from-emerald-500 to-teal-400',
        bgHover: 'hover:bg-emerald-50',
        border: 'border-emerald-200',
        badge: 'bg-emerald-500'
      }
    case 'emprego':
      return {
        icon: 'text-blue-500',
        gradient: 'from-blue-500 to-indigo-400',
        bgHover: 'hover:bg-blue-50',
        border: 'border-blue-200',
        badge: 'bg-blue-500'
      }
    case 'imprevisto':
      return {
        icon: 'text-amber-500',
        gradient: 'from-amber-500 to-yellow-400',
        bgHover: 'hover:bg-amber-50',
        border: 'border-amber-200',
        badge: 'bg-amber-500'
      }
    case 'investimento':
      return {
        icon: 'text-purple-500',
        gradient: 'from-purple-500 to-violet-400',
        bgHover: 'hover:bg-purple-50',
        border: 'border-purple-200',
        badge: 'bg-purple-500'
      }
    default:
      return {
        icon: 'text-gray-500',
        gradient: 'from-gray-500 to-gray-400',
        bgHover: 'hover:bg-gray-50',
        border: 'border-gray-200',
        badge: 'bg-gray-500'
      }
  }
}

export default function StoriesSection() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const handleStoryClick = (story: Story) => {
    setSelectedStory(story)
    setCurrentStepIndex(0)
    setIsModalOpen(true)
  }

  const handleOptionClick = (nextStep: number) => {
    setCurrentStepIndex(nextStep - 1)
  }

  const currentStep = selectedStory?.steps[currentStepIndex]

  return (
    <section id="historias" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 sm:p-3 rounded-full">
              <BookOpenIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
            Simulações Financeiras
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Pratique suas habilidades financeiras em cenários da vida real
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allStories.map((story) => {
            const colors = getCardColorsByStoryId(story.id);
            return (
              <div
                key={story.id}
                className={`group relative overflow-hidden rounded-2xl border ${colors.border} shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${colors.bgHover} flex flex-col h-full`}
              >
                {/* Elemento decorativo de fundo */}
                <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-10 blur-xl bg-gradient-to-br ${colors.gradient}`} />

                {story.isNew && (
                  <span className={`absolute top-4 right-4 ${colors.badge} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                    NOVO
                  </span>
                )}

                <div className="p-7 relative z-10 flex flex-col h-full">
                  {/* Cabeçalho do card */}
                  <div className={`${colors.icon} mb-5 transform transition-transform duration-300 group-hover:scale-110`}>
                    {getIconByStoryId(story.id)}
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{story.title}</h3>
                    <p className="text-gray-600 mb-5 text-sm">{story.description}</p>

                    {/* Informações e métricas */}
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <span className="text-amber-500 text-sm flex">
                          {Array(story.difficulty).fill(0).map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4" />
                          ))}
                          {Array(5 - story.difficulty).fill(0).map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4 text-gray-200" />
                          ))}
                        </span>
                      </div>
                      <span className="text-gray-500 text-sm flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {story.duration} min
                      </span>
                    </div>
                  </div>

                  {/* Botão de iniciar */}
                  <button
                    onClick={() => handleStoryClick(story)}
                    className={`w-full py-3 px-4 rounded-xl font-medium text-white transition-all flex items-center justify-center bg-gradient-to-r ${colors.gradient} hover:shadow-md hover:opacity-90`}
                  >
                    <PlayIcon className="h-5 w-5 mr-2" />
                    Iniciar Simulação
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedStory && (
          <div className="p-2">
            {selectedStory.id === 'mesada' && <MesadaSimulator />}
            {selectedStory.id === 'emprego' && <EmpregoSimulator />}
            {selectedStory.id === 'investimento' && <InvestimentoSimulator />}
            {selectedStory.id === 'imprevisto' && <EmergenciaSimulator />}
          </div>
        )}
      </Modal>

    </section>
  )
}
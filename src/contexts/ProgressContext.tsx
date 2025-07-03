'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export interface ProgressData {
  storiesCompleted: number
  totalStories: number
  quizzesCompleted: number
  totalQuizzes: number
  totalPoints: number
  totalProgress: number
  completedStories: string[] // Adicionando para rastrear quais histórias foram completadas
  badges: { id: number; name: string; earned: boolean }[]
}

const defaultProgress: ProgressData = {
  storiesCompleted: 0,
  totalStories: 4,
  quizzesCompleted: 0,
  totalQuizzes: 3,
  totalPoints: 0,
  totalProgress: 0,
  completedStories: [],
  badges: [
    { id: 1, name: 'Iniciante Financeiro', earned: false },
    { id: 2, name: 'Poupador', earned: false },
    { id: 3, name: 'Investidor Iniciante', earned: false },
    { id: 4, name: 'Mestre do Orçamento', earned: false }
  ]
}

interface ProgressContextType {
  progress: ProgressData
  updateProgress: (updater: (prev: ProgressData) => ProgressData) => void
  unlockBadge: (badgeId: number) => void // Nova função para desbloquear badges
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<ProgressData>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('userProgress')
      return stored ? JSON.parse(stored) : defaultProgress
    }
    return defaultProgress
  })

  // Função para desbloquear uma badge específica
  const unlockBadge = (badgeId: number) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        badges: prev.badges.map(badge => 
          badge.id === badgeId ? { ...badge, earned: true } : badge
        )
      }
      localStorage.setItem('userProgress', JSON.stringify(updated))
      return updated
    })
  }

  const updateProgress = (updater: (prev: ProgressData) => ProgressData) => {
    setProgress(prev => {
      const updated = updater(prev)

      // Calcular progresso total
      const storyRatio = updated.storiesCompleted / updated.totalStories
      const quizRatio = updated.quizzesCompleted / updated.totalQuizzes
      const pointsRatio = Math.min(updated.totalPoints / 1000, 1)
      updated.totalProgress = Math.round(((storyRatio + quizRatio + pointsRatio) / 3) * 100)

      // Verificar e desbloquear badges baseado em histórias completadas
      if (updated.completedStories.includes('mesada') && !updated.badges[0].earned) {
        updated.badges[0].earned = true // Iniciante Financeiro
      }
      if (updated.completedStories.includes('emprego') && !updated.badges[1].earned) {
        updated.badges[1].earned = true // Poupador
      }
      if (updated.completedStories.includes('investimento') && !updated.badges[2].earned) {
        updated.badges[2].earned = true // Investidor Iniciante
      }
      if (updated.completedStories.includes('imprevisto') && !updated.badges[3].earned) {
        updated.badges[3].earned = true // Mestre do Orçamento
      }

      localStorage.setItem('userProgress', JSON.stringify(updated))
      return updated
    })
  }

  return (
    <ProgressContext.Provider value={{ progress, updateProgress, unlockBadge }}>
      {children}
    </ProgressContext.Provider>
  )
}

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (!context) throw new Error('useProgress deve ser usado dentro de ProgressProvider')
  return context
}
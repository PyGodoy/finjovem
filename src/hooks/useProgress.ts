import { useEffect, useState } from 'react'

export interface ProgressData {
  storiesCompleted: number
  totalStories: number
  quizzesCompleted: number
  totalQuizzes: number
  totalPoints: number
  totalProgress: number
  badges: { id: number; name: string; earned: boolean }[]
}

const defaultProgress: ProgressData = {
  storiesCompleted: 0,
  totalStories: 4,
  quizzesCompleted: 0,
  totalQuizzes: 3,
  totalPoints: 0,
  totalProgress: 0,
  badges: [
    { id: 1, name: 'Iniciante Financeiro', earned: false },
    { id: 2, name: 'Poupador', earned: false },
    { id: 3, name: 'Investidor Iniciante', earned: false },
    { id: 4, name: 'Mestre do Orçamento', earned: false }
  ]
}

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressData>(defaultProgress)

  useEffect(() => {
    const stored = localStorage.getItem('userProgress')
    if (stored) {
      setProgress(JSON.parse(stored))
    }
  }, [])

  const updateProgress = (
    updater: (prev: ProgressData) => ProgressData
  ) => {
    setProgress(prev => {
      const updated = updater(prev)

      const storyRatio = updated.storiesCompleted / updated.totalStories
      const quizRatio = updated.quizzesCompleted / updated.totalQuizzes
      const pointsRatio = Math.min(updated.totalPoints / 1000, 1)

      updated.totalProgress = Math.round(((storyRatio + quizRatio + pointsRatio) / 3) * 100)

      updated.badges = updated.badges.map((badge) => {
        if (badge.id === 1 && updated.storiesCompleted >= 1) return { ...badge, earned: true }
        if (badge.id === 2 && updated.totalPoints >= 500) return { ...badge, earned: true }
        if (badge.id === 3 && updated.quizzesCompleted >= 2) return { ...badge, earned: true }
        if (badge.id === 4 && updated.totalProgress >= 80) return { ...badge, earned: true }
        return badge
      })

      localStorage.setItem('userProgress', JSON.stringify(updated))
      return updated
    })
  }

  return { progress, updateProgress }
}

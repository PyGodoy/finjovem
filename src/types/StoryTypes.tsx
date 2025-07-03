// src/types/storyTypes.ts
export interface StoryOption {
  id: string
  text: string
  nextStep: number
  impact: {
    knowledge: number
    savings: number
    happiness: number
  }
  feedback: string
}

export interface StoryStep {
  id: number
  title: string
  description: string
  options: StoryOption[]
  feedback?: string
  imageSrc?: string
}

export interface Story {
  id: string
  icon: React.ReactNode | null
  title: string
  description: string
  difficulty: number
  duration: number
  isNew: boolean
  steps: StoryStep[]
}

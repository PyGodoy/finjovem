'use client'

import { useState } from 'react'
import { quizQuestions } from '@/utils/data'
import { useProgress } from '@/contexts/ProgressContext'
import {
  HelpCircle,
  Trophy,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Check,
  X
} from 'lucide-react'

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const { updateProgress } = useProgress()
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleAnswerClick = (optionIndex: number, isCorrect: boolean) => {
    setSelectedOption(optionIndex)
    setShowAnswer(true)

    if (isCorrect) {
      setScore(score + 1)
    }

    setTimeout(() => {
      setSelectedOption(null)
      setShowAnswer(false)
      const nextQuestion = currentQuestion + 1

      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestion(nextQuestion)
      } else {
        setShowScore(true)
        updateProgress(prev => ({
          ...prev,
          quizzesCompleted: Math.min(prev.quizzesCompleted + 1, prev.totalQuizzes),
          totalPoints: prev.totalPoints + score * 100 // ou ajuste como quiser
        }))
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedOption(null)
    setShowAnswer(false)
  }

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
      setSelectedOption(null)
      setShowAnswer(false)
    }
  }

  const goToNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedOption(null)
      setShowAnswer(false)
    } else {
      setShowScore(true)
    }
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100
  const scorePercentage = (score / quizQuestions.length) * 100

  const getScoreColor = () => {
    if (scorePercentage >= 80) return 'text-green-600'
    if (scorePercentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreIcon = () => {
    if (scorePercentage >= 80) return '🎉'
    if (scorePercentage >= 60) return '👏'
    return '🤔'
  }

  return (
    <section id="quiz" className="py-8 sm:py-12 lg:py-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Elementos decorativos - ocultos no mobile */}
      <div className="hidden sm:block absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-bounce delay-300"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 sm:p-3 rounded-full">
              <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
            Teste Seus Conhecimentos
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Desafie-se com nossos quizzes e veja quanto você sabe sobre finanças pessoais
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto border border-gray-100 relative overflow-hidden">
          {/* Barra de progresso no topo */}
          <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Header do Quiz - Stack vertical no mobile */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
            {/* Score Badge */}
            <div className="flex items-center justify-center sm:justify-start bg-gradient-to-r from-blue-50 to-purple-50 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl mx-auto sm:mx-0">
              <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 mr-2" />
              <span className="font-medium sm:font-semibold text-gray-700 text-sm sm:text-base">Pontuação: </span>
              <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-1">
                {score}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="flex-1 sm:max-w-md sm:mx-8">
              <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-2 font-medium">
                <span>Questão {currentQuestion + 1} de {quizQuestions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 shadow-inner">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 sm:h-3 rounded-full transition-all duration-500 ease-out shadow-lg"
                  style={{ width: `${progress}%` }}
                >
                  <div className="h-full bg-white/30 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Score Screen */}
          {showScore ? (
            <div className="text-center py-8 sm:py-12 animate-fadeIn">
              <div className="mb-6 sm:mb-8">
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">{getScoreIcon()}</div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-800 px-4">Quiz Concluído!</h3>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 max-w-sm sm:max-w-md mx-auto">
                  <p className="text-base sm:text-lg mb-2 text-gray-600">Sua pontuação final:</p>
                  <div className="flex items-center justify-center flex-wrap">
                    <span className={`text-3xl sm:text-4xl font-bold ${getScoreColor()}`}>{score}/{quizQuestions.length}</span>
                    <span className="ml-2 sm:ml-3 text-xl sm:text-2xl text-gray-400">({Math.round(scorePercentage)}%)</span>
                  </div>
                </div>
                <div className="space-y-2 text-gray-600 px-4">
                  <p className="text-base sm:text-lg">
                    {scorePercentage >= 80 && "Excelente! Você domina o assunto! 🌟"}
                    {scorePercentage >= 60 && scorePercentage < 80 && "Muito bem! Continue estudando! 📚"}
                    {scorePercentage < 60 && "Que tal revisar alguns conceitos? 💪"}
                  </p>
                </div>
              </div>
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 inline mr-2" />
                Refazer Quiz
              </button>
            </div>
          ) : (
            /* Question Screen */
            <div className="animate-fadeIn">
              <div className="mb-6 sm:mb-10">
                {/* Question */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 sm:mb-8 text-gray-800 leading-relaxed px-2 sm:px-0">
                  {quizQuestions[currentQuestion].question}
                </h3>
                
                {/* Options */}
                <div className="space-y-3 sm:space-y-4">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index, option.isCorrect)}
                      disabled={showAnswer}
                      className={`
                        w-full text-left p-4 sm:p-5 rounded-lg sm:rounded-xl border-2 transition-all duration-300 transform active:scale-95 sm:hover:scale-102 group
                        ${showAnswer
                          ? selectedOption === index
                            ? option.isCorrect
                              ? 'bg-green-50 border-green-400 shadow-green-100'
                              : 'bg-red-50 border-red-400 shadow-red-100'
                            : option.isCorrect
                              ? 'bg-green-50 border-green-400 shadow-green-100'
                              : 'bg-gray-50 border-gray-200'
                          : 'active:bg-blue-50 sm:hover:bg-blue-50 active:border-blue-300 sm:hover:border-blue-300 border-gray-200 shadow-md active:shadow-lg sm:hover:shadow-lg'
                        }
                        ${!showAnswer && 'cursor-pointer'}
                      `}
                    >
                      <div className="flex items-start sm:items-center justify-between">
                        <span className={`text-sm sm:text-base lg:text-lg leading-relaxed ${showAnswer && selectedOption === index && !option.isCorrect ? 'text-red-700' : showAnswer && option.isCorrect ? 'text-green-700' : 'text-gray-700'}`}>
                          {option.text}
                        </span>
                        {showAnswer && (
                          <div className="ml-3 sm:ml-4 flex-shrink-0">
                            {option.isCorrect ? (
                              <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                            ) : selectedOption === index ? (
                              <X className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                            ) : null}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center pt-4 sm:pt-6 border-t border-gray-100 space-y-4 sm:space-y-0">
                {/* Previous Button */}
                <button
                  onClick={goToPrevious}
                  disabled={currentQuestion === 0}
                  className="flex items-center justify-center sm:justify-start px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl border-2 border-gray-300 text-gray-600 active:bg-gray-50 sm:hover:bg-gray-50 active:border-gray-400 sm:hover:border-gray-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md active:shadow-lg sm:hover:shadow-lg text-sm sm:text-base font-medium order-2 sm:order-1"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>Anterior</span>
                </button>

                {/* Question Counter - Hidden on mobile, shown in header */}
                <div className="hidden sm:block text-center order-2">
                  <div className="text-sm text-gray-500 font-medium">
                    {currentQuestion + 1} de {quizQuestions.length}
                  </div>
                </div>

                {/* Next Button */}
                <button
                  onClick={goToNext}
                  disabled={showAnswer}
                  className="flex items-center justify-center sm:justify-start px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300 transform active:scale-95 sm:hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-md active:shadow-lg sm:hover:shadow-lg text-sm sm:text-base order-1 sm:order-3"
                >
                  <span>{currentQuestion === quizQuestions.length - 1 ? 'Ver Resultado' : 'Próxima'}</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }

        /* Touch-specific styles for mobile */
        @media (max-width: 640px) {
          button:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </section>
  )
}
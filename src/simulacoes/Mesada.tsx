'use client'

import { useState, useEffect } from 'react'
import { Story } from '@/types/StoryTypes'
import { useProgress } from '@/contexts/ProgressContext'
import { 
  CurrencyDollarIcon, 
  ArrowPathIcon, 
  CheckCircleIcon,
  ChevronRightIcon,
  ClockIcon,
  StarIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  FaceSmileIcon
} from '@heroicons/react/24/solid'

// Função auxiliar para calcular pontuação total baseada nos impactos
const calculateTotalScore = (story: Story, chosenOptions: string[]) => {
  let totalKnowledge = 0;
  let totalSavings = 0;
  let totalHappiness = 0;
  
  // Percorre todas as etapas para encontrar as opções escolhidas
  story.steps.forEach(step => {
    step.options.forEach(option => {
      if (chosenOptions.includes(option.id)) {
        totalKnowledge += option.impact?.knowledge || 0;
        totalSavings += option.impact?.savings || 0;
        totalHappiness += option.impact?.happiness || 0;
      }
    });
  });
  
  return {
    knowledge: totalKnowledge,
    savings: totalSavings,
    happiness: totalHappiness,
    total: totalKnowledge + totalSavings + totalHappiness
  };
};

export const mesada: Story = {
  id: 'mesada',
  icon: null,
  title: 'Primeira Mesada',
  description: 'Como você administraria seu primeiro dinheiro? Descubra o impacto das suas escolhas.',
  difficulty: 1,
  duration: 5,
  isNew: false,
  steps: [
    {
      id: 1,
      title: 'Chegou o grande dia!',
      description: 'Seus pais decidiram te dar uma mesada mensal de R$50,00 para você aprender a administrar seu próprio dinheiro. O que você faz com seu primeiro pagamento?',
      imageSrc: '/images/mesada.png',
      options: [
        {
          id: 'gastar-tudo',
          text: 'Gastar tudo em jogos e doces',
          nextStep: 2,
          impact: { knowledge: 1, savings: -2, happiness: 3 },
          feedback: 'Você se divertiu bastante, mas agora está sem dinheiro para o resto do mês.'
        },
        {
          id: 'guardar-parte',
          text: 'Guardar parte e gastar o restante',
          nextStep: 3,
          impact: { knowledge: 2, savings: 1, happiness: 2 },
          feedback: 'Boa escolha! Você equilibrou diversão atual com planejamento futuro.'
        },
        {
          id: 'guardar-tudo',
          text: 'Guardar tudo para um objetivo futuro',
          nextStep: 4,
          impact: { knowledge: 3, savings: 3, happiness: 0 },
          feedback: 'Muita disciplina! Mas será que não está sacrificando demais sua satisfação imediata?'
        }
      ]
    },
    {
      id: 2,
      title: 'Segunda semana do mês',
      description: 'Você gastou toda sua mesada na primeira semana. Agora seus amigos te convidam para ir ao cinema no próximo final de semana. O que você faz?',
      imageSrc: '/images/mesada.png',
      options: [
        {
          id: 'pedir-dinheiro',
          text: 'Pedir mais dinheiro para seus pais',
          nextStep: 5,
          impact: { knowledge: 0, savings: 0, happiness: 1 },
          feedback: 'Seus pais concordaram desta vez, mas disseram que você precisa aprender a planejar melhor seus gastos.'
        },
        {
          id: 'ficar-casa',
          text: 'Ficar em casa e perder o passeio',
          nextStep: 5,
          impact: { knowledge: 2, savings: 0, happiness: -1 },
          feedback: 'Foi difícil, mas você aprendeu uma lição valiosa sobre o impacto de gastar tudo de uma vez.'
        },
        {
          id: 'oferecer-ajuda',
          text: 'Oferecer ajudar nas tarefas de casa para ganhar um extra',
          nextStep: 5,
          impact: { knowledge: 3, savings: 1, happiness: 1 },
          feedback: 'Iniciativa excelente! Você está aprendendo que trabalho extra pode gerar renda adicional.'
        }
      ]
    },
    {
      id: 3,
      title: 'Objetivo de curto prazo',
      description: 'Com R$25 guardados e R$25 gastos, você percebe que um jogo que você queria custa R$80. O que você faz?',
      imageSrc: '/images/mesada.png',
      options: [
        {
          id: 'esperar-proxima',
          text: 'Esperar a próxima mesada e complementar com o que já tem guardado',
          nextStep: 5,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'Excelente planejamento! Você está aprendendo a poupar para objetivos específicos.'
        },
        {
          id: 'gastar-tudo-agora',
          text: 'Gastar os R$25 guardados em outras coisas agora',
          nextStep: 5,
          impact: { knowledge: 1, savings: -1, happiness: 1 },
          feedback: 'Você obteve satisfação imediata, mas adiou seu objetivo maior.'
        },
        {
          id: 'pedir-adiantamento',
          text: 'Pedir um adiantamento da próxima mesada',
          nextStep: 5,
          impact: { knowledge: 2, savings: 0, happiness: 1 },
          feedback: 'Você conseguiu o jogo, mas agora terá que passar um mês inteiro sem mesada.'
        }
      ]
    },
    {
      id: 4,
      title: 'Tentação inesperada',
      description: 'Já se passaram duas semanas e você guardou todo o dinheiro. Na volta da escola, você passa por uma loja com um desconto incrível em algo que você sempre quis. O que você faz?',
      imageSrc: '/images/mesada.png',
      options: [
        {
          id: 'manter-foco',
          text: 'Manter o foco no seu objetivo original',
          nextStep: 5,
          impact: { knowledge: 3, savings: 3, happiness: 1 },
          feedback: 'Impressionante disciplina! Você está desenvolvendo um excelente autocontrole financeiro.'
        },
        {
          id: 'comprar-desconto',
          text: 'Aproveitar o desconto e comprar',
          nextStep: 5,
          impact: { knowledge: 2, savings: 0, happiness: 3 },
          feedback: 'Você aproveitou uma boa oportunidade, mas precisará recomeçar sua poupança.'
        },
        {
          id: 'avaliar-prioridades',
          text: 'Avaliar se isso é mais importante que seu objetivo original',
          nextStep: 5,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'Excelente! Você está aprendendo a reavaliar prioridades antes de gastar.'
        }
      ]
    },
    {
      id: 5,
      title: 'Fim do mês',
      description: 'O mês acabou e você está prestes a receber sua nova mesada. Olhando para trás, o que você aprendeu com esta experiência?',
      imageSrc: '/images/mesada.png',
      options: [
        {
          id: 'planejar-melhor',
          text: 'Vou planejar melhor meus gastos neste novo mês',
          nextStep: 6,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'Excelente conclusão! Planejar é a base para uma vida financeira saudável.'
        },
        {
          id: 'poupar-metade',
          text: 'Vou poupar pelo menos metade da mesada todo mês',
          nextStep: 6,
          impact: { knowledge: 3, savings: 3, happiness: 1 },
          feedback: 'Criar o hábito de poupar é fundamental para construir sua segurança financeira.'
        },
        {
          id: 'equilibrar-gastos',
          text: 'Vou equilibrar melhor gastos e poupança',
          nextStep: 6,
          impact: { knowledge: 3, savings: 2, happiness: 3 },
          feedback: 'Encontrar o equilíbrio é uma das lições mais valiosas em educação financeira!'
        }
      ]
    },
    {
      id: 6,
      title: 'Conclusão da Jornada',
      imageSrc: '/images/mesada.png',
      description: 'Sua primeira experiência com mesada chegou ao fim! Confira seu desempenho:',
      feedback: 'Parabéns! Você aprendeu lições valiosas sobre como administrar sua mesada. Com o tempo, essas pequenas decisões vão formar a base da sua educação financeira.',
      options: []
    }
  ]
}

// Componente para visualizar a simulação da mesada
export function MesadaSimulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [chosenOptions, setChosenOptions] = useState<string[]>([]);
  const [score, setScore] = useState({ knowledge: 0, savings: 0, happiness: 0, total: 0 });
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastOptionChosen, setLastOptionChosen] = useState<any>(null);
  const { updateProgress } = useProgress()

  const step = mesada.steps[currentStep];
  
  useEffect(() => {
    // Atualiza a pontuação sempre que uma nova opção é escolhida
    setScore(calculateTotalScore(mesada, chosenOptions));
  }, [chosenOptions]);

  useEffect(() => {
  if (currentStep === mesada.steps.length - 1) {
    updateProgress(prev => {
      // Verifica se esta história já foi completada antes
      const alreadyCompleted = prev.completedStories.includes(mesada.id)
      
      return {
        ...prev,
        storiesCompleted: alreadyCompleted ? prev.storiesCompleted : prev.storiesCompleted + 1,
        totalPoints: prev.totalPoints + score.total,
        completedStories: alreadyCompleted ? prev.completedStories : [...prev.completedStories, mesada.id]
      }
    })
  }
}, [currentStep])

  const handleOptionClick = (option: any) => {
    setChosenOptions([...chosenOptions, option.id]);
    setLastOptionChosen(option);
    setShowFeedback(true);
    
    // Timer para avançar para próxima etapa após mostrar feedback
    setTimeout(() => {
      setShowFeedback(false);
      setCurrentStep(option.nextStep - 1);
    }, 5000);
  };

  const resetSimulation = () => {
    setCurrentStep(0);
    setChosenOptions([]);
    setScore({ knowledge: 0, savings: 0, happiness: 0, total: 0 });
    setShowFeedback(false);
  };

  // Função para exibir as estrelas de dificuldade
  const renderDifficultyStars = (difficulty: number) => {
    return (
      <div className="flex items-center">
        {Array(difficulty).fill(0).map((_, i) => (
          <StarIcon key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
        ))}
        {Array(5 - difficulty).fill(0).map((_, i) => (
          <StarIcon key={i + difficulty} className="h-3 w-3 sm:h-4 sm:w-4 text-gray-200" />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
      {/* Cabeçalho da simulação */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-400 px-4 sm:px-6 py-3 sm:py-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center min-w-0 flex-1">
            <CurrencyDollarIcon className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <h2 className="font-bold text-lg sm:text-xl truncate">{mesada.title}</h2>
              <div className="flex items-center mt-1 text-green-100 text-xs sm:text-sm">
                <ClockIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                <span>{mesada.duration} min</span>
                <span className="mx-1 sm:mx-2">•</span>
                {renderDifficultyStars(mesada.difficulty)}
              </div>
            </div>
          </div>
          <button 
            onClick={resetSimulation}
            className="rounded-full p-2 bg-white/20 hover:bg-white/30 transition-colors flex-shrink-0 ml-2"
            title="Reiniciar simulação"
          >
            <ArrowPathIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
      
      {/* Progresso da simulação */}
      <div className="bg-green-50 px-4 sm:px-6 py-2 border-b border-green-100">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
          <div className="text-xs sm:text-sm text-green-700">
            Progresso: Etapa {currentStep + 1} de {mesada.steps.length}
          </div>
          <div className="w-full sm:w-2/3 bg-green-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-500" 
              style={{ width: `${((currentStep + 1) / mesada.steps.length) * 100}%` }} 
            />
          </div>
        </div>
      </div>
      
      {/* Conteúdo da etapa atual */}
      <div className="p-4 sm:p-6">
        {/* Imagem ilustrativa */}
        <div className="relative rounded-xl overflow-hidden mb-4 sm:mb-6 shadow-md">
          <img 
            src={step.imageSrc} 
            alt={step.title} 
            className="w-full h-32 sm:h-48 object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <h3 className="text-white font-bold text-lg sm:text-xl p-3 sm:p-4">{step.title}</h3>
          </div>
        </div>
        
        {/* Descrição da etapa */}
        <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{step.description}</p>
        
        {/* Feedback para a última escolha */}
        {showFeedback && lastOptionChosen && (
          <div className="bg-green-50 border-l-4 border-green-500 p-3 sm:p-4 rounded-r-lg mb-4 sm:mb-6 animate-fadeIn">
            <div className="flex">
              <LightBulbIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-green-800 text-sm sm:text-base">Feedback:</p>
                <p className="text-green-700 text-sm sm:text-base leading-relaxed mt-1">{lastOptionChosen.feedback}</p>
                <div className="mt-3 flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                  <span className="flex items-center text-green-600 bg-green-100 px-2 py-1 rounded-md">
                    <ArrowTrendingUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Conhecimento: {lastOptionChosen.impact.knowledge > 0 ? '+' : ''}{lastOptionChosen.impact.knowledge}
                  </span>
                  <span className={`flex items-center px-2 py-1 rounded-md ${lastOptionChosen.impact.savings >= 0 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'}`}>
                    <ArrowTrendingUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Economia: {lastOptionChosen.impact.savings > 0 ? '+' : ''}{lastOptionChosen.impact.savings}
                  </span>
                  <span className={`flex items-center px-2 py-1 rounded-md ${lastOptionChosen.impact.happiness >= 0 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'}`}>
                    <FaceSmileIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Felicidade: {lastOptionChosen.impact.happiness > 0 ? '+' : ''}{lastOptionChosen.impact.happiness}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Opções ou conclusão */}
        {step.options.length > 0 ? (
          <div className="space-y-3">
            {step.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option)}
                className="w-full flex items-center justify-between bg-white border border-gray-200 hover:border-green-300 hover:bg-green-50 rounded-xl p-3 sm:p-4 transition-all shadow-sm hover:shadow text-left group"
              >
                <span className="text-gray-800 group-hover:text-green-700 text-sm sm:text-base leading-relaxed pr-2 min-w-0 flex-1">{option.text}</span>
                <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-green-500 flex-shrink-0" />
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 sm:p-6 rounded-xl border border-green-200">
            <div className="flex flex-col sm:flex-row sm:items-start">
              <CheckCircleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mb-3 sm:mb-0 sm:mr-3 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-green-800 text-lg sm:text-lg mb-2">Conclusão da Simulação</h4>
                <p className="text-green-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{step.feedback}</p>
                
                {/* Resumo de pontuação */}
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <h5 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Seu desempenho:</h5>
                  <div className="flex flex-col sm:grid sm:grid-cols-1 gap-2 sm:gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-blue-600 font-bold text-xl sm:text-xl">{score.knowledge}</div>
                      <div className="text-blue-500 text-xs sm:text-sm">Conhecimento</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-green-600 font-bold text-xl sm:text-xl">{score.savings}</div>
                      <div className="text-green-500 text-xs sm:text-sm">Economia</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-purple-600 font-bold text-xl sm:text-xl">{score.happiness}</div>
                      <div className="text-purple-500 text-xs sm:text-sm">Felicidade</div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-gray-500 text-xs sm:text-sm mb-1">Pontuação total</div>
                    <div className="text-green-600 font-bold text-xl sm:text-2xl">{score.total}</div>
                  </div>
                </div>
                
                <button
                  onClick={resetSimulation}
                  className="mt-4 sm:mt-6 w-full py-3 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-500 transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  <ArrowPathIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Tentar Novamente
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Rodapé com pontuação atual */}
      {step.options.length > 0 && (
        <div className="bg-gray-50 border-t border-gray-100 px-4 sm:px-6 py-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
            <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              <span className="font-medium">Pontuação atual:</span> {score.total}
            </div>
            <div className="flex justify-center sm:justify-end space-x-3 sm:space-x-4">
              <span className="flex items-center text-blue-600 text-xs sm:text-sm">
                <ArrowTrendingUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                {score.knowledge}
              </span>
              <span className="flex items-center text-green-600 text-xs sm:text-sm">
                <ArrowTrendingUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                {score.savings}
              </span>
              <span className="flex items-center text-purple-600 text-xs sm:text-sm">
                <FaceSmileIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                {score.happiness}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
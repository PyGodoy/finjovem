'use client'

import { useState, useEffect } from 'react'
import { Story } from '@/types/StoryTypes'
import { useProgress } from '@/contexts/ProgressContext'
import { 
  ExclamationTriangleIcon, 
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

export const investimento: Story = {
  id: 'investimento',
  icon: null,
  title: 'Primeiros Investimentos',
  description: 'Explore diferentes tipos de investimentos e seus riscos e retornos potenciais.',
  difficulty: 3,
  duration: 10,
  isNew: true,
  steps: [
    {
      id: 1,
      title: 'Começando a investir',
      description: 'Você economizou R$500,00 e quer começar a investir. Qual estratégia você escolhe?',
      imageSrc: '/images/invest.png',
      options: [
        {
          id: 'alto-risco',
          text: 'Investir tudo em ações de alto risco',
          nextStep: 2,
          impact: { knowledge: 2, savings: -1, happiness: 1 },
          feedback: 'Uma abordagem arriscada que pode trazer grandes ganhos ou perdas significativas para iniciantes.'
        },
        {
          id: 'diversificar',
          text: 'Dividir entre Tesouro Direto e CDB',
          nextStep: 3,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'Excelente! Diversificar entre investimentos seguros é uma estratégia inteligente para iniciantes.'
        },
        {
          id: 'poupanca',
          text: 'Deixar na poupança por enquanto',
          nextStep: 4,
          impact: { knowledge: 1, savings: 1, happiness: 1 },
          feedback: 'Uma opção conservadora que preserva o capital, mas normalmente oferece rendimentos abaixo da inflação.'
        }
      ]
    },
    {
      id: 2,
      title: 'Lidando com a volatilidade',
      description: 'Um mês depois, você nota que suas ações caíram 15%. O que você faz?',
      imageSrc: '/images/invest.png',
      options: [
        {
          id: 'vender-tudo',
          text: 'Vender tudo para evitar mais perdas',
          nextStep: 5,
          impact: { knowledge: 1, savings: -1, happiness: 0 },
          feedback: 'Você realizou o prejuízo. Investimentos em ações geralmente precisam de horizonte de tempo mais longo.'
        },
        {
          id: 'manter-posicao',
          text: 'Manter a posição e aguardar recuperação',
          nextStep: 5,
          impact: { knowledge: 3, savings: 1, happiness: 1 },
          feedback: 'Boa escolha! Entender e tolerar a volatilidade é fundamental para investir em renda variável.'
        },
        {
          id: 'comprar-mais',
          text: 'Aproveitar a queda para comprar mais ações',
          nextStep: 5,
          impact: { knowledge: 3, savings: 0, happiness: 2 },
          feedback: '"Comprar na baixa" pode ser uma boa estratégia, desde que baseada em análise e não em impulso.'
        }
      ]
    },
    {
      id: 3,
      title: 'Acompanhando os investimentos',
      description: 'Três meses se passaram e seus investimentos em renda fixa estão rendendo conforme o esperado. O que você faz agora?',
      imageSrc: '/images/invest.png',
      options: [
        {
          id: 'continuar-aportes',
          text: 'Continuar fazendo aportes mensais nos mesmos investimentos',
          nextStep: 6,
          impact: { knowledge: 2, savings: 3, happiness: 2 },
          feedback: 'A consistência nos aportes é um dos segredos para construir patrimônio a longo prazo!'
        },
        {
          id: 'diversificar-mais',
          text: 'Diversificar um pouco para renda variável',
          nextStep: 6,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'Excelente! À medida que ganha conhecimento, diversificar entre classes de ativos é uma boa estratégia.'
        },
        {
          id: 'estudar-mais',
          text: 'Dedicar tempo para estudar mais sobre investimentos',
          nextStep: 6,
          impact: { knowledge: 3, savings: 2, happiness: 1 },
          feedback: 'O conhecimento é seu melhor investimento! Quanto mais você entende, melhores decisões toma.'
        }
      ]
    },
    {
      id: 4,
      title: 'Percebendo as limitações',
      description: 'Seis meses se passaram e você percebe que seu dinheiro na poupança mal compensou a inflação do período. O que você faz?',
      imageSrc: '/images/invest.png',
      options: [
        {
          id: 'manter-poupanca',
          text: 'Continuar na poupança pela segurança',
          nextStep: 7,
          impact: { knowledge: 1, savings: 0, happiness: 1 },
          feedback: 'A segurança é importante, mas a longo prazo a poupança pode não proteger seu poder de compra.'
        },
        {
          id: 'explorar-opcoes',
          text: 'Pesquisar outras opções de investimento',
          nextStep: 7,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'Excelente! Estar aberto a conhecer novas possibilidades é fundamental para evoluir como investidor.'
        },
        {
          id: 'consultar-especialista',
          text: 'Buscar orientação de um especialista em investimentos',
          nextStep: 7,
          impact: { knowledge: 3, savings: 1, happiness: 2 },
          feedback: 'Uma decisão sábia! Profissionais podem ajudar a criar uma estratégia adequada ao seu perfil.'
        }
      ]
    },
    {
      id: 5,
      title: 'Avaliando resultados',
      description: 'Um ano se passou desde sua decisão de investir em ações. O mercado se recuperou e você está com um ganho de 10%. Qual sua próxima ação?',
      imageSrc: '/images/invest.png',
      options: [
        {
          id: 'realizar-lucro',
          text: 'Vender tudo e realizar o lucro',
          nextStep: 8,
          impact: { knowledge: 1, savings: 2, happiness: 2 },
          feedback: 'Você garantiu um bom retorno, mas pode estar interrompendo um ciclo de crescimento a longo prazo.'
        },
        {
          id: 'manter-longo-prazo',
          text: 'Manter a estratégia de longo prazo',
          nextStep: 8,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'Excelente visão de longo prazo! Os melhores resultados geralmente vêm com tempo e paciência.'
        },
        {
          id: 'balancear-carteira',
          text: 'Rebalancear a carteira, diversificando mais',
          nextStep: 8,
          impact: { knowledge: 3, savings: 3, happiness: 2 },
          feedback: 'Uma estratégia sofisticada que demonstra maturidade como investidor!'
        }
      ]
    },
    {
      id: 6,
      title: 'Expandindo horizontes',
      description: 'Seus investimentos em renda fixa continuam performando bem. Agora você tem R$2.000 investidos. Qual o próximo passo?',
      imageSrc: '/images/invest.png',
      options: [
        {
          id: 'objetivos-claros',
          text: 'Definir objetivos financeiros claros para seus investimentos',
          nextStep: 8,
          impact: { knowledge: 3, savings: 2, happiness: 3 },
          feedback: 'Fundamental! Investimentos fazem mais sentido quando alinhados a objetivos claros de vida.'
        },
        {
          id: 'investimentos-alternativos',
          text: 'Explorar investimentos alternativos como fundos imobiliários',
          nextStep: 8,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'Uma evolução natural para diversificar ainda mais sua carteira!'
        },
        {
          id: 'automatizar-investimentos',
          text: 'Configurar investimentos automáticos mensais',
          nextStep: 8,
          impact: { knowledge: 2, savings: 3, happiness: 2 },
          feedback: 'Excelente! Automatizar torna o processo mais consistente e menos suscetível a emoções.'
        }
      ]
    },
    {
      id: 7,
      title: 'Saindo da zona de conforto',
      description: 'Depois de avaliar as limitações da poupança, qual estratégia você escolhe agora?',
      imageSrc: '/images/invest.png',
      options: [
        {
          id: 'renda-fixa',
          text: 'Migrar gradualmente para produtos de renda fixa mais rentáveis',
          nextStep: 8,
          impact: { knowledge: 2, savings: 2, happiness: 2 },
          feedback: 'Uma excelente transição! Você mantém a segurança enquanto melhora seu rendimento.'
        },
        {
          id: 'educacao-financeira',
          text: 'Investir em educação financeira antes de mudar os investimentos',
          nextStep: 8,
          impact: { knowledge: 3, savings: 1, happiness: 2 },
          feedback: 'Sabedoria pura! Conhecimento é o melhor investimento que você pode fazer.'
        },
        {
          id: 'diversificacao-gradual',
          text: 'Criar uma estratégia de diversificação gradual para os próximos meses',
          nextStep: 8,
          impact: { knowledge: 3, savings: 3, happiness: 2 },
          feedback: 'Planejamento excelente! Diversificação gradual reduz riscos e ansiedade.'
        }
      ]
    },
    {
      id: 8,
      title: 'Um investidor mais maduro',
      description: 'Após 18 meses de experiência com investimentos, qual a lição mais valiosa que você aprendeu?',
      imageSrc: '/images/invest.png',
      options: [
        {
          id: 'tempo-aliado',
          text: 'O tempo é o maior aliado do investidor',
          nextStep: 9,
          impact: { knowledge: 3, savings: 2, happiness: 3 },
          feedback: 'Uma das verdades mais profundas do mundo dos investimentos! O tempo potencializa resultados.'
        },
        {
          id: 'conhecer-perfil',
          text: 'Conhecer seu perfil de investidor é fundamental',
          nextStep: 9,
          impact: { knowledge: 3, savings: 2, happiness: 3 },
          feedback: 'Absolutamente! Investir de acordo com seu perfil de risco traz tranquilidade e consistência.'
        },
        {
          id: 'estrategia-disciplina',
          text: 'Estratégia e disciplina vencem emoções',
          nextStep: 9,
          impact: { knowledge: 3, savings: 3, happiness: 2 },
          feedback: 'Uma lição poderosa! O controle emocional é frequentemente o diferencial entre sucesso e fracasso.'
        }
      ]
    },
    {
      id: 9,
      title: 'Conclusão da Jornada',
      imageSrc: '/images/invest.png',
      description: 'Sua jornada nos primeiros investimentos chegou ao fim! Confira seu desempenho:',
      feedback: 'Parabéns! Você deu os primeiros passos no mundo dos investimentos e aprendeu que, mais importante que retornos rápidos, é construir uma base sólida de conhecimento e disciplina para decisões financeiras inteligentes a longo prazo.',
      options: []
    }
  ]
}

// Componente para visualizar a simulação
export function InvestimentoSimulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [chosenOptions, setChosenOptions] = useState<string[]>([]);
  const [score, setScore] = useState({ knowledge: 0, savings: 0, happiness: 0, total: 0 });
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastOptionChosen, setLastOptionChosen] = useState<any>(null);
  const { updateProgress } = useProgress()

  const step = investimento.steps[currentStep];
  
  useEffect(() => {
    // Atualiza a pontuação sempre que uma nova opção é escolhida
    setScore(calculateTotalScore(investimento, chosenOptions));
  }, [chosenOptions]);

  useEffect(() => {
  if (currentStep === investimento.steps.length - 1) {
    updateProgress(prev => ({
      ...prev,
      storiesCompleted: Math.min(prev.storiesCompleted + 1, prev.totalStories),
      totalPoints: prev.totalPoints + score.total
    }))
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
          <StarIcon key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-purple-300" />
        ))}
        {Array(5 - difficulty).fill(0).map((_, i) => (
          <StarIcon key={i + difficulty} className="h-3 w-3 sm:h-4 sm:w-4 text-gray-200" />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mx-auto max-w-4xl">
      {/* Cabeçalho da simulação */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-4 sm:px-6 py-3 sm:py-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center min-w-0 flex-1">
            <ExclamationTriangleIcon className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <h2 className="font-bold text-lg sm:text-xl truncate">{investimento.title}</h2>
              <div className="flex flex-col xs:flex-row xs:items-center mt-1 text-purple-100 text-xs sm:text-sm">
                <div className="flex items-center">
                  <ClockIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span>{investimento.duration} min</span>
                </div>
                <span className="hidden xs:inline mx-2">•</span>
                <div className="mt-1 xs:mt-0">
                  {renderDifficultyStars(investimento.difficulty)}
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={resetSimulation}
            className="rounded-full p-2 bg-white/20 hover:bg-white/30 transition-colors ml-2 flex-shrink-0"
            title="Reiniciar simulação"
          >
            <ArrowPathIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
      
      {/* Progresso da simulação */}
      <div className="bg-purple-50 px-4 sm:px-6 py-2 border-b border-purple-100">
        <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2">
          <div className="text-xs sm:text-sm text-purple-700 font-medium">
            Progresso: Etapa {currentStep + 1} de {investimento.steps.length}
          </div>
          <div className="w-full xs:w-2/3 bg-purple-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-500" 
              style={{ width: `${((currentStep + 1) / investimento.steps.length) * 100}%` }} 
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
            <h3 className="text-white font-bold text-lg sm:text-xl p-3 sm:p-4 leading-tight">{step.title}</h3>
          </div>
        </div>
        
        {/* Descrição da etapa */}
        <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{step.description}</p>
        
        {/* Feedback para a última escolha */}
        {showFeedback && lastOptionChosen && (
          <div className="bg-purple-50 border-l-4 border-purple-500 p-3 sm:p-4 rounded-r-lg mb-4 sm:mb-6 animate-fadeIn">
            <div className="flex">
              <LightBulbIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-purple-800 text-sm sm:text-base">Feedback:</p>
                <p className="text-purple-700 text-sm sm:text-base leading-relaxed mt-1">{lastOptionChosen.feedback}</p>
                <div className="mt-3 flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                  <span className="flex items-center text-purple-600 bg-purple-100 px-2 py-1 rounded-md">
                    <ArrowTrendingUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Conhecimento: {lastOptionChosen.impact.knowledge > 0 ? '+' : ''}{lastOptionChosen.impact.knowledge}
                  </span>
                  <span className={`flex items-center px-2 py-1 rounded-md ${lastOptionChosen.impact.savings >= 0 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'}`}>
                    <ArrowTrendingUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Economia: {lastOptionChosen.impact.savings > 0 ? '+' : ''}{lastOptionChosen.impact.savings}
                  </span>
                  <span className={`flex items-center px-2 py-1 rounded-md ${lastOptionChosen.impact.happiness >= 0 ? 'text-purple-600 bg-purple-100' : 'text-red-600 bg-red-100'}`}>
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
                className="w-full flex items-center justify-between bg-white border border-gray-200 hover:border-purple-300 hover:bg-purple-50 rounded-xl p-3 sm:p-4 transition-all shadow-sm hover:shadow text-left group active:scale-98"
              >
                <span className="text-gray-800 group-hover:text-purple-700 text-sm sm:text-base leading-relaxed pr-2">{option.text}</span>
                <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-purple-500 flex-shrink-0" />
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 sm:p-6 rounded-xl border border-purple-200">
            <div className="flex flex-col sm:flex-row sm:items-start">
              <CheckCircleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500 mb-2 sm:mb-0 sm:mr-3 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-bold text-purple-800 text-lg sm:text-xl mb-2">Conclusão da Simulação</h4>
                <p className="text-purple-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{step.feedback}</p>
                
                {/* Resumo de pontuação - Ajustado para mobile */}
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <h5 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Seu desempenho:</h5>
                  <div className="flex flex-col sm:grid sm:grid-cols-1 gap-2 sm:gap-4">
                    <div className="text-center p-3 bg-purple-50 rounded-lg flex items-center justify-between sm:flex-col sm:justify-center">
                      <div className="flex items-center sm:flex-col sm:text-center">
                        <ArrowTrendingUpIcon className="h-5 w-5 text-purple-500 mr-2 sm:mr-0 sm:mb-1" />
                        <span className="text-purple-500 text-sm font-medium sm:text-xs">Conhecimento</span>
                      </div>
                      <div className="text-purple-600 font-bold text-xl sm:text-xl">{score.knowledge}</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg flex items-center justify-between sm:flex-col sm:justify-center">
                      <div className="flex items-center sm:flex-col sm:text-center">
                        <ArrowTrendingUpIcon className="h-5 w-5 text-green-500 mr-2 sm:mr-0 sm:mb-1" />
                        <span className="text-green-500 text-sm font-medium sm:text-xs">Economia</span>
                      </div>
                      <div className="text-green-600 font-bold text-xl sm:text-xl">{score.savings}</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg flex items-center justify-between sm:flex-col sm:justify-center">
                      <div className="flex items-center sm:flex-col sm:text-center">
                        <FaceSmileIcon className="h-5 w-5 text-purple-500 mr-2 sm:mr-0 sm:mb-1" />
                        <span className="text-purple-500 text-sm font-medium sm:text-xs">Felicidade</span>
                      </div>
                      <div className="text-purple-600 font-bold text-xl sm:text-xl">{score.happiness}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-gray-500 text-sm mb-1">Pontuação total</div>
                    <div className="text-purple-600 font-bold text-2xl">{score.total}</div>
                  </div>
                </div>
                
                <button
                  onClick={resetSimulation}
                  className="mt-4 sm:mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg font-medium hover:from-purple-700 hover:to-purple-900 transition-colors flex items-center justify-center text-sm sm:text-base active:scale-95"
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
          <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2">
            <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              <span className="font-medium">Pontuação atual:</span> {score.total}
            </div>
            <div className="flex justify-center sm:justify-end space-x-3 sm:space-x-4">
              <span className="flex items-center text-purple-600 text-xs sm:text-sm bg-purple-50 px-2 py-1 rounded">
                <ArrowTrendingUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                {score.knowledge}
              </span>
              <span className="flex items-center text-green-600 text-xs sm:text-sm bg-green-50 px-2 py-1 rounded">
                <ArrowTrendingUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                {score.savings}
              </span>
              <span className="flex items-center text-purple-600 text-xs sm:text-sm bg-purple-50 px-2 py-1 rounded">
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
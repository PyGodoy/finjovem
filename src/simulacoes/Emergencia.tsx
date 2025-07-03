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

// Não coloque ícones diretamente aqui. Eles serão adicionados no componente principal.
export const emergencia: Story = {
  id: 'imprevisto',
  icon: null,
  title: 'Emergência Financeira',
  description: 'Situações imprevistas acontecem. Descubra como lidar com gastos inesperados.',
  difficulty: 2,
  duration: 7,
  isNew: false,
  steps: [
    {
      id: 1,
      title: 'O imprevisto chegou!',
      description: 'Seu celular caiu e a tela quebrou completamente. O conserto custa R$300 e você usa o aparelho para trabalho e estudos. O que você faz?',
      imageSrc: '/images/emergencia.png',
      options: [
        {
          id: 'emprestimo',
          text: 'Pedir emprestado e parcelar o pagamento',
          nextStep: 2,
          impact: { knowledge: 1, savings: -1, happiness: 2 },
          feedback: 'Você resolveu o problema imediato, mas criou uma dívida que precisará gerenciar.'
        },
        {
          id: 'reserva',
          text: 'Usar sua reserva de emergência',
          nextStep: 3,
          impact: { knowledge: 3, savings: 0, happiness: 2 },
          feedback: 'Excelente! É exatamente para isso que serve uma reserva de emergência.'
        },
        {
          id: 'adiar',
          text: 'Adiar o conserto e juntar o dinheiro',
          nextStep: 4,
          impact: { knowledge: 2, savings: 2, happiness: -1 },
          feedback: 'Uma abordagem cautelosa, mas que pode afetar sua produtividade temporariamente.'
        }
      ]
    },
    {
      id: 2,
      title: 'Gerenciando o empréstimo',
      description: 'Você conseguiu o dinheiro emprestado e consertou o celular. Agora precisa planejar como vai pagar essa dívida. O que você faz?',
      imageSrc: '/images/emergencia.png',
      options: [
        {
          id: 'pagar-minimo',
          text: 'Pagar o mínimo possível por mês para não comprometer o orçamento',
          nextStep: 5,
          impact: { knowledge: 0, savings: -2, happiness: 1 },
          feedback: 'Essa estratégia aumenta o tempo da dívida e normalmente o valor total pago com juros.'
        },
        {
          id: 'cortar-gastos',
          text: 'Cortar gastos não essenciais para pagar rapidamente',
          nextStep: 5,
          impact: { knowledge: 3, savings: 1, happiness: 0 },
          feedback: 'Uma decisão madura que prioriza sua saúde financeira a longo prazo.'
        },
        {
          id: 'renda-extra',
          text: 'Buscar uma fonte de renda extra temporária',
          nextStep: 5,
          impact: { knowledge: 3, savings: 2, happiness: 1 },
          feedback: 'Excelente iniciativa! Aumentar a renda é uma ótima forma de lidar com dívidas inesperadas.'
        }
      ]
    },
    {
      id: 3,
      title: 'Recompondo a reserva',
      description: 'Você usou sua reserva de emergência para resolver o problema. Como pretende recompô-la?',
      imageSrc: '/images/emergencia.png',
      options: [
        {
          id: 'alocar-percentual',
          text: 'Alocar um percentual fixo do salário até recuperar o valor',
          nextStep: 5,
          impact: { knowledge: 3, savings: 3, happiness: 1 },
          feedback: 'Estratégia consistente e disciplinada! A constância é a chave para reconstituir reservas.'
        },
        {
          id: 'bonus-extra',
          text: 'Esperar algum dinheiro extra como bônus ou 13º',
          nextStep: 5,
          impact: { knowledge: 1, savings: 1, happiness: 2 },
          feedback: 'Esta abordagem pode funcionar, mas deixa você vulnerável a novos imprevistos no intervalo.'
        },
        {
          id: 'cortar-lazer',
          text: 'Cortar temporariamente os gastos com lazer',
          nextStep: 5,
          impact: { knowledge: 2, savings: 2, happiness: 0 },
          feedback: 'Um sacrifício temporário válido, mas cuidado para não afetar sua qualidade de vida por muito tempo.'
        }
      ]
    },
    {
      id: 4,
      title: 'Lidando com a espera',
      description: 'Você decidiu adiar o conserto. Duas semanas se passaram e você está tendo dificuldades no trabalho pela falta do celular. O que você faz?',
      imageSrc: '/images/emergencia.png',
      options: [
        {
          id: 'celular-usado',
          text: 'Buscar um celular usado ou emprestado temporariamente',
          nextStep: 5,
          impact: { knowledge: 3, savings: 2, happiness: 1 },
          feedback: 'Uma solução criativa que equilibra necessidade e planejamento financeiro!'
        },
        {
          id: 'acelerar-economia',
          text: 'Vender algo que você não usa para complementar o valor',
          nextStep: 5,
          impact: { knowledge: 3, savings: 1, happiness: 2 },
          feedback: 'Excelente! Transformar itens não utilizados em dinheiro é uma ótima estratégia em emergências.'
        },
        {
          id: 'cartao-credito',
          text: 'Usar o cartão de crédito e parcelar o conserto',
          nextStep: 5,
          impact: { knowledge: 1, savings: -1, happiness: 2 },
          feedback: 'Você resolveu o problema imediato, mas agora precisará gerenciar essa dívida com cuidado.'
        }
      ]
    },
    {
      id: 5,
      title: 'Preparando-se para o futuro',
      description: 'Após essa experiência com um gasto inesperado, como você vai se preparar para futuros imprevistos?',
      imageSrc: '/images/emergencia.png',
      options: [
        {
          id: 'fundo-emergencia',
          text: 'Criar um fundo de emergência com 3 a 6 meses de despesas',
          nextStep: 6,
          impact: { knowledge: 3, savings: 3, happiness: 2 },
          feedback: 'A decisão mais acertada! Um fundo de emergência é sua melhor proteção contra imprevistos.'
        },
        {
          id: 'seguros',
          text: 'Investir em seguros para itens essenciais',
          nextStep: 6,
          impact: { knowledge: 2, savings: 1, happiness: 2 },
          feedback: 'Seguros são importantes para mitigar riscos específicos, mas não substituem uma reserva de emergência.'
        },
        {
          id: 'limite-cartao',
          text: 'Manter um limite disponível no cartão de crédito',
          nextStep: 6,
          impact: { knowledge: 1, savings: 0, happiness: 1 },
          feedback: 'Embora possa ajudar em emergências, depender do cartão pode levar a dívidas com altos juros.'
        }
      ]
    },
    {
      id: 6,
      title: 'Reflexão final',
      description: 'Um ano se passou desde aquele imprevisto com o celular. Olhando para trás, o que você aprendeu?',
      imageSrc: '/images/emergencia.png',
      options: [
        {
          id: 'planejamento',
          text: 'A importância do planejamento financeiro para imprevistos',
          nextStep: 7,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'Exatamente! O planejamento nos protege das incertezas da vida.'
        },
        {
          id: 'prioridades',
          text: 'A necessidade de estabelecer prioridades claras nos gastos',
          nextStep: 7,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'Uma lição valiosa! Prioridades claras facilitam decisões em momentos difíceis.'
        },
        {
          id: 'equilibrio',
          text: 'Buscar equilíbrio entre segurança financeira e qualidade de vida',
          nextStep: 7,
          impact: { knowledge: 3, savings: 2, happiness: 3 },
          feedback: 'Uma visão madura e equilibrada sobre finanças pessoais!'
        }
      ]
    },
    {
      id: 7,
      title: 'Conclusão da Jornada',
      imageSrc: '/images/emergencia.png',
      description: 'Sua experiência com emergência financeira chegou ao fim! Confira seu desempenho:',
      feedback: 'Parabéns! Você aprendeu que imprevistos fazem parte da vida, mas com planejamento e disciplina, podemos enfrentá-los sem grandes abalos nas nossas finanças pessoais.',
      options: []
    }
  ]
}

// Componente para visualizar a simulação
export function EmergenciaSimulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [chosenOptions, setChosenOptions] = useState<string[]>([]);
  const [score, setScore] = useState({ knowledge: 0, savings: 0, happiness: 0, total: 0 });
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastOptionChosen, setLastOptionChosen] = useState<any>(null);
  const { updateProgress } = useProgress()

  const step = emergencia.steps[currentStep];
  
  useEffect(() => {
    // Atualiza a pontuação sempre que uma nova opção é escolhida
    setScore(calculateTotalScore(emergencia, chosenOptions));
  }, [chosenOptions]);

  useEffect(() => {
  if (currentStep === emergencia.steps.length - 1) {
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
    }, 3000);
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
          <StarIcon key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500" />
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
      <div className="bg-gradient-to-r from-amber-500 to-yellow-400 px-4 sm:px-6 py-3 sm:py-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center min-w-0 flex-1">
            <ExclamationTriangleIcon className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <h2 className="font-bold text-lg sm:text-xl truncate">{emergencia.title}</h2>
              <div className="flex items-center mt-1 text-amber-100 text-xs sm:text-sm">
                <ClockIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                <span>{emergencia.duration} min</span>
                <span className="mx-1 sm:mx-2">•</span>
                {renderDifficultyStars(emergencia.difficulty)}
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
      <div className="bg-amber-50 px-4 sm:px-6 py-2 border-b border-amber-100">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="text-xs sm:text-sm text-amber-700 font-medium">
            Progresso: Etapa {currentStep + 1} de {emergencia.steps.length}
          </div>
          <div className="w-full sm:w-2/3 bg-amber-200 rounded-full h-2">
            <div 
              className="bg-amber-500 h-2 rounded-full transition-all duration-500" 
              style={{ width: `${((currentStep + 1) / emergencia.steps.length) * 100}%` }} 
            />
          </div>
        </div>
      </div>
      
      {/* Conteúdo da etapa atual */}
      <div className="p-4 sm:p-6">
        {/* Imagem ilustrativa */}
        <div className="relative rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6 shadow-md">
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
          <div className="bg-amber-50 border-l-4 border-amber-500 p-3 sm:p-4 rounded-r-lg mb-4 sm:mb-6 animate-fadeIn">
            <div className="flex">
              <LightBulbIcon className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-amber-800 text-sm sm:text-base">Feedback:</p>
                <p className="text-amber-700 text-sm sm:text-base mb-2 sm:mb-3">{lastOptionChosen.feedback}</p>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-1 sm:space-y-0 text-xs sm:text-sm">
                  <span className="flex items-center text-blue-600">
                    <ArrowTrendingUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                    Conhecimento: {lastOptionChosen.impact.knowledge > 0 ? '+' : ''}{lastOptionChosen.impact.knowledge}
                  </span>
                  <span className={`flex items-center ${lastOptionChosen.impact.savings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    <ArrowTrendingUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                    Economia: {lastOptionChosen.impact.savings > 0 ? '+' : ''}{lastOptionChosen.impact.savings}
                  </span>
                  <span className={`flex items-center ${lastOptionChosen.impact.happiness >= 0 ? 'text-purple-600' : 'text-red-600'}`}>
                    <FaceSmileIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
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
                className="w-full flex items-center justify-between bg-white border border-gray-200 hover:border-amber-300 hover:bg-amber-50 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all shadow-sm hover:shadow text-left group"
              >
                <span className="text-gray-800 group-hover:text-amber-700 text-sm sm:text-base pr-2 flex-1">{option.text}</span>
                <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-amber-500 flex-shrink-0" />
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-amber-200">
            <div className="flex flex-col sm:flex-row sm:items-start">
              <CheckCircleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500 mr-0 sm:mr-3 mb-2 sm:mb-0 flex-shrink-0 self-center sm:self-start" />
              <div className="flex-1">
                <h4 className="font-bold text-amber-800 text-base sm:text-lg mb-2 text-center sm:text-left">Conclusão da Simulação</h4>
                <p className="text-amber-700 mb-4 sm:mb-6 text-sm sm:text-base text-center sm:text-left">{step.feedback}</p>
                
                {/* Resumo de pontuação */}
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <h5 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base text-center">Seu desempenho:</h5>
                  <div className="flex flex-col sm:grid sm:grid-cols-1 gap-2 sm:gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg flex items-center justify-between sm:block">
                      <div className="flex items-center sm:justify-center">
                        <ArrowTrendingUpIcon className="h-4 w-4 text-blue-600 mr-2 sm:hidden" />
                        <span className="text-blue-500 text-sm font-medium sm:hidden">Conhecimento</span>
                      </div>
                      <div className="text-blue-600 font-bold text-lg sm:text-xl sm:mb-1">{score.knowledge}</div>
                      <div className="text-blue-500 text-xs sm:text-sm hidden sm:block">Conhecimento</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg flex items-center justify-between sm:block">
                      <div className="flex items-center sm:justify-center">
                        <ArrowTrendingUpIcon className="h-4 w-4 text-green-600 mr-2 sm:hidden" />
                        <span className="text-green-500 text-sm font-medium sm:hidden">Economia</span>
                      </div>
                      <div className="text-green-600 font-bold text-lg sm:text-xl sm:mb-1">{score.savings}</div>
                      <div className="text-green-500 text-xs sm:text-sm hidden sm:block">Economia</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg flex items-center justify-between sm:block">
                      <div className="flex items-center sm:justify-center">
                        <FaceSmileIcon className="h-4 w-4 text-purple-600 mr-2 sm:hidden" />
                        <span className="text-purple-500 text-sm font-medium sm:hidden">Felicidade</span>
                      </div>
                      <div className="text-purple-600 font-bold text-lg sm:text-xl sm:mb-1">{score.happiness}</div>
                      <div className="text-purple-500 text-xs sm:text-sm hidden sm:block">Felicidade</div>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 text-center">
                    <div className="text-gray-500 text-xs sm:text-sm mb-1">Pontuação total</div>
                    <div className="text-amber-600 font-bold text-xl sm:text-2xl">{score.total}</div>
                  </div>
                </div>
                
                <button
                  onClick={resetSimulation}
                  className="mt-4 sm:mt-6 w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded-lg font-medium hover:from-amber-600 hover:to-yellow-500 transition-colors flex items-center justify-center text-sm sm:text-base"
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
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
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
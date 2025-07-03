'use client'

import { useState, useEffect } from 'react'
import { Story } from '@/types/StoryTypes'
import { useProgress } from '@/contexts/ProgressContext'
import { 
  BriefcaseIcon, 
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

export const emprego: Story = {
  id: 'emprego',
  icon: null, // Ícone será atribuído dinamicamente no componente principal
  title: 'Primeiro Emprego',
  description: 'Aprenda a administrar seu salário, equilibrando gastos, poupança e investimentos.',
  difficulty: 2,
  duration: 8,
  isNew: false,
  steps: [
    {
      id: 1,
      title: 'O primeiro salário chegou!',
      description: 'Você acabou de receber seu primeiro salário de R$1.200,00. Como pretende lidar com esse dinheiro?',
      imageSrc: '/images/emprego.png',
      options: [
        {
          id: 'pagar-gastar',
          text: 'Pagar as contas e gastar o que sobrar',
          nextStep: 2,
          impact: { knowledge: 1, savings: 0, happiness: 2 },
          feedback: 'Você cumpriu suas obrigações, mas sem planejamento corre o risco de gastar tudo sem perceber.'
        },
        {
          id: 'orcamento',
          text: 'Montar um orçamento com metas de economia',
          nextStep: 3,
          impact: { knowledge: 3, savings: 2, happiness: 1 },
          feedback: 'Excelente abordagem! Um orçamento estruturado é a base para uma vida financeira saudável.'
        },
        {
          id: 'gastar-lazer',
          text: 'Gastar com lazer para se recompensar',
          nextStep: 4,
          impact: { knowledge: 0, savings: -1, happiness: 3 },
          feedback: 'Você aproveitou bastante, mas sem planejar pode comprometer seu futuro financeiro.'
        }
      ]
    },
    {
      id: 2,
      title: 'Final do mês se aproximando',
      description: 'Você pagou as contas e foi gastando o resto sem muito controle. Agora faltam 10 dias para o próximo salário e você percebe que tem apenas R$100 restantes. O que você faz?',
      imageSrc: '/images/emprego.png',
      options: [
        {
          id: 'cartao-credito',
          text: 'Usar o cartão de crédito para cobrir os gastos até o próximo pagamento',
          nextStep: 5,
          impact: { knowledge: 1, savings: -2, happiness: 1 },
          feedback: 'O cartão parece uma solução fácil, mas pode iniciar um ciclo de dívidas difícil de quebrar.'
        },
        {
          id: 'cortar-gastos',
          text: 'Cortar drasticamente os gastos e levar marmita para o trabalho',
          nextStep: 5,
          impact: { knowledge: 3, savings: 1, happiness: 0 },
          feedback: 'Uma decisão madura que demonstra capacidade de adaptação em momentos difíceis.'
        },
        {
          id: 'renda-extra',
          text: 'Buscar alguma forma de renda extra para os próximos dias',
          nextStep: 5,
          impact: { knowledge: 2, savings: 1, happiness: 1 },
          feedback: 'Iniciativa excelente! Diversificar fontes de renda é uma estratégia valiosa.'
        }
      ]
    },
    {
      id: 3,
      title: 'Definindo seu orçamento',
      description: 'Você decidiu organizar um orçamento. Como prefere dividir seu salário de R$1.200?',
      imageSrc: '/images/emprego.png',
      options: [
        {
          id: 'regra-50-30-20',
          text: 'Regra 50-30-20: 50% para necessidades, 30% para desejos e 20% para poupar',
          nextStep: 6,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'Uma metodologia equilibrada e amplamente recomendada por especialistas!'
        },
        {
          id: 'poupar-metade',
          text: 'Poupar 50% e viver com o restante',
          nextStep: 6,
          impact: { knowledge: 2, savings: 3, happiness: 0 },
          feedback: 'Uma abordagem muito disciplinada, mas talvez difícil de manter a longo prazo.'
        },
        {
          id: 'priorizar-dividas',
          text: 'Focar em quitar dívidas antes de economizar',
          nextStep: 6,
          impact: { knowledge: 2, savings: 1, happiness: 1 },
          feedback: 'Priorizar dívidas de alto juros é importante, mas não se esqueça de construir uma reserva.'
        }
      ]
    },
    {
      id: 4,
      title: 'Consequências das escolhas',
      description: 'Você gastou muito com lazer e agora surgiu uma oportunidade de fazer um curso que melhoraria seu currículo, custando R$400. O que você faz?',
      imageSrc: '/images/emprego.png',
      options: [
        {
          id: 'parcelar-curso',
          text: 'Parcelar o curso no cartão de crédito',
          nextStep: 7,
          impact: { knowledge: 2, savings: -1, happiness: 1 },
          feedback: 'O curso é um bom investimento, mas parcelar sem planejamento pode gerar dívidas.'
        },
        {
          id: 'adiar-curso',
          text: 'Adiar o curso e começar a poupar para ele',
          nextStep: 7,
          impact: { knowledge: 3, savings: 1, happiness: 0 },
          feedback: 'Uma decisão madura que prioriza a estabilidade financeira, mesmo que signifique adiar oportunidades.'
        },
        {
          id: 'cortar-lazer',
          text: 'Cortar todos os gastos com lazer por dois meses para pagar o curso',
          nextStep: 7,
          impact: { knowledge: 2, savings: 1, happiness: -1 },
          feedback: 'Um sacrifício temporário para um benefício futuro maior. Boa escolha!'
        }
      ]
    },
    {
      id: 5,
      title: 'Planejando o próximo mês',
      description: 'Após enfrentar dificuldades, você está prestes a receber seu segundo salário. Como pretende agir agora?',
      imageSrc: '/images/emprego.png',
      options: [
        {
          id: 'criar-planilha',
          text: 'Criar uma planilha detalhada para controlar todos os gastos',
          nextStep: 8,
          impact: { knowledge: 3, savings: 2, happiness: 1 },
          feedback: 'Excelente! Registrar e analisar seus gastos é fundamental para boas decisões financeiras.'
        },
        {
          id: 'regra-envelopes',
          text: 'Adotar o método dos envelopes, separando o dinheiro por categorias',
          nextStep: 8,
          impact: { knowledge: 3, savings: 2, happiness: 1 },
          feedback: 'Um método prático e visual que ajuda muito a controlar os gastos!'
        },
        {
          id: 'app-financas',
          text: 'Baixar um aplicativo de finanças pessoais',
          nextStep: 8,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'A tecnologia pode ser uma grande aliada no controle financeiro!'
        }
      ]
    },
    {
      id: 6,
      title: 'Revisando seu orçamento',
      description: 'Um mês se passou e você está revisando seu orçamento. O que você percebeu?',
      imageSrc: '/images/emprego.png',
      options: [
        {
          id: 'reajustar-categorias',
          text: 'Algumas categorias precisam ser reajustadas para a realidade',
          nextStep: 8,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'Flexibilidade é importante! Um bom orçamento evolui conforme aprendemos mais sobre nossos hábitos.'
        },
        {
          id: 'aumentar-poupanca',
          text: 'Posso aumentar um pouco minha taxa de poupança',
          nextStep: 8,
          impact: { knowledge: 2, savings: 3, happiness: 1 },
          feedback: 'Excelente! À medida que melhoramos nossa gestão, conseguimos poupar mais.'
        },
        {
          id: 'manter-plano',
          text: 'O planejamento atual está funcionando bem',
          nextStep: 8,
          impact: { knowledge: 2, savings: 2, happiness: 2 },
          feedback: 'Ótimo! Quando encontramos um sistema que funciona, a consistência traz ótimos resultados.'
        }
      ]
    },
    {
      id: 7,
      title: 'Lições aprendidas',
      description: 'Três meses se passaram no seu primeiro emprego. Olhando para trás, qual foi sua principal lição?',
      imageSrc: '/images/emprego.png',
      options: [
        {
          id: 'equilibrio',
          text: 'Equilibrar o presente e o futuro é fundamental',
          nextStep: 8,
          impact: { knowledge: 3, savings: 2, happiness: 3 },
          feedback: 'Uma das lições mais valiosas em finanças pessoais! O equilíbrio traz sustentabilidade às decisões.'
        },
        {
          id: 'planejamento',
          text: 'Planejamento evita a maioria dos problemas financeiros',
          nextStep: 8,
          impact: { knowledge: 3, savings: 3, happiness: 2 },
          feedback: 'Absolutamente! Planejar é essencial para uma vida financeira tranquila.'
        },
        {
          id: 'prioridades',
          text: 'Definir prioridades claras ajuda nas decisões diárias',
          nextStep: 8,
          impact: { knowledge: 3, savings: 2, happiness: 2 },
          feedback: 'Excelente observação! Prioridades claras simplificam escolhas difíceis.'
        }
      ]
    },
    {
      id: 8,
      title: 'Conclusão da Jornada',
      imageSrc: '/images/emprego.png',
      description: 'Sua experiência com o primeiro emprego chegou ao fim! Confira seu desempenho:',
      feedback: 'Parabéns! As habilidades financeiras que você desenvolveu neste primeiro emprego serão valiosas por toda sua vida. Continue aprendendo e aplicando os princípios de educação financeira.',
      options: []
    }
  ]
}

// Componente para visualizar a simulação
export function EmpregoSimulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [chosenOptions, setChosenOptions] = useState<string[]>([]);
  const [score, setScore] = useState({ knowledge: 0, savings: 0, happiness: 0, total: 0 });
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastOptionChosen, setLastOptionChosen] = useState<any>(null);
  const { updateProgress } = useProgress()

  const step = emprego.steps[currentStep];
  
  useEffect(() => {
    // Atualiza a pontuação sempre que uma nova opção é escolhida
    setScore(calculateTotalScore(emprego, chosenOptions));
  }, [chosenOptions]);

  useEffect(() => {
  if (currentStep === emprego.steps.length - 1) {
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
          <StarIcon key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
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
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 px-4 sm:px-6 py-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center min-w-0 flex-1">
            <BriefcaseIcon className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <h2 className="font-bold text-lg sm:text-xl truncate">{emprego.title}</h2>
              <div className="flex items-center mt-1 text-blue-100 text-xs sm:text-sm">
                <ClockIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                <span className="mr-2">{emprego.duration} min</span>
                <span className="mx-1 sm:mx-2">•</span>
                {renderDifficultyStars(emprego.difficulty)}
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
      <div className="bg-blue-50 px-4 sm:px-6 py-3 border-b border-blue-100">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
          <div className="text-sm text-blue-700 font-medium">
            Progresso: Etapa {currentStep + 1} de {emprego.steps.length}
          </div>
          <div className="w-full sm:w-2/3 bg-blue-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
              style={{ width: `${((currentStep + 1) / emprego.steps.length) * 100}%` }} 
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4 rounded-r-lg mb-4 sm:mb-6 animate-fadeIn">
            <div className="flex">
              <LightBulbIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-blue-800 text-sm sm:text-base">Feedback:</p>
                <p className="text-blue-700 text-sm sm:text-base leading-relaxed mt-1">{lastOptionChosen.feedback}</p>
                <div className="mt-3 flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                  <span className="flex items-center text-blue-600">
                    <ArrowTrendingUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">Conhecimento: {lastOptionChosen.impact.knowledge > 0 ? '+' : ''}{lastOptionChosen.impact.knowledge}</span>
                  </span>
                  <span className={`flex items-center ${lastOptionChosen.impact.savings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    <ArrowTrendingUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">Economia: {lastOptionChosen.impact.savings > 0 ? '+' : ''}{lastOptionChosen.impact.savings}</span>
                  </span>
                  <span className={`flex items-center ${lastOptionChosen.impact.happiness >= 0 ? 'text-purple-600' : 'text-red-600'}`}>
                    <FaceSmileIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">Felicidade: {lastOptionChosen.impact.happiness > 0 ? '+' : ''}{lastOptionChosen.impact.happiness}</span>
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
                className="w-full flex items-center justify-between bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl p-3 sm:p-4 transition-all shadow-sm hover:shadow text-left group"
              >
                <span className="text-gray-800 group-hover:text-blue-700 text-sm sm:text-base leading-relaxed pr-2 flex-1">{option.text}</span>
                <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
              </button>
            ))}
          </div>
        ) : (
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl border border-blue-200">
            <div className="flex flex-col sm:flex-row sm:items-start">
              <CheckCircleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mb-3 sm:mb-0 sm:mr-3 flex-shrink-0 self-center sm:self-start" />
              <div className="flex-1">
                <h4 className="font-bold text-blue-800 text-lg sm:text-xl mb-2 sm:mb-3">Conclusão da Simulação</h4>
                <p className="text-blue-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{step.feedback}</p>
                
                {/* Resumo de pontuação - Layout responsivo ajustado */}
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <h5 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Seu desempenho:</h5>
                  <div className="flex flex-col sm:grid sm:grid-cols-1 gap-2 sm:gap-4">
                    <div className="text-center p-3 sm:p-3 bg-blue-50 rounded-lg">
                      <div className="text-blue-600 font-bold text-lg sm:text-xl">{score.knowledge}</div>
                      <div className="text-blue-500 text-xs sm:text-sm">Conhecimento</div>
                    </div>
                    <div className="text-center p-3 sm:p-3 bg-green-50 rounded-lg">
                      <div className="text-green-600 font-bold text-lg sm:text-xl">{score.savings}</div>
                      <div className="text-green-500 text-xs sm:text-sm">Economia</div>
                    </div>
                    <div className="text-center p-3 sm:p-3 bg-purple-50 rounded-lg">
                      <div className="text-purple-600 font-bold text-lg sm:text-xl">{score.happiness}</div>
                      <div className="text-purple-500 text-xs sm:text-sm">Felicidade</div>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 text-center">
                    <div className="text-gray-500 text-xs sm:text-sm mb-1">Pontuação total</div>
                    <div className="text-blue-600 font-bold text-xl sm:text-2xl">{score.total}</div>
                  </div>
                </div>
                
                <button
                  onClick={resetSimulation}
                  className="mt-4 sm:mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-500 transition-colors flex items-center justify-center text-sm sm:text-base"
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
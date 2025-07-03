'use client'

import { useState } from 'react'
import { BookOpenIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

type ModalContent = {
  title: string
  sections: {
    subtitle: string
    text: string
  }[]
}

const educationTabs = [
  {
    id: 'orcamento',
    title: 'Orçamento',
    icon: '📊',
    gradient: 'from-blue-500 to-purple-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    content: 'Aprenda a planejar seus gastos e receitas para manter suas finanças saudáveis.',
    modalContent: {
      title: 'Como Fazer Seu Primeiro Orçamento',
      sections: [
        {
          subtitle: '🎯 Por que é importante?',
          text: 'O orçamento é como um mapa que te mostra onde seu dinheiro está indo. Sem ele, é fácil gastar mais do que você tem e ficar no vermelho.'
        },
        {
          subtitle: '📝 Passo a passo simples:',
          text: '1. Anote tudo que você ganha (mesada, trabalho, etc.)\n2. Liste todos os seus gastos fixos (transporte, lanche, etc.)\n3. Defina quanto quer guardar todo mês\n4. O que sobrar é para seus gastos extras'
        },
        {
          subtitle: '💡 Dica de ouro:',
          text: 'Use a regra 50-30-20: 50% para necessidades, 30% para desejos e 20% para poupança. Se ganhar R$ 200, por exemplo: R$ 100 para necessidades, R$ 60 para diversão e R$ 40 para guardar!'
        },
        {
          subtitle: '📱 Ferramentas que ajudam:',
          text: 'Anote no celular, use aplicativos gratuitos como GuiaBolso ou até mesmo uma planilha simples. O importante é acompanhar todo dia!'
        }
      ]
    }
  },
  {
    id: 'poupanca',
    title: 'Poupança',
    icon: '🏦',
    gradient: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    content: 'Descubra como guardar dinheiro de forma eficiente para alcançar seus objetivos.',
    modalContent: {
      title: 'Seu Primeiro Pé-de-Meia',
      sections: [
        {
          subtitle: '🏆 Por que poupar é seu superpoder?',
          text: 'Quando você poupa, está construindo sua liberdade! Com dinheiro guardado, você pode realizar sonhos, ter segurança e não depender só dos outros.'
        },
        {
          subtitle: '🎯 Comece pequeno, sonhe grande:',
          text: 'Não precisa guardar muito! Mesmo R$ 5 por semana vira R$ 260 em um ano. Defina um objetivo: novo celular, curso, viagem com os amigos.'
        },
        {
          subtitle: '💰 Onde guardar seu dinheiro:',
          text: '• Poupança: Mais segura, mas rende pouco\n• Conta digital: Muitas são gratuitas para jovens\n• Cofrinhos: Para objetivos de curto prazo\n• Nunca deixe parado em casa!'
        },
        {
          subtitle: '🚀 Truques para poupar mais:',
          text: 'Guarde primeiro, gaste depois! Assim que receber dinheiro, separe a parte da poupança. Procure maneiras de economizar: leve lanche de casa, use transporte público, compre usado quando possível.'
        }
      ]
    }
  },
  {
    id: 'investimentos',
    title: 'Investimentos',
    icon: '📈',
    gradient: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    content: 'Conheça os diferentes tipos de investimentos e como começar a aplicar seu dinheiro.',
    modalContent: {
      title: 'Primeiros Passos no Mundo dos Investimentos',
      sections: [
        {
          subtitle: '🌱 O que são investimentos?',
          text: 'É fazer seu dinheiro trabalhar para você! Em vez de deixar parado, você empresta ou aplica em algo que pode crescer com o tempo.'
        },
        {
          subtitle: '📚 Tipos básicos para iniciantes:',
          text: '• Tesouro Direto: Você empresta pro governo (super seguro)\n• CDB: Empresta pro banco (também seguro)\n• Fundos: Profissionais investem pra você\n• Ações: Você vira "sócio" de empresas (mais arriscado)'
        },
        {
          subtitle: '⚠️ Regra de ouro:',
          text: 'Nunca invista dinheiro que você vai precisar nos próximos meses! Invista só o que pode ficar parado por um tempo. E lembre-se: maior retorno = maior risco.'
        },
        {
          subtitle: '🎯 Como começar:',
          text: 'Primeiro, tenha uma reserva de emergência. Depois, estude bastante, comece com pouco dinheiro e investimentos mais seguros. Muitas corretoras têm cursos gratuitos!'
        }
      ]
    }
  },
  {
    id: 'credito',
    title: 'Crédito',
    icon: '💳',
    gradient: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-200',
    content: 'Entenda como usar cartões de crédito e empréstimos de forma responsável.',
    modalContent: {
      title: 'Crédito: Seu Aliado ou Seu Pior Inimigo?',
      sections: [
        {
          subtitle: '🎭 As duas faces do crédito:',
          text: 'Crédito pode ser incrível para emergências e construir seu histórico financeiro. Mas mal usado, vira uma bola de neve de dívidas que pode destruir seus sonhos.'
        },
        {
          subtitle: '💳 Cartão de crédito - como usar:',
          text: '• Use como se fosse dinheiro do seu bolso\n• Pague SEMPRE o valor total da fatura\n• Nunca pague só o mínimo (os juros são altíssimos!)\n• Tenha só um cartão no início'
        },
        {
          subtitle: '🚨 Sinais de perigo:',
          text: 'Se você está pagando só o mínimo, usando o limite todo, fazendo empréstimos para pagar cartão ou perdendo o sono por causa de dívidas - PARE! Procure ajuda.'
        },
        {
          subtitle: '🛡️ Dicas de proteção:',
          text: 'Negocie sempre antes de atrasar pagamentos. Muitas empresas preferem fazer acordo. Use aplicativos para controlar gastos. E lembre: seu nome limpo vale mais que qualquer compra!'
        }
      ]
    }
  }
]

export default function EnhancedEducationSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ModalContent | null>(null)

  const openModal = (content: ModalContent) => {
    setModalContent(content)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalContent(null)
  }

  return (
    <>
      <section id="educacao" className="py-8 sm:py-12 lg:py-20 relative overflow-hidden min-h-screen flex items-center">
        {/* Background com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        {/* Elementos decorativos - ocultos no mobile */}
        <div className="hidden sm:block absolute top-20 left-10 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="hidden sm:block absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-bounce delay-300"></div>
        <div className="hidden sm:block absolute top-1/2 left-1/4 w-20 h-20 bg-pink-200 rounded-full opacity-15 animate-bounce delay-700"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 sm:p-3 rounded-full">
                <BookOpenIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
              Aprenda a Cuidar do Seu Dinheiro
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Transforme sua relação com o dinheiro através de conhecimento prático e ferramentas que realmente funcionam
            </p>
          </div>

          {/* Tabs Mobile - Scroll horizontal */}
          <div className="sm:hidden mb-6 overflow-x-auto">
            <div className="flex gap-3 pb-4 min-w-max px-4">
              {educationTabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex-shrink-0 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg`
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{tab.icon}</span>
                    <span className="text-sm whitespace-nowrap">{tab.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tabs Desktop */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
            {educationTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`group relative p-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-xl`
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className={`text-2xl transition-transform duration-300 ${activeTab === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                    {tab.icon}
                  </span>
                  <span className="text-sm lg:text-base">{tab.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Content Card */}
          <div className="max-w-4xl mx-auto">
            <div className={`bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-8 lg:p-10 border ${educationTabs[activeTab].borderColor} relative overflow-hidden transition-all duration-500`}>
              {/* Barra colorida no topo */}
              <div className={`absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r ${educationTabs[activeTab].gradient}`}></div>

              {/* Conteúdo principal */}
              <div className="text-center">
                {/* Ícone com fundo animado */}
                <div className="relative mb-6 sm:mb-8">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-full bg-gradient-to-r ${educationTabs[activeTab].gradient} flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110`}>
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-white filter drop-shadow-lg">
                      {educationTabs[activeTab].icon}
                    </span>
                  </div>
                  {/* Efeito de pulse */}
                  <div className={`absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-full bg-gradient-to-r ${educationTabs[activeTab].gradient} opacity-20 animate-ping`}></div>
                </div>
                
                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${educationTabs[activeTab].textColor} mb-4 sm:mb-6`}>
                  {educationTabs[activeTab].title}
                </h3>
                
                <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto">
                  {educationTabs[activeTab].content}
                </p>
                
                <button 
                  onClick={() => openModal(educationTabs[activeTab].modalContent)}
                  className={`group relative bg-gradient-to-r ${educationTabs[activeTab].gradient} hover:shadow-xl text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base lg:text-lg transform hover:scale-105 hover:-translate-y-1 overflow-hidden`}
                >
                  <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                    <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    Começar a aprender
                    <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Melhorado */}
      {isModalOpen && modalContent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl w-full max-w-2xl max-h-[90vh] mx-2 shadow-2xl transform animate-in zoom-in-95 duration-300 flex flex-col">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${educationTabs[activeTab].gradient} text-white p-4 sm:p-6 lg:p-8 relative overflow-hidden flex-shrink-0 rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl`}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl">{educationTabs[activeTab].icon}</span>
                    <span className="text-xs sm:text-sm font-medium opacity-90 uppercase tracking-wider">Guia Completo</span>
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight pr-4">
                    {modalContent.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full flex-shrink-0"
                >
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto flex-1 space-y-4 sm:space-y-6">
              {modalContent.sections.map((section, index) => (
                <div key={index} className="group">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-start gap-2 sm:gap-3">
                    <span className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${educationTabs[activeTab].gradient} text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold`}>
                      {index + 1}
                    </span>
                    <span className="leading-tight">{section.subtitle}</span>
                  </h3>
                  <div className={`${educationTabs[activeTab].bgColor} rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border-l-4 border-gradient-to-b ${educationTabs[activeTab].gradient} transform transition-all duration-200 group-hover:scale-[1.02] ml-8 sm:ml-11`}>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                      {section.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
              
            {/* Modal Footer */}
            <div className="border-t border-gray-100 p-4 sm:p-6 lg:p-8 bg-gray-50/50 flex-shrink-0 rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl">
              <button
                onClick={closeModal}
                className={`w-full bg-gradient-to-r ${educationTabs[activeTab].gradient} hover:shadow-lg text-white font-semibold py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-200 text-sm sm:text-base lg:text-lg transform hover:scale-[1.02] flex items-center justify-center gap-2`}
              >
                <span>Entendi! Vamos começar</span>
                <span className="text-lg sm:text-xl">🚀</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        /* Scroll horizontal suave no mobile */
        .overflow-x-auto {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }

        /* Touch-specific styles for mobile */
        @media (max-width: 640px) {
          button:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </>
  )
}
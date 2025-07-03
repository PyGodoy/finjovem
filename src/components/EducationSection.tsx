'use client'

import { useState } from 'react'

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
    gradient: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
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
    gradient: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
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
      <section id="educacao" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-800 bg-clip-text text-transparent mb-6">
              Aprenda a Cuidar do
              <br />
              <span className="text-5xl md:text-6xl lg:text-7xl">Seu Dinheiro</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforme sua relação com o dinheiro através de conhecimento prático e ferramentas que realmente funcionam
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-5xl mx-auto">
            {educationTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`group relative px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-xl shadow-black/20`
                    : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200/50 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-2xl transition-transform duration-300 ${activeTab === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                    {tab.icon}
                  </span>
                  <span className="text-lg">{tab.title}</span>
                </div>
                {activeTab === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
                )}
              </button>
            ))}
          </div>

          {/* Content Card */}
          <div className="max-w-4xl mx-auto">
            <div className={`${educationTabs[activeTab].bgColor} backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center border border-white/50 shadow-2xl shadow-black/10 transition-all duration-500 transform hover:scale-[1.02]`}>
              {/* Icon with animated background */}
              <div className="relative mb-8">
                <div className={`w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-r ${educationTabs[activeTab].gradient} flex items-center justify-center shadow-xl shadow-black/20 animate-pulse`}>
                  <span className="text-4xl md:text-6xl filter drop-shadow-lg">
                    {educationTabs[activeTab].icon}
                  </span>
                </div>
                <div className={`absolute inset-0 w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-r ${educationTabs[activeTab].gradient} opacity-20 animate-ping`}></div>
              </div>
              
              <h3 className={`text-3xl md:text-4xl font-bold ${educationTabs[activeTab].textColor} mb-6`}>
                {educationTabs[activeTab].title}
              </h3>
              
              <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {educationTabs[activeTab].content}
              </p>
              
              <button 
                onClick={() => openModal(educationTabs[activeTab].modalContent)}
                className={`group relative bg-gradient-to-r ${educationTabs[activeTab].gradient} hover:shadow-xl hover:shadow-black/25 text-white font-bold py-4 px-8 md:py-5 md:px-10 rounded-2xl transition-all duration-300 text-lg md:text-xl transform hover:scale-105 hover:-translate-y-1 overflow-hidden`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Começar a aprender
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      {isModalOpen && modalContent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] mx-2 shadow-2xl transform animate-in zoom-in-95 duration-300 flex flex-col">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${educationTabs[activeTab].gradient} text-white p-6 md:p-8 relative overflow-hidden flex-shrink-0`}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{educationTabs[activeTab].icon}</span>
                    <span className="text-sm font-medium opacity-90 uppercase tracking-wider">Guia Completo</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                    {modalContent.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
              {modalContent.sections.map((section, index) => (
                <div key={index} className="group">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start gap-2">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="leading-tight">{section.subtitle}</span>
                  </h3>
                  <div className={`${educationTabs[activeTab].bgColor} rounded-2xl p-4 md:p-6 border-l-4 border-gradient-to-b ${educationTabs[activeTab].gradient} transform transition-all duration-200 group-hover:scale-[1.02]`}>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
                      {section.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
              
            {/* Modal Footer */}
            <div className="border-t border-gray-100 p-6 md:p-8 bg-gray-50/50 flex-shrink-0">
              <button
                onClick={closeModal}
                className={`w-full bg-gradient-to-r ${educationTabs[activeTab].gradient} hover:shadow-lg text-white font-bold py-3 md:py-4 rounded-2xl transition-all duration-200 text-base md:text-lg transform hover:scale-[1.02] flex items-center justify-center gap-2`}
              >
                <span>Entendi! Vamos começar</span>
                <span className="text-xl">🚀</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
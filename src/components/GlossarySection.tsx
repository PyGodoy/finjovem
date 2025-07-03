'use client'

import { useState } from 'react'
import { BookOpenIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const glossaryTerms = [
  { term: "CDB", definition: "Certificado de Depósito Bancário - um título emitido por bancos que paga juros ao investidor.", category: "investimentos" },
  { term: "Tesouro Direto", definition: "Programa do governo federal para venda de títulos públicos a pessoas físicas.", category: "investimentos" },
  { term: "Orçamento", definition: "Planejamento de receitas e despesas em um determinado período.", category: "basico" },
  { term: "Juros Compostos", definition: "Juros calculados sobre o valor inicial e também sobre os juros acumulados.", category: "investimentos" },
  { term: "Reserva de Emergência", definition: "Valor guardado para cobrir gastos inesperados ou situações de crise.", category: "planejamento" },
  { term: "Inflação", definition: "Aumento geral dos preços de bens e serviços ao longo do tempo.", category: "basico" }
]

export default function GlossarySection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = activeFilter === 'all' || term.category === activeFilter
    return matchesSearch && matchesFilter
  })

  return (
    <section id="glossario" className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <BookOpenIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mr-2" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Glossário Financeiro</h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Entenda os principais termos e conceitos do mundo financeiro
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            {/* Search Input */}
            <div className="relative mb-4 sm:mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Buscar termo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['all', 'basico', 'investimentos', 'planejamento'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-300'
                  }`}
                >
                  {filter === 'all' ? 'Todos' : 
                   filter === 'basico' ? 'Básicos' :
                   filter === 'investimentos' ? 'Investimentos' : 'Planejamento'}
                </button>
              ))}
            </div>
          </div>

          {/* Terms List */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {filteredTerms.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {filteredTerms.map((term, index) => (
                  <div key={index} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2 leading-tight">
                          {term.term}
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-0">
                          {term.definition}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {term.category === 'basico' ? 'Básico' : 
                         term.category === 'investimentos' ? 'Investimentos' : 'Planejamento'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 sm:p-8 text-center text-gray-500">
                <div className="text-sm sm:text-base">
                  Nenhum termo encontrado com os critérios selecionados.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const faqs = [
  {
    question: 'Como começo a aprender sobre finanças aqui?',
    answer: 'Basta navegar pelas seções educativas da plataforma. Você pode iniciar pelo módulo de Orçamento.'
  },
  {
    question: 'Preciso pagar para usar os conteúdos?',
    answer: 'Não! Todo o conteúdo oferecido aqui é totalmente gratuito e feito para você aprender de forma acessível.'
  },
  {
    question: 'Os quizzes valem pontos?',
    answer: 'Sim! Ao completar quizzes e módulos, você acumula pontos e pode conquistar medalhas e certificados.'
  },
  {
    question: 'O que faço se tiver dúvidas?',
    answer: 'Você pode consultar o glossário ou entrar em contato pelo canal de suporte ao final da página.'
  }
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 md:mb-8">
          Perguntas Frequentes
        </h2>
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border border-gray-200 rounded-lg">
                  <Disclosure.Button className="flex justify-between items-center w-full px-4 py-3 md:px-4 md:py-4 text-left text-base md:text-lg font-medium text-blue-700 hover:bg-blue-50">
                    <span className="text-sm md:text-base mr-2">{faq.question}</span>
                    <ChevronUpIcon 
                      className={`h-4 w-4 md:h-5 md:w-5 transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-3 md:px-4 md:pb-4 text-sm md:text-base text-gray-700">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}
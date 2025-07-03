'use client'

import { BoltIcon } from '@heroicons/react/24/outline'

export default function CtaSection() {
  return (
    <section className="py-14 md:py-20 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center">
          <BoltIcon className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4 text-yellow-300" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 px-2">
            Pronto para transformar sua vida financeira?
          </h2>
          <p className="text-base md:text-lg max-w-xl mb-5 md:mb-6 px-4">
            Comece agora sua jornada com nossos conteúdos interativos e trilhas personalizadas.
          </p>
          <a 
            href="#educacao" 
            className="inline-block bg-white text-blue-600 font-semibold px-5 py-2 md:px-6 md:py-3 rounded-lg hover:bg-gray-100 transition text-sm md:text-base"
          >
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  )
}
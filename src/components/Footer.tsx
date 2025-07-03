'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <p className="mb-3 md:mb-4 text-sm md:text-base">
          &copy; {new Date().getFullYear()} FinJovem. Todos os direitos reservados.
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm">
          <a href="#faq" className="hover:text-white px-2 py-1 md:px-0 md:py-0">
            FAQ
          </a>
          <a href="#glossario" className="hover:text-white px-2 py-1 md:px-0 md:py-0">
            Glossário
          </a>
          <a href="#educacao" className="hover:text-white px-2 py-1 md:px-0 md:py-0">
            Educação
          </a>
        </div>
      </div>
    </footer>
  )
}
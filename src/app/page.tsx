import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import EducationSection from '@/components/EducationSection'
import StoriesSection from '@/components/StoriesSection'
import QuizSection from '@/components/QuizSection'
import ProgressSection from '@/components/ProgressSection'
import GlossarySection from '@/components/GlossarySection'
import FaqSection from '@/components/FaqSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <EducationSection />
        <StoriesSection />
        <QuizSection />
        <ProgressSection />
        <GlossarySection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
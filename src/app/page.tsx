import { About } from '@/components/organisms/About/About'
import { Hero } from '@/components/organisms/Hero/Hero'
import { HowToHelp } from '@/components/organisms/HowToHelp/HowToHelp'
import { MeetTheFounders } from '@/components/organisms/MeetTheFounders/MeetTheFounders'

export default function Home() {
  return (
    <>
      <Hero />
      <HowToHelp />
      <MeetTheFounders />
      <About />
    </>
  )
}

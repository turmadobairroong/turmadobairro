import { FoundersCard } from '@/components/molecules/FoundersCard/FoundersCard'
import React from 'react'

export const MeetTheFounders = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 px-24 py-16 md-5:px-20 md-6:px-10 md-7:px-4">
      <h1 className="text-5xl md-5:text-4xl md-7:text-3xl md-10:text-center ">
        Conheça os Fundadores
      </h1>
      <div className="flex w-full items-center justify-between md-8:flex-col md-8:gap-6">
        <FoundersCard
          imgPath="/maisa.png"
          name="Maísa Almeida"
          content="32 anos, Assistente social"
        />
        <FoundersCard
          imgPath="/helena.png"
          name="Helena Almeida"
          content="23 anos, historiadora e
          fotógrafa"
        />
        <FoundersCard
          imgPath="/donizete.png"
          name="Donizete"
          content="Comerciante e pai."
        />
      </div>
    </section>
  )
}

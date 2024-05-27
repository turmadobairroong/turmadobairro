import { ButtonToHelp } from '@/components/molecules/ButtonToHelp/ButtonToHelp'
import React from 'react'

export const HowToHelp = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 px-24 py-16 md-5:px-20 md-6:px-10 md-7:px-4">
      <h1 className="text-5xl md-5:text-4xl md-7:text-3xl">Como ajudar?</h1>
      <div className="flex w-full items-center justify-center gap-10 md-9:flex-col md-9:gap-4">
        <ButtonToHelp path="/quero-adotar" content="Adote" />
        <ButtonToHelp path="/quero-doar" content="Doe" />
        <ButtonToHelp path="/seja-voluntario" content="Seja Voluntário(a)" />
      </div>
    </section>
  )
}

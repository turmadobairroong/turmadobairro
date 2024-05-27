import React from 'react'

export const YourObligations = () => {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-6 px-24 py-8 md-5:px-20 md-6:px-10 md-7:px-4">
      <h1 className="text-5xl md-5:text-4xl md-7:text-3xl">Suas Obrigações:</h1>
      <div className="flex flex-col items-start justify-center gap-2">
        <h6 className="text-lg md-5:text-sm md-7:text-xs">
          Levar no veterinário
        </h6>
        <h6 className="text-lg md-5:text-sm md-7:text-xs">Comprar ração</h6>
        <h6 className="text-lg md-5:text-sm md-7:text-xs">
          Entre outras funções
        </h6>
      </div>
    </section>
  )
}

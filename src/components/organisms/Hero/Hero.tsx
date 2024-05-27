/* eslint-disable prettier/prettier */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <section className="flex w-full items-center justify-center px-24 py-16 md-5:px-20 md-6:px-10 md-7:px-4 md-8:flex-col md-8:gap-6">
      <div className="flex w-1/2 flex-col items-start justify-center gap-4 md-8:w-full">
        <h1 className="text-6xl font-normal md-5:text-5xl md-7:text-4xl">
          A TURMA DO BAIRRO
        </h1>
        <p className="w-[77%] md-5:text-sm md-7:text-xs">
          Se você é apaixonado por animais e sente o chamado para proteger os
          mais vulneráveis, você vai adorar fazer parte do nosso time de{" "}
          <strong>heróis peludos!</strong>
        </p>
        <p className="w-[77%] md-5:text-sm md-7:text-xs">
          Dos cãezinhos abandonados aos gatinhos sem lar, cada patinha merece{" "}
          <strong>amor</strong> e um <strong>lar</strong> seguro. Junte-se a nós
          e seja a voz dos que não podem falar.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/quero-adotar"
            className="rounded-2xl border-2 border-secondary bg-transparent p-4 transition hover:scale-105 md-5:text-sm md-7:text-xs"
          >
            Adote um animal!
          </Link>
          <Link
            href="/quero-doar"
            className="rounded-2xl border-2 border-secondary bg-secondary p-4 text-black-100 transition hover:scale-105 md-5:text-sm md-7:text-xs"
          >
            Faça uma doação!
          </Link>
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap items-center justify-end gap-4 bg-primary md-8:w-full md-8:justify-start">
        <Image
          alt=""
          src="/heroDog1.png"
          className="md-5:h-44 md-5:w-32"
          width={175}
          height={226}
        ></Image>
        <Image
          alt=""
          className="md-5:h-44 md-5:w-32"
          src="/heroDog2.png"
          width={175}
          height={226}
        ></Image>
        <Image
          alt=""
          className="md-5:h-44 md-5:w-32"
          src="/heroDog3.png"
          width={175}
          height={226}
        ></Image>
        <Image
          alt=""
          className="-z-20 md-5:h-44 md-5:w-32 md-8:hidden"
          src="/heroDog2.png"
          width={175}
          height={226}
        ></Image>
      </div>
    </section>
  );
};

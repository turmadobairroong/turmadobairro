/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ModalAdoptCard } from "@/components/atoms/ModalAdoptCard/ModalAdoptCard";
import Image from "next/image";
import React, { useState } from "react";

export const AdoptCard = ({ pet }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAndCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="flex items-center justify-center gap-2 rounded-2xl bg-white-100 md-10:flex-col md-10:rounded-3xl">
      <Image
        src={pet?.photo}
        alt=""
        width={171}
        className="md-10:w-full"
        height={234}
      ></Image>
      <div className="flex flex-col items-end justify-center gap-2 p-2 pr-4 text-black-100">
        <h1 className="w-full text-left text-2xl font-medium md-9:text-xl">
          {pet?.name}
        </h1>
        <ul className="flex flex-col items-start justify-center gap-2 md-9:text-xs">
          <li>Idade: {pet?.age}</li>
          <li>Porte: {pet?.porte}</li>
          <li>Data de entrada: {pet?.entryDate}</li>
          <li>Características: {pet?.characteristics}</li>
        </ul>
        <button
          onClick={handleOpenAndCloseModal}
          className="cursor-pointer rounded border-2 border-secondary bg-secondary p-1 font-semibold duration-300 hover:scale-105 md-9:text-sm"
        >
          Quero adotar!
        </button>
      </div>
      {isModalOpen && (
        <ModalAdoptCard
          handleOpenAndCloseModal={handleOpenAndCloseModal}
          petPhoto={pet?.photo}
          petId={pet?.id}
        />
      )}
    </section>
  );
};

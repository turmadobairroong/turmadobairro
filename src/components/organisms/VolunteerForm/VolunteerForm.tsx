/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
"use client";
import { InputVolunteerForm } from "@/components/molecules/InputVolunteerForm/InputVolunteerForm";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment-timezone";
import Loading from "@/components/loader/Loading";

export const VolunteerForm = () => {
  const [nome, setNome] = useState();
  const [loading, setLoading] = useState(false);
  const [horasLivres, setHorasLivres] = useState();
  const [cidade, setCidade] = useState();
  const [idade, setIdade] = useState();
  const notify = () => toast.success("Voluntário cadastrado com sucesso!");

  const createFormattedDate = (dateString: any) => {
    // Parse the date string into a moment object
    const date = moment(dateString, moment.ISO_8601);

    // Check if the date is valid
    if (!date.isValid()) {
      throw new Error("Formato de data inválido");
    }

    // Define the target timezone
    const targetTimezone = "Asia/Singapore";

    // Convert the date to the specified timezone
    const zonedDate = date.tz(targetTimezone);

    // Format the date to the desired output (YYYY-MM-DDTHH:mm:ss)
    const formattedDateString = zonedDate.format("YYYY-MM-DDTHH:mm:ss");

    return formattedDateString;
  };

  return (
    <section className="flex w-full flex-col items-start justify-center gap-6 px-24 py-16 md-5:px-20 md-6:px-10 md-7:px-4">
      <h1 className="text-5xl md-5:text-4xl md-7:text-3xl">
        Formulário para voluntariado:
      </h1>
      <ToastContainer></ToastContainer>

      <form
        action="#"
        className="flex flex-col items-center justify-center gap-4"
        onSubmit={(e) => {
          setLoading(true);
          e.preventDefault();
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          const dataFormatada = createFormattedDate(horasLivres);
          const idadeFormatada = createFormattedDate(idade);

          const raw = JSON.stringify({
            name: nome,
            freeHours: [dataFormatada],
            city: cidade,
            age: idadeFormatada,
          });

          const requestOptions: any = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/volunteer`,
            requestOptions,
          )
            .then((response) => response.json())
            .then((result) => {
              if (result?.status === "ok") {
                notify();
              }
            })
            .catch((error) => console.error(error))
            .finally(() => {
              setLoading(false);
            });
        }}
      >
        <label className="w-full text-left">Nome</label>
        <InputVolunteerForm placeholder="Nome" setValue={setNome} />
        <div className="flex w-full flex-col gap-2">
          <label>Horários disponíveis</label>
          <InputVolunteerForm
            placeholder="Horários disponíveis"
            setValue={setHorasLivres}
            type={"date"}
          />
        </div>
        <label className="w-full text-left">Cidade</label>
        <InputVolunteerForm placeholder="Cidade" setValue={setCidade} />
        <div className="flex w-full flex-col gap-2">
          <label>Qual a sua idade</label>
          <InputVolunteerForm
            placeholder="Idade"
            setValue={setIdade}
            type={"date"}
          />
        </div>
        {loading ? (
          <>
            <Loading mode={"black"}></Loading>
            <button
              disabled
              type="submit"
              className="w-full rounded-xl border-2 border-secondary bg-slate-500 p-4 text-black-100 duration-300 md-7:p-2 md-7:text-xs"
            >
              Se voluntariar
            </button>
          </>
        ) : (
          <>
            <button
              type="submit"
              className="w-full rounded-xl border-2 border-secondary bg-secondary p-4 text-black-100 duration-300 hover:bg-transparent hover:text-secondary md-7:p-2 md-7:text-xs"
            >
              Se voluntariar
            </button>
          </>
        )}
      </form>
      <Link href="#" className="flex items-center justify-center gap-2">
        <Image
          alt=""
          src="/whatsapp.png"
          height={72}
          width={72}
          className="h-9 w-8"
        ></Image>
        Nos chame no Whatsapp!
      </Link>
    </section>
  );
};

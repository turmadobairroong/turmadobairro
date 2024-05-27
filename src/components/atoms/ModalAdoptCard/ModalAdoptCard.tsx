/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
"use client";
import Loading from "@/components/loader/Loading";
import { InputModalAdoptForm } from "../InputModalAdoptForm/InputModalAdoptForm";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const ModalAdoptCard = ({
  handleOpenAndCloseModal,
  petPhoto,
  petId,
}: any) => {
  const [loading, setLoading] = useState(false);
  const notify = () =>
    toast.success("Pedido de adoção cadastrado com sucesso!");

  const [name, setName] = useState("");
  const [hour, setHour] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <ToastContainer></ToastContainer>
      <section className="fixed inset-0 flex min-h-screen w-full items-center justify-center bg-black-100 bg-opacity-70">
        <section className="relative flex w-1/2 flex-col items-center justify-center gap-6 rounded-2xl bg-white-100 p-8 text-black-100 md-5:w-3/4 md-8:w-[92%]">
          {loading ? (
            <Loading mode={"black"}></Loading>
          ) : (
            <>
              <h1 className="text-2xl font-semibold md-9.2:text-lg">
                Doguinho Te Espera!
              </h1>
              <button
                className="absolute right-4 top-4 text-2xl font-bold"
                onClick={handleOpenAndCloseModal}
              >
                X
              </button>
              <section className="flex w-full items-center justify-center gap-8 md-9.2:flex-col">
                <div className="flex w-1/2 flex-col items-center justify-center gap-4 md-9.2:w-full">
                  <Image
                    src={petPhoto}
                    className="md-9.2:w-24"
                    width={176}
                    height={240}
                    alt=""
                  ></Image>
                  <Link
                    href="#"
                    className="flex items-center justify-center gap-2 md-9.1:text-sm"
                  >
                    <Image
                      alt=""
                      src="/whatsapp.png"
                      height={72}
                      width={72}
                      className="h-9 w-8 md-9.1:h-5 md-9.1:w-5"
                    ></Image>
                    +35 99999-9999
                  </Link>
                </div>
                <div className="w-1/2 md-9.2:w-full">
                  <form
                    action="#"
                    className="flex w-full flex-col items-center justify-center gap-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setLoading(true);

                      const myHeaders = new Headers();
                      myHeaders.append("Content-Type", "application/json");

                      const raw = JSON.stringify({
                        id: petId,
                        wantToAdopt: {
                          name,
                          hour,
                          city,
                          age,
                        },
                      });

                      const requestOptions: any = {
                        method: "PATCH",
                        headers: myHeaders,
                        body: raw,
                        redirect: "follow",
                      };

                      fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/pets/adopt`,
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
                          handleOpenAndCloseModal();
                        });
                    }}
                  >
                    <InputModalAdoptForm
                      placeholder="Nome"
                      value={name}
                      changeValue={setName}
                    />
                    <label className="w-full text-left">
                      Horário disponível
                    </label>
                    <InputModalAdoptForm
                      placeholder="Horários disponíveis"
                      type={"datetime-local"}
                      value={hour}
                      changeValue={setHour}
                    />
                    <InputModalAdoptForm
                      placeholder="Cidade"
                      value={city}
                      changeValue={setCity}
                    />
                    <InputModalAdoptForm
                      placeholder="Idade"
                      value={age}
                      changeValue={setAge}
                    />
                    <button
                      type="submit"
                      className="w-full rounded-xl border-2 border-secondary bg-secondary p-4 font-semibold text-black-100 duration-300 hover:scale-105 md-7:p-2 md-7:text-xs"
                    >
                      Adotar
                    </button>
                  </form>
                </div>
              </section>
            </>
          )}
        </section>
      </section>
    </>
  );
};

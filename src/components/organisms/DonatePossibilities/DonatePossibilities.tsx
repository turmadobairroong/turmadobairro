/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
"use client";
import Loading from "@/components/loader/Loading";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const DonatePossibilities = () => {
  const [bankInfo, setBankInfo] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/config`)
      .then((response) => response.json())
      .then((result) => {
        console.log("RES", result);
        setBankInfo(result[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="flex w-full flex-col items-start justify-center gap-6 px-24 py-8 md-5:px-20 md-6:px-10 md-7:px-4 hg-1:py-28">
      <h1 className="text-5xl md-5:text-4xl md-7:text-3xl">
        Maneiras de Doar:
      </h1>
      {!bankInfo ? (
        <Loading></Loading>
      ) : (
        <>
          <div className="flex flex-col items-start justify-center gap-2">
            <h6 className="text-lg md-5:text-sm md-7:text-xs">
              Pix: {bankInfo?.pix}
            </h6>
            <h6 className="text-lg md-5:text-sm md-7:text-xs">
              Conta: {bankInfo?.bankAccount}
            </h6>
            <h6 className="flex items-center justify-center gap-4 text-lg md-5:text-sm md-7:text-xs md-9.1:flex-col">
              Whatsapp para doações materiais:
              <Link
                href="#"
                className="flex items-center justify-center gap-2 md-9.1:w-full md-9.1:justify-start"
              >
                <Image
                  alt=""
                  src="/whatsapp.png"
                  height={72}
                  width={72}
                  className="h-9 w-8"
                ></Image>
                {bankInfo?.phone}
              </Link>
            </h6>
          </div>
        </>
      )}
    </section>
  );
};

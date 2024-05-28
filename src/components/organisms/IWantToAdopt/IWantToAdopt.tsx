/* eslint-disable prettier/prettier */
"use client";
import Loading from "@/components/loader/Loading";
import { AdoptCard } from "@/components/molecules/AdoptCard/AdoptCard";
import React, { useEffect, useState } from "react";

export const IWantToAdopt = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/pets`)
      .then((response) => response.json())
      .then((result) => {
        console.log("RES", result);
        // setBankInfo(result[0]);
        setPets(result);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="flex w-full flex-col items-start justify-center gap-6 px-24 py-8 md-5:px-20 md-6:px-10 md-7:px-4 hg-1:py-28">
      <h1 className="text-5xl md-5:text-4xl md-7:text-3xl">Quero Adotar</h1>
      <div className="flex flex-wrap items-center justify-start gap-6">
        {pets.length === 0 && (
          <>
            <Loading mode={"black"}></Loading>
          </>
        )}

        {pets.map((pet) => {
          return (
            <>
              <AdoptCard pet={pet} />
            </>
          );
        })}
      </div>
    </section>
  );
};

/* eslint-disable prettier/prettier */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full px-24 pt-4 md-5:px-20 md-6:px-10 md-7:px-4">
      <section className="flex items-center justify-center rounded-t-2xl bg-white-100 p-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={80}
            height={80}
            quality={100}
          ></Image>
        </Link>
        <ul className="flex flex-col items-start justify-center gap-1 p-2 text-black-100 md-5:gap-2 md-5:text-xs">
          <li className="border-b-2 border-t-2 border-white-100 duration-300 hover:rounded hover:border-b-black-100">
            <Link href="#">
              A <strong>Organização</strong>
            </Link>
          </li>
          <li className="border-b-2 border-t-2 border-white-100 duration-300 hover:rounded hover:border-b-black-100">
            <Link href="/seja-voluntario">
              Quero ser <strong>Voluntário</strong>
            </Link>
          </li>
          <li className="border-b-2 border-t-2 border-white-100 duration-300 hover:rounded hover:border-b-black-100">
            <Link href="/quero-doar">
              Quero <strong>Doar</strong>
            </Link>
          </li>
          <li className="border-b-2 border-t-2 border-white-100 duration-300 hover:rounded hover:border-b-black-100">
            <Link href="/quero-adotar">
              Quero <strong>Adotar</strong>
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

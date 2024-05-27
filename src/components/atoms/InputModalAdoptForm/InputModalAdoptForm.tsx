/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { InputAdoptFormProps } from "@/@types";
import React from "react";

export const InputModalAdoptForm = ({
  placeholder,
  type = "text",
  changeValue,
  value,
}: any) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-12 w-full rounded-xl border border-black-100 bg-black-100 p-2 text-white-100 placeholder:text-white-100 md-7:h-10 md-7:text-xs md-7:placeholder:text-xs md-9.1:h-8"
      value={value}
      onChange={(e) => {
        changeValue(e.target.value);
      }}
    />
  );
};

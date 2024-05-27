/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import React from "react";

export const InputVolunteerForm = ({
  placeholder,
  setValue = null,
  type = "text",
}: any) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      className="h-12 rounded-xl border border-white p-2 text-black-100 placeholder:text-black-100 md-7:h-10 md-7:text-xs md-7:placeholder:text-xs"
    />
  );
};

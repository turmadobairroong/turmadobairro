/* eslint-disable prettier/prettier */
import React from "react";

export default function Loading({ mode }: { mode: string }) {
  return (
    <div className={`lds-ring ${mode}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

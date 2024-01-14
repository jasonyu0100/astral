"use client";
import { usePolaroid, PolaroidContext } from "../polaroid-epic/handler/polaroid/main";
import { LoginView } from "./view";
import { useEffect } from "react";

export default function Page() {
  const { categories, flipped, index, transition, variant, _polaroidHandler } =
    usePolaroid();

  return (
    <PolaroidContext.Provider
      value={{
        categories,
        flipped,
        index,
        transition,
        variant,
        polaroidHandler: _polaroidHandler,
      }}
    >
      <LoginView />;
    </PolaroidContext.Provider>
  );

}

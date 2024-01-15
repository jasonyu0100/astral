"use client";
import { RegisterView } from "./view";
import { PolaroidContext, usePolaroid } from "../polaroid-epic/handler/polaroid/main";

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
      <RegisterView />;
    </PolaroidContext.Provider>
  );
}

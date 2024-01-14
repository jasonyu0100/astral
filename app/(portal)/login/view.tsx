"use client";
import { PolaroidContext, usePolaroid } from "../polaroid-epic/handler/polaroid/main";

export function LoginView() {
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

import {
  PolaroidContext,
  usePolaroid,
} from "../polaroid-epic/handler/polaroid/main";
import { ReserveView } from "./view";

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
      <ReserveView />;
    </PolaroidContext.Provider>
  );
}

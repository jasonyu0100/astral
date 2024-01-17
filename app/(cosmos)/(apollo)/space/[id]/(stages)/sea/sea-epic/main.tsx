import {
  backgroundStyles,
  containerStyles,
} from "@/(common)/styles/data";
import { Layer } from "@/(common)/layer/main";

export function SeaMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={SeaMain.name}
      sizeStyle="h-full flex-grow"
      className={`${containerStyles["row-center"]}`}
    >
      {children}
    </Layer>
  );
}

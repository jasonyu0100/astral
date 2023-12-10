import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";
import DraftLeftContainerAdd from "./add/main";
import DraftStoreCol from "./store-col/main";

export default function DraftRightContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftRightContainer.name}
      sizeStyle="h-[full] w-[160px]"
      backgroundStyle={backgroundStyles["glass-10"]}
    >
      {children}
    </Layer>
  );
}

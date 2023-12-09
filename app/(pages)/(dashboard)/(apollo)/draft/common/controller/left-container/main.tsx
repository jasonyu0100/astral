import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/texture/data";
import Texture from "@/(pages)/(dashboard)/(common)/texture/main";
import DraftLeftContainerAdd from "./add/main";
import DraftStoreCol from "./store-col/main";

export default function DraftLeftContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Texture
      displayName={DraftLeftContainer.name}
      sizeStyle="h-[full] w-[160px]"
    >
      {children}
    </Texture>
  );
}

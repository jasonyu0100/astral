import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";
import { GalleryCollectionContainer } from "../container/main";
import { CollectionAddCover } from "./cover/main";
import { CollectionAddInfo } from "./info/main";

interface InputProps extends React.ComponentPropsWithoutRef<"button"> {}

export function GalleryCollectionAdd({ ...props }: InputProps) {
  return (
    <button {...props}>
      <GalleryCollectionContainer>
        <CollectionAddCover />
        <CollectionAddInfo />
      </GalleryCollectionContainer>
    </button>
  );
}

import { Layer } from "@/(common)/layer/main";
import { backgroundStyles, borderStyles } from "@/(common)/styles/data";
import { CollectionObj } from "@/tables/gallery/collection/main";
import { CollectionCover } from "./cover/main";
import { CollectionInfo } from "./info/main";
import { GalleryCollectionContainer } from "../container/main";

interface InputProps extends React.ComponentPropsWithoutRef<"a"> {
  collection: CollectionObj;
}

export function GalleryCollection({ collection, ...props }: InputProps) {
  return (
    <a {...props}>
      <GalleryCollectionContainer>
        <CollectionCover collection={collection} />
        <CollectionInfo collection={collection} />
      </GalleryCollectionContainer>
    </a>
  );
}

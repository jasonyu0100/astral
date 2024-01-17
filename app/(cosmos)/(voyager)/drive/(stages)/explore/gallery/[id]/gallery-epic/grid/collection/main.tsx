import { CollectionObj } from "@/tables/gallery/collection/main";
import { CollectionCover } from "./cover/main";
import { CollectionInfo } from "./info/main";
import { GalleryCollectionContainer } from "../container/main";
import { LinkInputProps } from "@/(common)/types/main";

interface InputProps extends LinkInputProps {
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

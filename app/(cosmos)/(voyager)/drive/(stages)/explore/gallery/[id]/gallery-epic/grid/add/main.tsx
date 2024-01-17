import { useContext } from "react";
import { ExploreGalleryContext } from "../../../page";
import { GalleryCollectionContainer } from "../container/main";
import { CollectionAddCover } from "./cover/main";
import { CollectionAddInfo } from "./info/main";
import { ButtonInputProps } from "@/(common)/types/main";

export function GalleryCollectionAdd({ ...props} : ButtonInputProps) {

  return (
    <button {...props}>
      <GalleryCollectionContainer>
        <CollectionAddCover />
        <CollectionAddInfo />
      </GalleryCollectionContainer>
    </button>
  );
}

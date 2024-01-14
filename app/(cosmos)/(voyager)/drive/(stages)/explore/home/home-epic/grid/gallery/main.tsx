import { GalleryObj } from "@/tables/gallery/main";
import { GalleryCover } from "./cover/main";
import { GalleryInfo } from "./info/main";
import { HomeGridContainer } from "../container/main";

interface InputProps extends React.ComponentPropsWithoutRef<"a"> {
  gallery: GalleryObj;
}

export function HomeGallery({ gallery, ...props }: InputProps) {
  return (
    <a {...props}>
      <HomeGridContainer>
        <GalleryCover gallery={gallery} />
        <GalleryInfo gallery={gallery} />
      </HomeGridContainer>
    </a>
  );
}

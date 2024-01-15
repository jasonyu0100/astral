import { useContext } from "react";
import { PortalGalleryPiece } from "./piece/main";
import { PortalGalleryTitle } from "./title/main";
import { PolaroidContext } from "../../handler/polaroid/main";

export function PortalGalleryView() {
  const { transition, index, categories, variant, polaroidHandler } =
    useContext(PolaroidContext);

  return (
    <div
      className="flex flex-col items-center p-[5%] h-full w-full cursor-pointer"
      onClick={() => polaroidHandler.tapPolaroid()}
    >
      <PortalGalleryPiece
        imageState={transition}
        src={`/landing/${categories[index]}-${variant}.png`}
      />
      <PortalGalleryTitle>{categories[index]}</PortalGalleryTitle>
    </div>
  );
}

import { useContext } from "react";
import { ExtendedSpaceContext } from "../../../main";

export function SpaceInfoThumbnail() {
  const { space } = useContext(ExtendedSpaceContext);

  return (
    <img
      className='h-[50px] w-[50px] rounded-full'
      src={space?.thumbnail?.src}
    />
  );
}

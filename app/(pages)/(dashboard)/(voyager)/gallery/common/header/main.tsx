import AlbumInfo from "./album-info/main";
import FlowIcon from "@/(pages)/(common)/icons/global/flow/main";

export interface GalleryHeaderProps {
  subHeading: string;
  heading: string;
}

export default function GalleryHeader({
  subHeading,
  heading,
}: GalleryHeaderProps) {
  return (
    <div className="flex flex-row flex-shrink-0 w-full h-[300px] bg-slate-700 items-center justify-between px-[100px]">
      <AlbumInfo subHeading={subHeading} heading={heading}/>
      <div className="flex flex-col items-center justify-center rounded-[50px] bg-violet-500 h-[80px] w-[150px]">
        <FlowIcon />
      </div>
    </div>
  );
}

import GalleryHeaderAction from "./action/main";
import GalleryAlbumInfo from "./album-info/main";

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
      <GalleryAlbumInfo subHeading={subHeading} heading={heading}/>
      <GalleryHeaderAction/>
    </div>
  );
}

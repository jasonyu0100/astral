import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";
import { GalleryObj } from "@/tables/gallery/main";
import { SectionCover } from "./cover/main";
import { SectionInfo } from "./info/main";

interface InputProps extends React.ComponentPropsWithoutRef<"a"> {
  section: GalleryObj;
}

export function DriveSection({ section, ...props }: InputProps) {
  return (
    <a {...props}>
      <div className="flex h-[500px] aspect-[11/16]">
        <Layer
          displayName={DriveSection.name}
          sizeStyle="flex-grow h-full"
          backgroundStyle={backgroundStyles["glass-10"]}
        >
          <div className="flex flex-col w-full h-full">
            <SectionCover />
            <SectionInfo />
          </div>
        </Layer>
      </div>
    </a>
  );
}

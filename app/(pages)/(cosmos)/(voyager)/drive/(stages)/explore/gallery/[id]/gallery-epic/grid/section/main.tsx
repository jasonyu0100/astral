import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";
import { CollectionObj } from "@/tables/collection/main";
import { SectionCover } from "./cover/main";
import { SectionInfo } from "./info/main";

interface InputProps extends React.ComponentPropsWithoutRef<"a"> {
  collection: CollectionObj;
}

export function DriveFolder({ collection, ...props }: InputProps) {
  return (
    <a {...props}>
      <div className="h-[200px] aspect-[36/16]">
        <Layer
          displayName={DriveFolder.name}
          sizeStyle="flex-grow h-full"
          backgroundStyle={backgroundStyles["glass-10"]}
        >
          <div className="flex flex-row items-center space-x-[1rem] w-full h-full">
            <SectionCover />
            <SectionInfo/>
          </div>
        </Layer>
      </div>
    </a>
  );
}

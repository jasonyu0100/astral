import { backgroundStyles } from "@/(pages)/(common)/styles/data";
import { DriveAddIcon } from "../../icons/add/main";
import { Layer } from "@/(pages)/(common)/layer/main";

interface InputProps extends React.ComponentPropsWithoutRef<"button"> {}

export function DriveSectionAdd({ ...props }: InputProps) {
  return (
    <div className="w-[400px] h-[150px]">
      <Layer
        displayName={DriveSectionAdd.name}
        sizeStyle="flex-grow h-full"
        backgroundStyle={backgroundStyles["glass-10"]}
      >
        <div className="flex flex-row items-center space-x-[1rem] w-full h-full">
          <button
            className="p-[10px] bg-white w-[150px] h-[150px] flex-shrink-0 flex items-center justify-center"
            {...props}
          >
            <DriveAddIcon />
          </button>
          <div className="flex flex-col space-y-[1rem] flex-grow h-full p-[1rem] justify-center "></div>
        </div>
      </Layer>
    </div>
  );
}

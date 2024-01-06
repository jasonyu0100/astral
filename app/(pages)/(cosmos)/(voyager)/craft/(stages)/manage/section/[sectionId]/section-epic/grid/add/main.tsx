import { backgroundStyles } from "@/(pages)/(common)/styles/data";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.52138 11.3434H0.0551758V8.52138H8.52138V0.0551758H11.3434V8.52138H19.8096V11.3434H11.3434V19.8096H8.52138V11.3434Z"
                fill="#CBD5E1"
              />
            </svg>
          </button>
          <div className="flex flex-col space-y-[1rem] flex-grow h-full p-[1rem] justify-center "></div>
        </div>
      </Layer>
    </div>
  );
}

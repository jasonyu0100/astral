import { backgroundStyles } from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";

interface InputProps extends React.ComponentPropsWithoutRef<"button"> {}

export function DriveSectionAdd({ ...props }: InputProps) {
  return (
    <button {...props}>
      <div className="flex h-[500px] aspect-[11/16]">
        <Layer
          displayName={DriveSectionAdd.name}
          sizeStyle="flex-grow h-full"
          backgroundStyle={backgroundStyles["glass-10"]}
        >
          <div className="flex flex-col w-full h-full">
            <div className="w-full aspect-square bg-slate-100 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-1/4 h-1/4"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M8.52138 11.3434H0.0551758V8.52138H8.52138V0.0551758H11.3434V8.52138H19.8096V11.3434H11.3434V19.8096H8.52138V11.3434Z"
                  fill="#CBD5E1"
                />
              </svg>
            </div>
          </div>
        </Layer>
      </div>
    </button>
  );
}

import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";
import { CraftSection } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/type";

interface InputProps extends React.ComponentPropsWithoutRef<"a"> {
  section: CraftSection;
}

export function DriveSection({ section, ...props }: InputProps) {
  return (
    <div className="w-[400px] h-[150px]">
      <Layer
        displayName={DriveSection.name}
        sizeStyle="flex-grow h-full"
        backgroundStyle={backgroundStyles["glass-10"]}
      >
        <div className="flex flex-row items-center space-x-[1rem] w-full h-full">
          <a
            className="p-[10px] bg-white w-[150px] h-[150px] flex-shrink-0"
            {...props}
          >
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=2893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </a>
          <div className="flex flex-col space-y-[1rem] flex-grow h-full p-[1rem] justify-center ">
            <div className="text-white text-xl font-bold font-['Creato Display'] leading-7">
              Architecture
            </div>
            <div className="text-white text-base font-normal font-['Creato Display'] leading-normal">
              54 elements
            </div>
            <div className="text-white text-base font-normal font-['Creato Display'] leading-normal">
              3443 views, 123 downloads
            </div>
          </div>
        </div>
      </Layer>
    </div>
  );
}

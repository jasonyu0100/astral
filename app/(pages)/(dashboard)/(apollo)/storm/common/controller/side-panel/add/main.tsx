import Texture from "@/(pages)/(dashboard)/(common)/texture/main";
import StormAddIcon from "../../../icon/add/main";
import { containerStyles } from "@/(pages)/(dashboard)/(common)/texture/data";

export default function SidePanelAdd() {
  return (
    <div className="flex flex-col items-center justify-center flex-shrink-0 w-[80px] h-[80px]">
      <Texture
        displayName={SidePanelAdd.name}
        sizeStyle="w-[50px] h-[50px] rounded-[25px] overflow-hidden"
        backgroundStyle="bg-gradient-to-r from-slate-100 to-slate-500 opacity-10"
        containerStyle={containerStyles["col-centered"]}
      >
        <StormAddIcon />
      </Texture>
    </div>
  );
}

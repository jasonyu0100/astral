import Texture from "@/(pages)/(dashboard)/(common)/texture/main";
import StormAddIcon from "../../../icon/add/main";

export default function SidePanelAdd() {
  return (
    <div className="flex flex-col items-center justify-center flex-shrink-0 w-[80px] h-[80px]">
      <Texture
        sizeStyle="w-[50px] h-[50px] rounded-[25px] overflow-hidden"
        backgroundStyle="bg-gradient-to-r from-slate-100 to-slate-500 opacity-10"
        borderStyle=""
      >
        <div className="w-full h-full rounded-[50px] justify-center items-center inline-flex">
          <StormAddIcon />
        </div>
      </Texture>
    </div>
  );
}

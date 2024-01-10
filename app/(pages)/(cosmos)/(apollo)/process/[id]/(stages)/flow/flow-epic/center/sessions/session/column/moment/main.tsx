import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";
import { MomentObj } from "@/(pages)/(cosmos)/tables/flow/session/moment/main";

export function FlowMoment({
  moment,
}: {
  moment: MomentObj;
}) {
  return (
    <div className="h-[150px] aspect-[13/16] flex flex-col items-center bg-white p-[15px]">
      <img src={moment.file.src} className="w-full aspect-square"></img>
      <div className="h-full w-full flex items-center justify-center">
        <p className="font-md font-extraBold">Hello World</p>
      </div>
    </div>
  );
}

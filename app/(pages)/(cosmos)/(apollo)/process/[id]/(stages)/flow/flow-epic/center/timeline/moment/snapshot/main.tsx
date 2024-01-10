import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";

export function FlowMomentSnapshot({
  flowSnapshot: flowSnapshot,
}: {
  flowSnapshot: FileObj;
}) {
  return (
    <div className="h-[150px] aspect-[13/16] flex flex-col items-center bg-white p-[15px]">
      <img src={flowSnapshot.src} className="w-full aspect-square"></img>
      <div className="h-full w-full flex items-center justify-center">
        <p className="font-md font-extraBold">Hello World</p>
      </div>
    </div>
  );
}

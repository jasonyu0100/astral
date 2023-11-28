import DraftPolaroid from "../../../polaroid/main";

export default function DraftControllerTopLeft() {
  return (
      <div
        className="flex flex-row overflow-auto space-x-[20px] p-[30px] flex-shrink-0 bg-slate-800 h-[200px] rounded-tl-[20px] border-b-2 border-slate-700"
        style={{ width: "calc(100% - 200px)" }}
      >
        <DraftPolaroid />
        <DraftPolaroid />
        <DraftPolaroid />
        <DraftPolaroid />
        <DraftPolaroid />
        <DraftPolaroid />
        <DraftPolaroid />
        <DraftPolaroid />
      </div>
  );
}


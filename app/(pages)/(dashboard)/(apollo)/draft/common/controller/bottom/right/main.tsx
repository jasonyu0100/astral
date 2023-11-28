import DraftPolaroid from "../../../polaroid/main";

export default function DraftControllerBottomRight() {
  return (
    <div className="flex flex-col overflow-auto flex-shrink-0 bg-slate-800 space-y-[20px] p-[30px] items-center w-[200px] h-full border-l-[2px] border-slate-700">
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

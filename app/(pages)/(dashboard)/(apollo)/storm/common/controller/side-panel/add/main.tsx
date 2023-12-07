import StormAddIcon from "../../../icon/add/main";

export default function SidePanelAdd() {
  return (
    <div className="flex flex-col items-center justify-center flex-shrink-0 w-[80px] h-[80px]">
      <div className="w-[50px] h-[50px] p-[13px] bg-gradient-to-r bg-opacity-10 bg-slate-400 rounded-[50px] justify-center items-center inline-flex">
        <StormAddIcon />
      </div>
    </div>
  );
}

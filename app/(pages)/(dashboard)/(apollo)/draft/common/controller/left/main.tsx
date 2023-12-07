export default function LeftContainer() {
  return (
    <div className="flex flex-col h-full w-[160px]">
      <div className="w-full h-[160px] bg-slate-800 flex items-center justify-center">
        <div className="w-[100px] h-[100px] bg-slate-300 rounded-[50px]"></div>
      </div>

      <div className="w-full h-[540px] bg-slate-800 flex flex-col overflow-auto items-center pt-[20px] space-y-[20px]">
        <div className="w-[120px] h-[160px] bg-slate-400"></div>
        <div className="w-[120px] h-[160px] bg-slate-400"></div>
      </div>
    </div>
  );
}

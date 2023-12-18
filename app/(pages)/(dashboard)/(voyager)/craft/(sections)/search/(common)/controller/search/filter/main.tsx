import StoreAddIcon from "../../../icons/add/main";

export default function StoreSearchFilter() {
  return (
    <div className="flex flex-row items-center space-x-[1rem]">
      <div className="bg-slate-600 px-[1rem] h-[2rem] rounded-full flex items-center justify-center">
        <p className="text-white text-xs font-bold font-['Creato Display'] leading-tight">
          SONIC
        </p>
      </div>
      <div className="bg-slate-600 px-[1rem] h-[2rem] rounded-full flex items-center justify-center">
        <p className="text-white text-xs font-bold font-['Creato Display'] leading-tight">
          VISUAL
        </p>
      </div>
      <div className="bg-slate-600 px-[1rem] h-[2rem] rounded-full flex items-center justify-center">
        <p className="text-white text-xs font-bold font-['Creato Display'] leading-tight">
          TEXTUAL
        </p>
      </div>
      <div className="h-[1.5rem] w-[1.5rem] flex items-center justify-center bg-slate-600 rounded-full">
        <StoreAddIcon />
      </div>
    </div>
  );
}

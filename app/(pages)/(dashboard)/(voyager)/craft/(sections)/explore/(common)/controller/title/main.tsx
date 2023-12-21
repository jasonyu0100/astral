export default function CraftAddSectionTitle({ title } : { title: string}) {
  return (
    <div className="flex flex-col">
      <div className="text-white text-xl font-extraBold font-['Creato Display'] leading-7">
        {title}
      </div>
      <div className="w-full mt-[1rem] h-[0px] border border-slate-400 border-opacity-30"></div>
    </div>
  );
}

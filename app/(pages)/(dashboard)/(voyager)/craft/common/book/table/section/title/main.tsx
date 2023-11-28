export default function SectionTitle({ title } : { title: string}) {
  return (
    <div className="flex flex-col">
      <div className="text-white text-xl font-extrabold font-['Creato Display'] leading-7">
        {title}
      </div>
      <div className="w-full mt-[5px] h-[0px] border border-slate-400 border-opacity-30"></div>
    </div>
  );
}

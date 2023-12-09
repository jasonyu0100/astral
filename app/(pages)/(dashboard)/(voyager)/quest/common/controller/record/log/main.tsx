export default function QuestRecordLog({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="text-white text-xl font-extrabold font-['Creato Display'] leading-7">
          Day 20
        </div>
        <div className="w-full mt-[5px] h-[0px] border border-slate-400 border-opacity-30"></div>
      </div>
      <div className="w-full text-white text-base font-normal leading-normal">
        Lorem ipsum dolor sit amet consectetur. Risus aliquam id amet laoreet
        velit. Fringilla etiam ac pharetra auctor sed sed aenean in rhoncus.
        Quisque diam egestas eget facilisis scelerisque eleifend. Elementum
        blandit venenatis sagittis enim mauris faucibus fringilla.
      </div>
    </div>
  );
}

export function StoryClapperContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-[500px] h-[550px] mt-[50px]">
      <div className="ml-[-1rem] w-[496.48px] h-[62.06px] origin-top-left rotate-[-5deg] bg-gradient-to-br from-slate-950 to-fuchsia-600 rounded-tl-xl rounded-tr-xl border border-slate-200 border-opacity-30" />
      <div className="border border-slate-200 bg-slate-800 border-opacity-30 w-[500px] h-[500px] p-[2rem] rounded-bl-[2rem] rounded-br-[2rem]">
        {children}
      </div>
    </div>
  );
}

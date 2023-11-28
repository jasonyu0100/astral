export default function CraftContainer({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div className="flex flex-col space-y-[50px] w-full bg-slate-800 rounded-[10px] p-[20px]">{children}</div>;
  }
  
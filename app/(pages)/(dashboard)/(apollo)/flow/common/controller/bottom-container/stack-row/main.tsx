export default function FlowStackRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row overflow-auto flex-shrink-0 space-x-[20px] bg-slate-800 w-[700px] h-full p-[20px]">
      {children}
    </div>
  );
}

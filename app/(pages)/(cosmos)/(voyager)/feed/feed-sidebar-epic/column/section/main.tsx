export function FeedSidebarSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col space-y-[1rem]">
      <p className="text-slate-500 font-extraBold text-xl">Yesterday</p>
      <div className="space-y-[1rem]">
        {children}
      </div>
    </div>
  );
}

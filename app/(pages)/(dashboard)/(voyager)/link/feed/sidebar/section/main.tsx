export default function LinkFeedSidebarSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col space-y-[2rem]">
      <p className="text-slate-500 font-extraBold text-xl">Yesterday</p>
      <div>
        {children}
      </div>
    </div>
  );
}

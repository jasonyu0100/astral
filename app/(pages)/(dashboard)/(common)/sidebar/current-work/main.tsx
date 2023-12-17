export default function SidebarCurrentWork({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <a
      href="/storm"
      className="self-stretch justify-start items-center gap-[1rem] inline-flex w-full"
    >
      <div className="flex flex-row w-full h-full items-center space-x-[1rem]">{children}</div>
    </a>
  );
}

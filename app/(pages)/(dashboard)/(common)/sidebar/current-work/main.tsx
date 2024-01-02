import { processMap } from "@/(pages)/(dashboard)/(apollo)/process/[id]/map";

export function SidebarCurrentWork({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <a
      href={processMap.process.id.storm.link("1")}
      className="self-stretch justify-start items-center gap-[1rem] inline-flex w-full h-[4rem]"
    >
      <div className="flex flex-row w-full h-full items-center space-x-[1rem]">{children}</div>
    </a>
  );
}

import { Layer } from "@/(pages)/(common)/layer/main";

export function SidePanelColumn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Layer
        displayName={SidePanelColumn.name}
        sizeStyle="h-full w-full"
        contentStyle="flex flex-col p-[1rem] space-y-[4rem] overflow-auto"
      >
        {children}
      </Layer>
    </div>
  );
}

import { Layer } from "@/(common)/layer/main";

export function SidebarColumn({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Layer
        displayName={SidebarColumn.name}
        sizeStyle="h-full w-full"
        contentStyle="flex flex-col space-y-[2rem] overflow-auto"
      >
        {children}
      </Layer>
    </div>
  );
}

import { Layer } from "@/(pages)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(common)/styles/data";

export function FlowControllerCenter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Layer
        displayName={FlowControllerCenter.name}
        sizeStyle="w-full h-full"
        containerStyle={containerStyles["col"]}
        contentStyle="p-[1rem]"
      >
        {children}
      </Layer>
    </div>
  );
}

import Layer from "@/(pages)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(common)/styles/data";

export default function FlowControllerCenterSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Layer
        displayName={FlowControllerCenterSection.name}
        sizeStyle="w-full h-full"
        containerStyle={containerStyles["row"]}
      >
        {children}
      </Layer>
    </div>
  );
}

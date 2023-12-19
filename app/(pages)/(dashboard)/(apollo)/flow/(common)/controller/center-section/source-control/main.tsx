import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export default function FlowSourceControlSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Layer
        displayName={FlowSourceControlSection.name}
        sizeStyle="w-full h-full"
        containerStyle={containerStyles["col"]}
        backgroundStyle={backgroundStyles["glass-5"]}
        contentStyle="overflow-hidden"
      >
        {children}
      </Layer>
    </div>
  );
}

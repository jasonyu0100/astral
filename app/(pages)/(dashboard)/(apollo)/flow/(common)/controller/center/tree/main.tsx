import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export default function FlowTree({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Layer
        displayName={FlowTree.name}
        sizeStyle="w-full h-full"
        containerStyle={containerStyles["col"]}
        backgroundStyle={backgroundStyles["glass-5"]}
        contentStyle="overflow-hidden"
      >
        <div className="flex flex-col h-full px-[2rem] pb-[2rem] overflow-auto">
          {children}
        </div>
      </Layer>
    </div>
  );
}

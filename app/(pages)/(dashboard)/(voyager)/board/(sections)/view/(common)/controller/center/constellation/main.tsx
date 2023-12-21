import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";

export default function BoardConstellationSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Layer
        displayName={BoardConstellationSection.name}
        sizeStyle="w-full h-full"
        containerStyle={containerStyles["row"]}
        backgroundStyle={backgroundStyles["glass-5"]}
      >
        <div className="w-full h-full relative">{children}</div>
      </Layer>
    </div>
  );
}

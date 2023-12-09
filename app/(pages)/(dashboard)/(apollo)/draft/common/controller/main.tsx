import { backgroundStyles, containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function DraftController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftController.name}
      sizeStyle="w-[1000px] h-[700px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles.row}
    >
      {children}
    </Layer>
  );
}

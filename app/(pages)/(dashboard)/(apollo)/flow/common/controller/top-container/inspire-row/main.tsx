import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/texture/data";
import Texture from "@/(pages)/(dashboard)/(common)/texture/main";

export default function FlowInspireRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Texture
      displayName={FlowInspireRow.name}
      sizeStyle="w-[700px] h-[200px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["row-center"]}
      contentStyle="overflow-auto space-x-[20px] p-[20px]"
    >
      {children}
    </Texture>
  );
}

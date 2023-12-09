import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/texture/data";
import Texture from "@/(pages)/(dashboard)/(common)/texture/main";

export default function FlowStackRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Texture
      displayName={FlowStackRow.name}
      sizeStyle="w-[700px] h-full"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles["row-center"]}
      contentStyle="space-x-[20px] p-[20px] overflow-auto"
    >
      {children}
    </Texture>
  );
}

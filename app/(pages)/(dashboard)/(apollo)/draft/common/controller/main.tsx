import { backgroundStyles, containerStyles } from "@/(pages)/(dashboard)/(common)/texture/data";
import Texture from "@/(pages)/(dashboard)/(common)/texture/main";

export default function DraftController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Texture
      displayName={DraftController.name}
      sizeStyle="w-[1000px] h-[700px]"
      backgroundStyle={backgroundStyles["glass-10"]}
      containerStyle={containerStyles.row}
    >
      {children}
    </Texture>
  );
}

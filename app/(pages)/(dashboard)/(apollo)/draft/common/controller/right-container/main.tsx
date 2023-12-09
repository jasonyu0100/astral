import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/texture/data";
import Texture from "@/(pages)/(dashboard)/(common)/texture/main";

export default function DraftRightContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Texture
      displayName={DraftRightContainer.name}
      sizeStyle="h-[full] w-[840px]"
      backgroundStyle={backgroundStyles["glass-5"]}
      containerStyle={containerStyles["col"]}
    >
      {children}
    </Texture>
  );
}

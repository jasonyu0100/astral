import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export function DriveSectionSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DriveSectionSidebar.name}
      backgroundStyle={backgroundStyles["glass-5"]}
      sizeStyle="w-[500px] h-full"
    >
      {children}
    </Layer>
  );
}


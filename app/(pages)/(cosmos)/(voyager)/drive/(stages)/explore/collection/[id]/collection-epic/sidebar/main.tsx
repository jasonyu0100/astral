import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export function DriveFolderSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DriveFolderSidebar.name}
      backgroundStyle={backgroundStyles["glass-10"]}
      sizeStyle="max-w-[500px] min-w-[250px] w-1/4 h-full"
    >
      {children}
    </Layer>
  );
}

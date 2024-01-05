import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export function DriveManageSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DriveManageSidebar.name}
      backgroundStyle={backgroundStyles["glass-5"]}
      sizeStyle="w-[500px] h-full"
    >
      {children}
    </Layer>
  );
}


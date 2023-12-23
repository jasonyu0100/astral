import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles, containerStyles } from "@/(pages)/(common)/styles/data";

export default function DraftControllerSidePanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <Layer
        displayName={DraftControllerSidePanel.name}
        sizeStyle="w-[350px] h-full"
        backgroundStyle={backgroundStyles["glass-10"]}
      >
        {children}
      </Layer>
  );
}


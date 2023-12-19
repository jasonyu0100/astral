import {
  backgroundStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function SeaStoryContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <Layer
        displayName={SeaStoryContainer.name}
        sizeStyle="flex-grow w-full h-full"
        backgroundStyle={backgroundStyles["glass-20"]}
      >
        {children}
      </Layer>
  );
}

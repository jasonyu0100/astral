import {
  backgroundStyles,
  borderStyles,
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
        sizeStyle="flex-grow max-w-[500px] h-full"
        backgroundStyle={backgroundStyles["glass-20"]}
        borderStyle={`${borderStyles["rounded-t"]}`}
      >
        {children}
      </Layer>
  );
}

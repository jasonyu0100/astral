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
        sizeStyle="w-[420px] h-[700px]"
        backgroundStyle={backgroundStyles["glass-20"]}
        borderStyle={`${borderStyles["rounded"]}`}
      >
        {children}
      </Layer>
  );
}

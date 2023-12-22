import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
  effectStyles,
} from "@/(pages)/(common)/styles/data";

export default function BoardController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      sizeStyle="h-full flex-grow"
      effectStyle={effectStyles["glow-md"]}
      backgroundStyle={backgroundStyles["glass-5"]}
      containerStyle={containerStyles["col"]}
    >{children}</Layer>
  );
}

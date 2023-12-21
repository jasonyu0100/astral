import Layer from "@/(pages)/(common)/layer/main";
import {
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
      sizeStyle="max-w-[1200px] h-full flex-grow"
      effectStyle={effectStyles["glow-md"]}
      containerStyle={containerStyles["col"]}
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
    >{children}</Layer>
  );
}

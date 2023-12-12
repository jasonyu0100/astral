import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function StoreController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <Layer
        displayName={StoreController.name}
        sizeStyle="h-full w-full"
        containerStyle={containerStyles.col}
        backgroundStyle={backgroundStyles["glass-10"]}
        borderStyle={`${borderStyles["rounded"]} ${borderStyles["border-all"]}`}
      >
        {children}
      </Layer>
  );
}

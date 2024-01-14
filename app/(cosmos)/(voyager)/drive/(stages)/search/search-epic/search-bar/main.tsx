import { Layer } from "@/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(common)/styles/data";

export function SearchBar({ children }: {children: React.ReactNode}) {
  return (
    <Layer
      displayName={SearchBar.name}
      sizeStyle="flex-grow max-w-[800px] h-[4rem]"
      containerStyle={containerStyles["row-center"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={`${borderStyles["border-all"]} ${borderStyles.rounded}`}
      contentStyle={"px-[1rem] space-x-[1rem]"}
    >
      {children}
    </Layer>
  );
}

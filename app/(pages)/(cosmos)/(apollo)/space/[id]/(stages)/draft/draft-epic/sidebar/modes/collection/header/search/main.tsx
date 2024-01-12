import { Layer } from "@/(pages)/(common)/layer/main";
import { borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import { SearchBarButton } from "./button/main";
import SearchBarInput from "./input/main";

interface LibraryHeaderSearch extends React.ComponentPropsWithoutRef<"input"> {}

export function CollectionHeaderSearch({ ...props }: LibraryHeaderSearch) {
  return (
    <Layer
      displayName={CollectionHeaderSearch.name}
      sizeStyle="flex-grow h-[3rem]"
      borderStyle={`${borderStyles["border-b"]}`}
      containerStyle={containerStyles.row}
    >
      <SearchBarInput {...props}/>
      <SearchBarButton/>
    </Layer>
  );
}

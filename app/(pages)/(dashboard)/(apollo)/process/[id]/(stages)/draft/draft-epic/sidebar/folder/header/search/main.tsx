import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

interface LibraryHeaderSearch extends React.ComponentPropsWithoutRef<"input"> {}

export function LibraryHeaderSearch({ ...props }: LibraryHeaderSearch) {
  return (
    <div className="flex-grow h-[3rem] pr-[1rem]">
      <Layer
        displayName={LibraryHeaderSearch.name}
        sizeStyle="flex-grow h-full"
        backgroundStyle={backgroundStyles["glass-10"]}
      >
        <input
          className="px-[1rem] text-slate-300 outline-none w-full h-full bg-transparent"
          {...props}
        />
      </Layer>
    </div>
  );
}

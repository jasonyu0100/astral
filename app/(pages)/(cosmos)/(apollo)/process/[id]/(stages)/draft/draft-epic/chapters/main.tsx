import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export function DraftChapters({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={DraftChapters.name}
      sizeStyle="w-full h-[80px]"
      backgroundStyle={backgroundStyles["glass-5"]}
    >
      <div className="flex flex-row items-center justify-center h-full w-full space-x-[1rem] px-[1rem]">
        {children}
      </div>
    </Layer>
  );
}

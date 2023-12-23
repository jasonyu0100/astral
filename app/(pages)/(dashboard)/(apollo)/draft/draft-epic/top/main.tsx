import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function DraftControllerTopRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DraftControllerTopRow.name}
      sizeStyle="w-full h-[50px]"
      containerStyle={containerStyles["col"]}
    >
      <div className="ml-auto flex flex-row h-full items-center px-[20px] space-x-[1rem]">
        {children}
      </div>
    </Layer>
  );
}

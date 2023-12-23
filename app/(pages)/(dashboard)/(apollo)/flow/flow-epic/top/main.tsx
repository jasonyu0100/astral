import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function FlowControllerTopRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={FlowControllerTopRow.name}
      sizeStyle="w-full h-[80px]"
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-5"]}
    >
      <div className="ml-auto flex flex-row h-full items-center px-[20px] space-x-[1rem]">
        {children}
      </div>
    </Layer>
  );
}

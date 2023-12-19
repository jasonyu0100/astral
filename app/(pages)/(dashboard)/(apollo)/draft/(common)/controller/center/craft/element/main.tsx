import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export interface DraftCraftElement extends React.ComponentPropsWithoutRef<"img"> {
}

export default function DraftCraftElement({...props}: DraftCraftElement) {
  return (
    <Layer
      displayName={DraftCraftElement.name}
      sizeStyle="w-[100px] h-[100px] m-[10px]"
      backgroundStyle={backgroundStyles["glass-10"]}
    >
      <img className="w-full h-full" {...props}/>
    </Layer>
  );
}

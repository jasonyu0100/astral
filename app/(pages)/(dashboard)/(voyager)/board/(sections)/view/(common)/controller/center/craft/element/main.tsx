import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";

export interface BoardCraftElement extends React.ComponentPropsWithoutRef<"img"> {
}

export default function BoardCraftElement({...props}: BoardCraftElement) {
  return (
    <Layer
      displayName={BoardCraftElement.name}
      sizeStyle="w-[100px] h-[100px] m-[10px]"
      backgroundStyle={backgroundStyles["glass-10"]}
    >
      <img className="w-full h-full" {...props}/>
    </Layer>
  );
}

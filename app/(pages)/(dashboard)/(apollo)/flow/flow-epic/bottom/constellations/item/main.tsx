import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { ApolloConstellation } from "@/(pages)/(dashboard)/(apollo)/data";

export interface FlowConstellationProps
  extends React.ComponentPropsWithoutRef<"button"> {
  constellation: ApolloConstellation;
}

export default function FlowConstellation({
  constellation,
  ...props
}: FlowConstellationProps) {
  return (
    <button {...props}>
      <Layer
        displayName={FlowConstellation.name}
        sizeStyle="w-[80px] h-[100px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        containerStyle={containerStyles["row-centered"]}
        contentStyle="flex-shrink-0"
      >
        <p className="font-bold text-white">{constellation.name}</p>
      </Layer>
    </button>
  );
}

import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles, containerStyles } from "@/(pages)/(common)/styles/data";

export default function DraftWrapper({children } : {children: React.ReactNode}) {
    return <Layer
        sizeStyle="h-full flex-grow"
        containerStyle={containerStyles["row"]}
        backgroundStyle={backgroundStyles["glass-5"]}
      >
        {children}
      </Layer>
}
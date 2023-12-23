import Layer from "@/(pages)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(common)/styles/data";

export default function DriveWrapper({ children } : { children: React.ReactNode}) {
    return <Layer sizeStyle="w-full h-full" containerStyle={containerStyles.row}>{children}</Layer>
}
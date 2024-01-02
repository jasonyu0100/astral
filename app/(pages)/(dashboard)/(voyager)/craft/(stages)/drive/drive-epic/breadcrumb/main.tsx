import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";

export function DriveBreadcrumb({  children } : {children: React.ReactNode}) {
    return <Layer
            displayName={DriveBreadcrumb.name}
            sizeStyle="w-full h-[4rem]"
            containerStyle={containerStyles["row-center"]}
            borderStyle={borderStyles["border-b"]}
            contentStyle={"space-x-[1rem] "}
          >
            <div className="flex flex-row space-x-[1rem]">
                {children}
            </div>
          </Layer>
}
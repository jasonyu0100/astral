import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";

export default function ExploreBreadcrumb({  children } : {children: React.ReactNode}) {
    return <Layer
            displayName={ExploreBreadcrumb.name}
            sizeStyle="w-full h-[6rem]"
            containerStyle={containerStyles["row-center"]}
            backgroundStyle={backgroundStyles["glass-5"]}
            borderStyle={borderStyles["rounded-l"]}
            contentStyle={"px-[3rem] space-x-[2rem] "}
          >
            <div className="flex flex-row space-x-[1rem]">
                {children}
            </div>
          </Layer>
}
import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import React from "react";

export default function ExploreController({children} : {children: React.ReactNode}) {
    return <Layer
            displayName={ExploreController.name}
          sizeStyle="flex-grow h-full"
          containerStyle={containerStyles["col"]}
          backgroundStyle={backgroundStyles["glass-5"]}
          contentStyle="px-[4rem] pt-[4rem] space-y-[2rem]"
        >
            {children}
        </Layer>
}
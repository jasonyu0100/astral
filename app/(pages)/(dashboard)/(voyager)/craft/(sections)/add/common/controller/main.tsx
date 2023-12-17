import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";
import BreadCrumbWrapper from "@/(pages)/(common)/breadcrumb/wrapper/main";
import BreadCrumb from "@/(pages)/(common)/breadcrumb/main";

export default function CraftAddController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BreadCrumbWrapper>
      <Layer
        displayName={CraftAddController.name}
        sizeStyle="h-full w-full"
        containerStyle={containerStyles.col}
        backgroundStyle={backgroundStyles["glass-10"]}
        borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
        contentStyle={"space-y-[50px] p-[20px] overflow-auto"}
      >
        {children}
      </Layer>
      <BreadCrumb>/craft/brand/icon</BreadCrumb>
    </BreadCrumbWrapper>
  );
}

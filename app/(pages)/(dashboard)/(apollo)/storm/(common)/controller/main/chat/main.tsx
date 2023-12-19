import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function StormChatBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full" style={{ height: "calc(100% - 160px)" }}>
      <Layer
        displayName={StormChatBody.name}
        sizeStyle="w-full h-full"
        containerStyle={containerStyles.col}
        backgroundStyle={backgroundStyles["glass-5"]}
        contentStyle="py-[40px] px-[60px] space-y-[30px] overflow-auto"
      >
        {children}
      </Layer>
    </div>
  );
}

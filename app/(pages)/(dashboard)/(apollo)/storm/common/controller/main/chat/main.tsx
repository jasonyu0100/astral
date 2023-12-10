import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(dashboard)/(common)/layer/data";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function StormChatBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={StormChatBody.name}
      sizeStyle="w-full h-[550px]"
      containerStyle={containerStyles.col}
      borderStyle=""
      contentStyle="py-[40px] px-[60px] space-y-[30px]"
    >
      {children}
    </Layer>
  );
}

import Texture from "@/(pages)/(dashboard)/(common)/texture/main";

export default function StormChatBody({children} : { children : React.ReactNode}) {
  return (
    <Texture
      displayName={StormChatBody.name}
      sizeStyle="w-full h-[550px]"
      backgroundStyle="bg-gradient-to-r from-slate-100 to-slate-500 opacity-5"
      borderStyle=""
    >
      <div className="flex flex-col flex-shrink-0 w-full h-full py-[40px] px-[60px] space-y-[30px]">
        {children}
      </div>
    </Texture>
  );
}

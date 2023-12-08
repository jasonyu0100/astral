import StormPartnerChatMessage from "./message/partner/main";
import StormYouChatMessage from "./message/you/main";

export default function StormChatBody({children} : { children : React.ReactNode}) {
  return (
    <div className="flex flex-col flex-shrink-0 bg-slate-200 bg-opacity-5 w-full h-[550px] py-[40px] px-[60px] space-y-[30px]">
      {children}
    </div>
  );
}

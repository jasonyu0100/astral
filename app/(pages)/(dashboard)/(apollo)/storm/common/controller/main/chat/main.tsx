import PartnerChatMessage from "./message/partner/main";
import YourChatMessage from "./message/your/main";

export default function StormChatBody() {
  return (
    <div className="flex flex-col flex-shrink-0 bg-slate-200 bg-opacity-5 w-full h-[550px] py-[40px] px-[60px] space-y-[30px]">
      <PartnerChatMessage>123132</PartnerChatMessage>
      <YourChatMessage>1231231132</YourChatMessage>
      <YourChatMessage>1231231132</YourChatMessage>
      <YourChatMessage>1231231132</YourChatMessage>
    </div>
  );
}

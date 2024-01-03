import { StormSidePanelAvatar } from "../../avatar/main";

export function StormSidePanelChat({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-center space-x-[1rem]">
      <StormSidePanelAvatar />
      <p className="text-white font-bold text-lg">Hello World - Chat</p>
    </div>
  );
}

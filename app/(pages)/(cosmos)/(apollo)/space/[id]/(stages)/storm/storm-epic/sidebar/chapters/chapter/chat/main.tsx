import { StormChapterAvatar } from "./avatar/main";

interface StormSidePanelChatProps
  extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  active: boolean;
}

export function StormChapterChat({
  children,
  active,
  ...props
}: StormSidePanelChatProps) {
  return (
    <button {...props}>
      <div className="flex flex-row items-center space-x-[1rem]">
        <StormChapterAvatar />
        {active ? (
          <p className="text-slate-300 font-bold text-lg">{children}</p>
        ) : (
          <p className="text-slate-500 font-bold text-lg">{children}</p>
        )}
      </div>
    </button>
  );
}

interface StormSidePanelSectionToggleProps {
  show: boolean;
}

export default function StormChapterIndicator({
  show,
}: StormSidePanelSectionToggleProps) {
  return (
    <>
      {show && <div className="w-[16px] h-[16px] bg-slate-500 rounded-full" />}
    </>
  );
}

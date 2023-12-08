export default function QuestGuideWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative"
      style={{ width: "calc(100% - 200px)", height: "100%" }}
    >
      {children}
    </div>
  );
}


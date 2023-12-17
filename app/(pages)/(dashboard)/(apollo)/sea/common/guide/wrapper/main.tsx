export default function SeaGuideWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative max-w-[1500px]"
      style={{ width: "calc(100% - 200px)", height: "100%" }}
    >
      {children}
    </div>
  );
}


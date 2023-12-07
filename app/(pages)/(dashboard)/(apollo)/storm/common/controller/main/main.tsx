export default function StormControllerMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-shrink-0 rounded-md w-[700px] h-[700px]">
      {children}
    </div>
  );
}

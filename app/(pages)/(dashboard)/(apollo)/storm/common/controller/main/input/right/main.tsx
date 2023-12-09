
export default function StormMessageInputRight({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[100px] h-[50px] flex flex-row justify-between items-center">
        {children}
    </div>
  );
}

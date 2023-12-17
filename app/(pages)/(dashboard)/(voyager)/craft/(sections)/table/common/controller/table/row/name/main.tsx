export default function CraftTableName({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="basis-1/4 flex justify-center items-center p-[20px]">
      <p className="text-center text-white text-[18.82px] font-bold font-['Creato Display'] leading-[30.12px]">
        {children}
      </p>
    </div>
  );
}

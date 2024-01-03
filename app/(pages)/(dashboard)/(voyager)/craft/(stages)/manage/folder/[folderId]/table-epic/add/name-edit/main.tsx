export function TableRowNameEdit({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="basis-1/4 flex justify-center items-center p-[2rem]">
      <p className="text-center text-white text-[18.82px] font-bold font-['Creato Display'] leading-[30.12px]">
        {children}
      </p>
    </div>
  );
}

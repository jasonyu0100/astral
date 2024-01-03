export function TableRowDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="basis-1/2 flex justify-center items-center p-[2rem]">
      <p className="text-white text-[15.06px] font-normal leading-snug">
        {children}
      </p>
    </div>
  );
}

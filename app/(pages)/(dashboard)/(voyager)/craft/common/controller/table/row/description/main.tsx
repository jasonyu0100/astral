export default function CraftTableDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="basis-1/4 flex justify-center items-center p-[20px]">
      <p className="w-[213.65px] text-white text-[15.06px] font-normal leading-snug">
        {children}
      </p>
    </div>
  );
}

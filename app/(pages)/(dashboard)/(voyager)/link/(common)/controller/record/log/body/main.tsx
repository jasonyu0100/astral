export default function RecordLogBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="w-full text-white text-base font-normal leading-normal">
      {children}
    </span>
  );
}

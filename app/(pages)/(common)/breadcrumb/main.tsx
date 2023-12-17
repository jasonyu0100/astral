export default function BreadCrumb({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full absolute bottom-[1rem] left-[15px]">
      <p className="text-white opacity-30 font-bold">{children}</p>
    </div>
  );
}

export default function HeaderTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-white text-md font-bold">{children}</p>;
}

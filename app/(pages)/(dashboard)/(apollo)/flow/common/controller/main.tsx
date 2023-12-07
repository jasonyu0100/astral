export default function FlowController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-shrink-0">
      {children}
    </div>
  );
}

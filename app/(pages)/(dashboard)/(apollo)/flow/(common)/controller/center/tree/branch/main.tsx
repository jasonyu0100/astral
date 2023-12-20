export default function FlowSourceControlBranch({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row space-x-[4rem] items-center">
      {children}
    </div>
  );
}

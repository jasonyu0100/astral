export default function FlowControllerSteps({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex-grow flex flex-row space-x-[30px] overflow-auto">
      {children}
    </div>
  );
}

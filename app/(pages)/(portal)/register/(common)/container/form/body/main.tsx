export function PortalFormBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center space-y-[30px] h-full w-full">
      {children}
    </div>
  );
}

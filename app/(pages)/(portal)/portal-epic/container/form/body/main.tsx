export function PortalFormBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center space-y-[2rem] w-full">
      {children}
    </div>
  );
}

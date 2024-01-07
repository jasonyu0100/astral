export function PortalForm({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center p-[30px] h-full w-full overflow-auto">
      {children}
    </div>
  );
}

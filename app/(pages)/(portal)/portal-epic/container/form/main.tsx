export function PortalForm({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center p-[5%] h-full w-full overflow-auto">
      {children}
    </div>
  );
}

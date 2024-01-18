export function FormContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center w-full h-full space-y-[2rem]">
      {children}
    </div>
  );
}

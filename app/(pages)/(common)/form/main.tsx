export function Form({ children }: { children: React.ReactNode }) {
  return (
    <form className="mt-8 space-y-6">
      {children}
    </form>
  );
}

"use client";

export default function PillarsController({ children }: { children: React.ReactNode}) {
  return (
      <div className="flex flex-col w-full grow overflow-auto">
        {children}
      </div>
  );
}


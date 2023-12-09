"use client";

export default function PillarsController({ children }: { children: React.ReactNode}) {
  return (
      <div className="w-full overflow-auto" style={{ height: "100%" }}>
        {children}
      </div>
  );
}


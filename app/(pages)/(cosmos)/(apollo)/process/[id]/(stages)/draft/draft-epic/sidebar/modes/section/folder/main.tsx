import React from "react";

export function SectionFolder({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row items-center space-x-[2rem]">{children}</div>
  );
}

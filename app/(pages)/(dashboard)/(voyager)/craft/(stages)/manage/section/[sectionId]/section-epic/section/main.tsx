import React from "react";

export function DriveSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col space-y-[2rem] w-full">
      {children}
    </div>
  );
}

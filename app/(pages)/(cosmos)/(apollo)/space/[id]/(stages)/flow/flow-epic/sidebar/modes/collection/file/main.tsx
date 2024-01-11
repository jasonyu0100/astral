import React from "react";

export function CollectionFile({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row items-center space-x-[2rem]">{children}</div>
  );
}

"use client";

import DraftPolaroid from "../polaroid/main";

export default function ControllerContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-shrink-0 w-full h-[700px]">
      {children}
    </div>
  );
}

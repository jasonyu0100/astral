"use client";

interface SpacesSpaceProps{
  children: React.ReactNode;
}

export function SpacesSpace({ children }: SpacesSpaceProps) {
  return (
    <div className="flex flex-row w-full space-x-[3rem] px-[1rem] py-[1rem]">
      {children}
    </div>
  );
}

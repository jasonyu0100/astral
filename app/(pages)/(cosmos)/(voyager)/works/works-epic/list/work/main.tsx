"use client";

interface WorksWorkProps{
  children: React.ReactNode;
}

export function WorksWork({ children }: WorksWorkProps) {
  return (
    <div className="flex flex-row w-full px-[1rem] py-[1rem]">
      {children}
    </div>
  );
}

"use client";

export default function CraftTableContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col divide-y-2 divide-slate-600 w-full">{children}</div>;
}

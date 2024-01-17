import { useState } from "react";

interface PortalFormSelectProps
  extends React.ComponentPropsWithoutRef<"select"> {
  title: string;
  children: React.ReactNode;
}

export function FormSelect({
  title,
  children,
  ...props
}: PortalFormSelectProps) {
  const [value, changeValue] = useState("");

  return (
    <div className="flex flex-col w-full border-b-[1px] border-slate-500 ">
      <label className="mb-1 text-xs font-bold text-slate-300">{title}</label>
      <select
        title="position"
        className="w-full h-full appearance-none border-none outline-none text-slate-950 text-xl font-bold leading-9 "
        {...props}
        value={props.value || value}
        onChange={(e) =>
          props.onChange ? e.target.value : changeValue(e.target.value)
        }
      >
        {children}
      </select>
    </div>
  );
}

import { useState } from "react";

interface PortalFormInputProps
  extends React.ComponentPropsWithoutRef<"input"> {}

export function FormInput({ title, ...props }: PortalFormInputProps) {
  const [value, changeValue] = useState("");

  return (
    <div className="flex flex-col w-full border-b-[1px] border-slate-500">
      {(value !== "") && (
        <label className="mb-1 text-xs font-bold text-slate-300">{title}</label>
      )}
      <input
        className="w-full h-full appearance-none bg-transparent outline-none border-none text-slate-950 text-xl font-bold"
        name="tag"
        {...props}
        value={props.value || value}
        onChange={(e) => props.onChange?(e.target.value) : changeValue(e.target.value)}
      />
    </div>
  );
}

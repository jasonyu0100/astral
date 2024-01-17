interface FormTextAreaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  title: string;
}

export function FormTextArea({ title, ...props }: FormTextAreaProps) {
  return (
    <div className="w-full border-b-[1px] border-slate-500  bg-slate-50">
      <label className="m-2 text-xs font-bold text-slate-300">{title}</label>
      <textarea
        className="w-full h-full appearance-none bg-transparent outline-none border-none text-slate-800 text-md font-bold p-[0.5rem]"
        {...props}
      />
    </div>
  );
}

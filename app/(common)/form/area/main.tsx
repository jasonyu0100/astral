interface FormTextAreaProps extends React.ComponentPropsWithoutRef<"textarea"> {
}

export function FormTextArea({...props} : FormTextAreaProps) {
  return (
    <div className="w-full border-b-[1px] border-slate-500">
      <textarea
        className="w-full h-full appearance-none bg-transparent outline-none border-none text-slate-950 text-xl font-bold"
        {...props}
      />
    </div>
  );
}

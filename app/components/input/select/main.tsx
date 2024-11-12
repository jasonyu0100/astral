interface FormSelectProps extends React.ComponentPropsWithoutRef<'select'> {
  children: React.ReactNode;
}

export function AstralSelectInput({ children, ...props }: FormSelectProps) {
  return (
    <select
      {...props}
      className='text-md h-full w-full flex-shrink-0 flex-grow appearance-none border-b-[1px] border-slate-300 bg-transparent py-[1rem] font-bold text-slate-300 outline-none placeholder:text-slate-300'
    >
      {children}
    </select>
  );
}

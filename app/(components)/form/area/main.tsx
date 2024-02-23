interface FormTextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  title: string;
}

export function FormTextArea({ title, ...props }: FormTextAreaProps) {
  return (
    <div className='flex flex-col'>
      <label className='mb-1 text-xs font-bold text-slate-400'>{title}</label>
      <div className='w-full border-b-[1px] border-slate-500'>
        <textarea
          className='text-md h-full w-full appearance-none border-none bg-transparent p-[0.5rem] font-bold text-slate-800 outline-none'
          {...props}
        />
      </div>
    </div>
  );
}

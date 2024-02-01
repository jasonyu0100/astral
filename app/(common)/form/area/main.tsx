interface FormTextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  title: string;
}

export function FormTextArea({ title, ...props }: FormTextAreaProps) {
  return (
    <div className="flex flex-col">
      <label className='mb-1 text-xs font-bold text-slate-400'>{title}</label>
      <div className='w-full border-b-[1px] border-slate-500  bg-slate-50'>
        <textarea
          className='w-full h-full appearance-none bg-transparent outline-none border-none text-slate-800 text-md font-bold p-[0.5rem]'
          {...props}
        />
      </div>
    </div>
  );
}

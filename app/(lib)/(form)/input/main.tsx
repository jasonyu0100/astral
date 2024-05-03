interface PortalFormInputProps
  extends React.ComponentPropsWithoutRef<'input'> {}

export function FormInput({ title, ...props }: PortalFormInputProps) {
  return (
    <div className='flex w-full flex-col'>
      <label className='mb-1 text-xs font-bold text-slate-400'>{title}</label>
      <div className='flex h-[4rem] w-full flex-col border-b-[1px] border-slate-500'>
        <input
          className='
            h-full w-full appearance-none border-none 
            bg-transparent px-[0.5rem] text-xl font-bold 
            text-slate-950 outline-none
            placeholder:text-slate-400
          '
          name='tag'
          {...props}
        />
      </div>
    </div>
  );
}

interface PortalFormInputProps
  extends React.ComponentPropsWithoutRef<'input'> {}

export function FormInput({ title, ...props }: PortalFormInputProps) {
  return (
    <div className='flex flex-col w-full'>
      {props.value !== '' && (
        <label className='mb-1 text-xs font-bold text-slate-400'>{title}</label>
      )}
      <div className='flex flex-col w-full border-b-[1px] border-slate-500 h-[40px]'>
        <input
          className='w-full h-full appearance-none bg-transparent outline-none border-none text-slate-950 text-xl font-bold placeholder:text-slate-400
          
          px-[0.5rem]
          '
          name='tag'
          {...props}
        />
      </div>
    </div>
  );
}

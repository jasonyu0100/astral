interface PortalFormInputProps
  extends React.ComponentPropsWithoutRef<'input'> {}

export function PortalFormInput({ title, ...props }: PortalFormInputProps) {
  return (
    <div className='w-full h-[50px] border-b-[1px] border-slate-500'>
      <input
        className='w-full h-full appearance-none bg-transparent outline-none border-none text-slate-950 text-3xl font-extraBold leading-9 placeholder:text-slate-400'
        name='tag'
        {...props}
      />
    </div>
  );
}

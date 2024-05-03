interface PortalFormInputProps
  extends React.ComponentPropsWithoutRef<'input'> {}

export function PortalFormInput({ title, ...props }: PortalFormInputProps) {
  return (
    <div className='h-[50px] px-[5px] w-full border-b-[1px] border-slate-500'>
      <input
        className='h-full w-full appearance-none border-none bg-transparent font-extraBold text-3xl leading-9 text-slate-950 outline-none placeholder:text-slate-400'
        name='tag'
        {...props}
      />
    </div>
  );
}

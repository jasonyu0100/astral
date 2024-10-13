interface FormTextAreaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {}

export function AstralTextAreaInput({ ...props }: FormTextAreaProps) {
  return (
    <textarea
      {...props}
      className='text-md h-full flex-shrink-0 flex-grow appearance-none border-b-[1px] border-slate-300 bg-transparent font-bold text-slate-300 outline-none placeholder:text-slate-300'
      style={{ resize: 'none' }}
    />
  );
}

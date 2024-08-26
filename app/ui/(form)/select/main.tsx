interface PortalFormSelectProps
  extends React.ComponentPropsWithoutRef<'select'> {
  title: string;
  children?: React.ReactNode;
}

export function FormSelect({
  title,
  children,
  ...props
}: PortalFormSelectProps) {
  return (
    <div className='flex w-full flex-col'>
      <label className='mb-1 text-xs font-bold text-slate-400'>{title}</label>
      <div className='relative flex h-[4rem] w-full flex-col items-center border-b-[1px] border-slate-500'>
        <select
          title='position'
          className='h-full w-full appearance-none border-none px-[0.5rem] text-xl font-bold leading-9 text-slate-500
          outline-none'
          {...props}
          value={props.value}
          onChange={props.onChange}
        >
          {children}
        </select>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='absolute right-[0px] h-[4rem] w-[4rem]'
          viewBox='0 0 24 24'
          fill='none'
        >
          <mask
            id='mask0_2965_13'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='24'
            height='24'
          >
            <rect width='24' height='24' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_2965_13)'>
            <path d='M12 15L7 10H17L12 15Z' fill='#CBD5E1' />
          </g>
        </svg>
      </div>
    </div>
  );
}

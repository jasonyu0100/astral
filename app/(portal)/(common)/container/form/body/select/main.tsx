interface PortalFormSelectProps
  extends React.ComponentPropsWithoutRef<'select'> {
  children?: React.ReactNode;
}

export function PortalFormSelect({
  children,
  ...props
}: PortalFormSelectProps) {
  return (
    <div className='relative flex h-[50px] w-full flex-row items-center border-b-[1px] border-slate-500'>
      <select
        title='position'
        className='h-full w-full appearance-none border-none bg-transparent font-extraBold text-3xl leading-9 text-slate-800 outline-none'
        {...props}
      >
        {children}
      </select>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='absolute right-[0px] h-[50px] w-[50px]'
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
  );
}

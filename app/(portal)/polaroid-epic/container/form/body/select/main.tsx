interface PortalFormSelectProps
  extends React.ComponentPropsWithoutRef<'select'> {
  children: React.ReactNode;
}

export function PortalFormSelect({
  children,
  ...props
}: PortalFormSelectProps) {
  return (
    <div className='relative w-full h-[50px] border-b-[1px] border-slate-500 flex flex-row items-center'>
      <select
        title='position'
        className='w-full h-full appearance-none border-none outline-none text-slate-500 text-3xl font-extraBold leading-9 '
        {...props}
      >
        {children}
      </select>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-[50px] h-[50px] absolute right-[0px]'
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

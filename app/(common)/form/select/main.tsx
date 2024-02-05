import { useState } from 'react';

interface PortalFormSelectProps
  extends React.ComponentPropsWithoutRef<'select'> {
  title: string;
  children: React.ReactNode;
}

export function FormSelect({
  title,
  children,
  ...props
}: PortalFormSelectProps) {

  return (
    <div className='flex flex-col w-full'>
      <label className='mb-1 text-xs font-bold text-slate-400'>{title}</label>
      <div className='relative flex flex-col w-full items-center border-b-[1px] border-slate-500 bg-slate-50 h-[60px]'>
        <select
          title='position'
          className='w-full h-full appearance-none border-none outline-none text-slate-500 text-xl font-bold leading-9
          px-[0.5rem]'
          {...props}
          value={props.value}
          onChange={props.onChange}
        >
          {children}
        </select>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-[60px] h-[60px] absolute right-[0px]'
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

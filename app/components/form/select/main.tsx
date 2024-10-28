import { AstralChevronDownIcon } from '@/icons/chevron-down/main';

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
          className='h-full w-full appearance-none border-none bg-transparent px-[0.5rem] text-lg font-bold text-slate-300 outline-none'
          {...props}
          value={props.value}
          onChange={props.onChange}
        >
          {children}
        </select>
        <div className='absolute right-0 flex h-[3rem] w-[3rem] items-center justify-center'>
          <AstralChevronDownIcon />
        </div>
      </div>
    </div>
  );
}

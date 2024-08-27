import { AstralArrowDropDown } from '@/icons/arrow-drop-down/main';

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
        className='h-full w-full appearance-none border-none bg-transparent font-extraBold text-3xl leading-9 text-slate-500 outline-none'
        {...props}
      >
        {children}
      </select>
      <AstralArrowDropDown />
    </div>
  );
}

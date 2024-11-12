import { FormInputProps } from '@/props/main';

interface PortalFormInputProps extends FormInputProps {
  emoji?: string;
}

export function PortalFormInput({ emoji, ...props }: PortalFormInputProps) {
  return (
    <div className='flex h-[50px] w-full flex-row items-center border-b-[1px] border-slate-500'>
      {emoji && (
        <p className='mr-[0.5rem] text-3xl leading-9 text-slate-400'>{emoji}</p>
      )}
      <input
        className='h-full w-full appearance-none border-none bg-transparent font-extraBold text-3xl leading-9 text-slate-950 outline-none placeholder:text-slate-300'
        name='tag'
        {...props}
      />
    </div>
  );
}

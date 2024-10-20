import { DivInputProps } from '@/props/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function CustomisableModalContents({ children }: InputProps) {
  return (
    <div
      className={`flex flex-shrink-0 flex-row items-center justify-center rounded-[2rem] border-[1px] border-slate-300 border-opacity-30 bg-slate-800 bg-opacity-30 p-[2rem]`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {children}
    </div>
  );
}

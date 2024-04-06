import { ButtonInputProps } from '@/(logic)/types/element/main';

interface InputProps extends ButtonInputProps {
  children: React.ReactNode;
  active: boolean;
}

export function BreadcrumbsLink({ children, active, ...props }: InputProps) {
  return (
    <button {...props}>
      {active ? (
        <p className='font-extraBold text-xl text-slate-400 animate-pulse-slow'>{children}</p>
      ) : (
        <p className='font-extraBold text-xl text-slate-500'>{children}</p>
      )}
    </button>
  );
}

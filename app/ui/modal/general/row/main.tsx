import { DivInputProps } from '@/props/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function CustomisableModalRow({ children, ...props }: InputProps) {
  return (
    <div
      {...props}
      className={`flex w-full flex-row items-center justify-between space-x-[2rem] ${props.className}`}
    >
      {children}
    </div>
  );
}

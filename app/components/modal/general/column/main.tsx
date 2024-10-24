import { DivInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function CustomisableModalColumn({ children, ...props }: InputProps) {
  return (
    <div
      {...props}
      className={ctwn(`flex w-full flex-col space-y-[2rem] ${props.className}`)}
    >
      {children}
    </div>
  );
}

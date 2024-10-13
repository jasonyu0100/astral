import { DivInputProps } from '@/props/main';
import { cn } from '@/utils/cn';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function CustomisableModalColumn({ children, ...props }: InputProps) {
  return (
    <div
      {...props}
      className={cn(`flex w-full flex-col space-y-[2rem] ${props.className}`)}
    >
      {children}
    </div>
  );
}

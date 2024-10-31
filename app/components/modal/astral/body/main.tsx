import { DivInputProps } from '@/props/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function AstralModalBody({ children, ...props }: InputProps) {
  return (
    <div
      className={`flex w-[800px] flex-grow flex-row items-center space-x-[2rem] ${props.className}`}
    >
      {children}
    </div>
  );
}

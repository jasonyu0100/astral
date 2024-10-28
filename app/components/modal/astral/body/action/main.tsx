import { DivInputProps } from '@/props/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function AstralModalBodyContents({ children, ...props }: InputProps) {
  return (
    <div className={`flex w-full flex-col space-y-[2rem] ${props.className}`}>
      {children}
    </div>
  );
}

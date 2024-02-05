import { ButtonInputProps } from '@/(common)/types/main';
import clsx from 'clsx';

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface InputProps extends ButtonInputProps {
  variant?: string;
  children: React.ReactNode;
}

export function FormButton({ children, variant, ...props }: InputProps) {
  return (
    <button
      {...props}
      className={clsx(`w-full h-[60px] bg-slate-950 flex flex-col justify-center items-center ${props.className}`, {
        "bg-black": variant === ButtonVariant.PRIMARY || variant === undefined,
        "bg-white border-[3px] border-black": variant === ButtonVariant.SECONDARY,
      })}
    >
      <p className={clsx('text-center text-3xl font-bold leading-9', {
        "text-white": variant === ButtonVariant.PRIMARY || variant === undefined,
        "text-black": variant === ButtonVariant.SECONDARY,
      })}>
        {children}
      </p>
    </button>
  );
}

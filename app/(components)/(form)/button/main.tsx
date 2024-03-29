import { ButtonInputProps } from '@/(logic)/types/element/main';
import { cn } from '@/(logic)/utils/cn';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface InputProps extends ButtonInputProps {
  variant?: string;
  children: React.ReactNode;
}

export function FormButton({ children, variant, ...props }: InputProps) {
  return (
    <button
      {...props}
      className={cn(
        `flex h-[60px] w-full flex-col items-center justify-center bg-slate-950 ${props.className}`,
        {
          'bg-black':
            variant === ButtonVariant.PRIMARY || variant === undefined,
          'border-[3px] border-black bg-white':
            variant === ButtonVariant.SECONDARY,
        },
      )}
    >
      <p
        className={cn('text-center text-3xl font-bold leading-9', {
          'text-white':
            variant === ButtonVariant.PRIMARY || variant === undefined,
          'text-black': variant === ButtonVariant.SECONDARY,
        })}
      >
        {children}
      </p>
    </button>
  );
}

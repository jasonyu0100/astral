import { ButtonInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export enum FormButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface InputProps extends ButtonInputProps {
  variant: string;
  children?: React.ReactNode;
}

export function FormButton({ children, variant, ...props }: InputProps) {
  return (
    <button
      {...props}
      className={ctwn(
        `flex h-[4rem] w-full flex-col items-center justify-center bg-slate-950 ${props.className}`,
        {
          'bg-black':
            variant === FormButtonVariant.PRIMARY || variant === undefined,
          'border-[3px] border-black bg-white':
            variant === FormButtonVariant.SECONDARY,
        },
      )}
    >
      <p
        className={ctwn('text-center text-3xl font-bold leading-9', {
          'text-white':
            variant === FormButtonVariant.PRIMARY || variant === undefined,
          'text-black': variant === FormButtonVariant.SECONDARY,
        })}
      >
        {children}
      </p>
    </button>
  );
}

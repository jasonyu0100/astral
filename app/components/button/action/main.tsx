import { ButtonInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export function AstralButtonRoundedAction({
  children,
  ...props
}: ButtonInputProps) {
  return (
    <button
      {...props}
      className={ctwn(
        `flex h-[3rem] w-[3rem] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 p-[1rem] text-white ${props.className}`,
      )}
    >
      {children}
    </button>
  );
}

import { SvgInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export function AstralUploadIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className={ctwn(
        'h-[1.5rem] w-[1.5rem] cursor-pointer fill-slate-300',
        props.className,
      )}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
    >
      <path d='M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z' />
    </svg>
  );
}

import { SvgInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export function AstralSubjectIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className={ctwn(
        'h-[1.5rem] w-[1.5rem] cursor-pointer fill-slate-300',
        props.className,
      )}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill='#e8eaed'
    >
      <path d='M160-200v-80h400v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Z' />
    </svg>
  );
}

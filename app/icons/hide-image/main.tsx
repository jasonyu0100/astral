import { SvgInputProps } from '@/props/main';
import { ctwn } from '@/utils/cn';

export function AstralHideImageIcon({ ...props }: SvgInputProps) {
  return (
    <svg
      {...props}
      className={ctwn(
        'h-[1.5rem] w-[1.5rem] cursor-pointer fill-slate-300',
        props.className,
      )}
      xmlns='http://www.w3.org/2000/svg'
      enableBackground='new 0 0 24 24'
      viewBox='0 0 24 24'
    >
      <g>
        <rect fill='none' height='24' width='24' />
      </g>
      <g>
        <g>
          <path d='M19,5v11.17l2,2V5c0-1.1-0.9-2-2-2H5.83l2,2H19z' />
          <path d='M2.81,2.81L1.39,4.22L3,5.83V19c0,1.1,0.9,2,2,2h13.17l1.61,1.61l1.41-1.41L2.81,2.81z M5,19V7.83l7.07,7.07L11.25,16 L9,13l-3,4h8.17l2,2H5z' />
        </g>
      </g>
    </svg>
  );
}

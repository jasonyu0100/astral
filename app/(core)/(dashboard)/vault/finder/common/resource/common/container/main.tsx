import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { DivInputProps } from '@/props/main';
import { borderFx, roundedFx } from '@/style/data';

interface InputProps extends DivInputProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export function ResourceContainer({ children, onClick }: InputProps) {
  return (
    <GlassWindowFrame
      className='aspect-square'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents
        onClick={onClick}
        className={`flex w-full cursor-pointer flex-col justify-evenly`}
      >
        {children}
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}

import { GlassEffectWrapper } from '@/(components)/(glass)/effect/main';
import { roundedFx } from '@/(style)/data';
import { FileElem } from '@/(model)/elements/file/main';
import { DivInputProps } from '@/(types)/props/main';

interface ProfileCoverProps extends DivInputProps {
  coverFx?: string;
  file: FileElem;
}

export function ProfileCover({ coverFx, file, ...props }: ProfileCoverProps) {
  return (
    <GlassEffectWrapper
      className={props.className}
      roundedFx={roundedFx['rounded-full']}
    >
      <img
        className={`h-[50px] w-[50px] animate-pulse-slow rounded-full ${coverFx || ''}`}
        src={file.src}
        alt={file.title}
      />
    </GlassEffectWrapper>
  );
}

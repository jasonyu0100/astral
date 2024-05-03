'use client';
import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';
import { borderFx, containerFx } from '@/(fx)/data';

export function CreativeRow({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={CreativeRow.name}
      sizeFx='w-full h-full'
      borderFx={borderFx['border-b']}
      className={`flex flex-row flex-wrap gap-[2rem] p-[2rem]`}
    >
      {children}
    </GlassAreaContainer>
  );
}

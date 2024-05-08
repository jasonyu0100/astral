import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, borderFx, roundedFx } from '@/(style)/data';
import { FormInputProps } from '@/(types)/element/main';

export function StormChatMessageInput({ ...props }: FormInputProps) {
  return (
    <GlassAreaContainer
      name={StormChatMessageInput.name}
      sizeFx='max-w-[600px] flex-grow h-[50px]'
      glassFx={glassFx['glass-10']}
      roundedFx={roundedFx['rounded-full']}
    >
      <input
        className='h-full w-full animate-pulse-slow bg-transparent px-[2rem] font-bold text-slate-300 outline-none'
        placeholder='Type a message...'
        {...props}
      />
    </GlassAreaContainer>
  );
}

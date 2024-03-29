import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassStyles, borderStyles, roundedStyles } from '@/(design)/(styles)/data';
import { FormInputProps } from '@/(types)/main';

export function StormChatMessageInput({ ...props }: FormInputProps) {
  return (
    <GlassAreaContainer
      name={StormChatMessageInput.name}
      size='max-w-[600px] flex-grow h-[50px]'
      glass={glassStyles['glass-10']}
      rounded={roundedStyles['rounded-full']}
    >
      <input
        className='h-full w-full animate-pulse-slow bg-transparent px-[2rem] font-bold text-slate-300 outline-none'
        placeholder='Type a message...'
        {...props}
      />
    </GlassAreaContainer>
  );
}

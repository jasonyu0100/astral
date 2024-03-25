import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { glassStyles, borderStyles, roundedStyles } from '@/(design)/(styles)/data';
import { FormInputProps } from '@/(types)/main';

export function StormChatMessageInput({ ...props }: FormInputProps) {
  return (
    <GlassContainer
      displayName={StormChatMessageInput.name}
      sizeStyle='max-w-[600px] flex-grow h-[50px]'
      glassStyle={glassStyles['glass-10']}
      roundedStyle={roundedStyles['rounded-full']}
    >
      <input
        className='h-full w-full animate-pulse-slow bg-transparent px-[2rem] font-bold text-slate-300 outline-none'
        placeholder='Type a message...'
        {...props}
      />
    </GlassContainer>
  );
}

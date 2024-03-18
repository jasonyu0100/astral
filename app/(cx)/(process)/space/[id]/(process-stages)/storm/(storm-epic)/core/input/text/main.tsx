import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, borderStyles } from '@/(design)/(styles)/data';
import { FormInputProps } from '@/(types)/main';

export function StormChatMessageInput({ ...props }: FormInputProps) {
  return (
    <GlassContainer
      displayName={StormChatMessageInput.name}
      sizeStyle='max-w-[600px] flex-grow h-[50px]'
      glassStyle={backgroundStyles['glass-10']}
      borderStyle={borderStyles['rounded-full']}
    >
      <input
        className='h-full w-full bg-transparent px-[2rem] font-bold text-slate-300 outline-none animate-pulse-slow'
        placeholder="Type a message..."
        {...props}
      />
    </GlassContainer>
  );
}

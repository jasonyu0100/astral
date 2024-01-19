import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, borderStyles } from '@/(common)/styles/data';
import { useContext, useState } from 'react';
import { StormContext } from '../../../../page';
import { FormInputProps } from '@/(common)/types/main';

export function StormChatMessageInput({ ...props}: FormInputProps) {
  return (
    <Layer
      displayName={StormChatMessageInput.name}
      sizeStyle='max-w-[600px] flex-grow h-[50px]'
      backgroundStyle={backgroundStyles['glass-10']}
      borderStyle={borderStyles['rounded-full']}
    >
      <input
        className='w-full h-full px-[2rem] text-white font-bold outline-none bg-transparent'
        {...props}
      />
    </Layer>
  );
}

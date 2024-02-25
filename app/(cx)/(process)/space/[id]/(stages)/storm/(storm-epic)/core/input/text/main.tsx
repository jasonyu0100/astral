import { Glass } from '@/(components)/glass/main';
import { backgroundStyles, borderStyles } from '@/(components)/styles/data';
import { useContext, useState } from 'react';
import { StormContext } from '../../../../page';
import { FormInputProps } from '@/(types)/main';

export function StormChatMessageInput({ ...props }: FormInputProps) {
  return (
    <Glass
      displayName={StormChatMessageInput.name}
      sizeStyle='max-w-[600px] flex-grow h-[50px]'
      backgroundStyle={backgroundStyles['glass-10']}
      borderStyle={borderStyles['rounded-full']}
    >
      <input
        className='h-full w-full bg-transparent px-[2rem] font-bold text-white outline-none'
        {...props}
      />
    </Glass>
  );
}

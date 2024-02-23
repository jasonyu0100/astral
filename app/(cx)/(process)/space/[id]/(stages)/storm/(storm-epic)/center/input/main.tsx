import { Glass } from '@/(components)/layer/main';
import { backgroundStyles, containerStyles } from '@/(components)/styles/data';
import { StormChatInputLeft } from './left/main';
import { StormChatInputRight } from './right/main';
import { StormChatMessageInput } from './text/main';
import { useState } from 'react';

export function StormChatInput() {
  const [inputMessage, changeInputMessage] = useState('');

  return (
    <Glass
      displayName={StormChatInput.name}
      sizeStyle='h-[80px] w-full'
      backgroundStyle={backgroundStyles['glass-5']}
      className={`${containerStyles['row-centered']} px-[1rem]`}
    >
      <StormChatInputLeft />
      <StormChatMessageInput
        onChange={(e) => changeInputMessage(e.target.value)}
        value={inputMessage}
      />
      <StormChatInputRight/>
    </Glass>
  );
}

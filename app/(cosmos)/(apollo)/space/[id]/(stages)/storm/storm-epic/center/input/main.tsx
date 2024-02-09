import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { StormChatInputLeft } from './left/main';
import { StormChatInputRight } from './right/main';
import { StormChatMessageInput } from './text/main';
import { useState } from 'react';

export function StormChatInput() {
  const [inputMessage, changeInputMessage] = useState('');

  return (
    <Layer
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
    </Layer>
  );
}

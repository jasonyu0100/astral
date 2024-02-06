import React from 'react';

export function StormChapterTitle({ children }: { children: React.ReactNode }) {
  return <p className='font-extraBold text-xl text-slate-500'>{children}</p>;
}

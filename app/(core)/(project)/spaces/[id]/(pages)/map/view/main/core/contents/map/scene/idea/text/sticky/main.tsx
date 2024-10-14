import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { TextElem } from '@/(server)/model/elements/text/main';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';

import { useEffect, useRef, useState } from 'react';

export function SpacesMapTextStickyIdea() {
  const ideaObj = useContext(ContextForIdeaObj);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const divRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState('1rem'); // Default font size

  useEffect(() => {
    const updateFontSize = () => {
      if (divRef.current) {
        const divWidth = divRef.current.offsetWidth;
        const newFontSize = divWidth * 0.08; // Example: 5% of div's width
        setFontSize(`${newFontSize}px`);
      }
    };

    updateFontSize(); // Initial calculation
    window.addEventListener('resize', updateFontSize); // Update on window resize

    return () => window.removeEventListener('resize', updateFontSize); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={divRef}
      className='h-full w-full bg-yellow-500 p-[1rem] shadow-lg'
    >
      <textarea
        className='h-full w-full resize-none bg-transparent text-black outline-none'
        style={{ fontSize: fontSize }}
        defaultValue={ideaObj.textElem?.text}
        onBlur={(e) => {
          ideaListController.actions.stateActions.updateObj(ideaObj.id, {
            ...ideaObj,
            textElem: {
              ...(ideaObj.textElem || ({} as TextElem)),
              text: e.target.value,
            },
          });
        }}
      />
    </div>
  );
}

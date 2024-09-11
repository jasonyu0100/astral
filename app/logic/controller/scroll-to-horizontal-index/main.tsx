import { createContext, RefObject } from 'react';

interface Controller {
  scrollToHorizontalIndex: (index: number) => void;
}

export const ContextForScrollToHorizontalIndex = createContext(
  {} as Controller,
);

export function useControllerForScrollToHorizontalIndex(
  ref: RefObject<HTMLDivElement>,
): Controller {
  const scrollToHorizontalIndex = (index: number) => {
    if (ref.current) {
      console.log(ref.current);

      const childNodes = ref.current.childNodes;
      let summedWidth = 0;

      // Loop through each child node up to the specified index
      childNodes.forEach((childNode, idx) => {
        if (idx < index && childNode instanceof HTMLElement) {
          // Get the width of the child node and add it to the summedWidth
          const childWidth = childNode.offsetWidth; // or use clientWidth depending on your need
          summedWidth += childWidth;
          console.log(`Child node ${idx} width: ${childWidth}px`);
        }
      });
      // Optionally log the summed width and the parent container width
      const parentWidth = ref.current.clientWidth;

      // Set scrollLeft to the summedWidth of nodes up to the specified index
      ref.current.scrollLeft = summedWidth - parentWidth / 8;

      console.log(`Summed width up to index ${index}: ${summedWidth}px`);
      console.log(`Parent node width: ${parentWidth}px`);
    }
  };

  return {
    scrollToHorizontalIndex: scrollToHorizontalIndex,
  };
}

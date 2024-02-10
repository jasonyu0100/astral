// import { useEffect, useRef, useState } from 'react';
// import { FireworkSketch } from './firework/sketch';

export function SeaStory() {
  return <></>
  // const layerRef = useRef<HTMLDivElement>(null);
  // const renderRef = useRef<HTMLDivElement>(null);
  // const [divHeight, setDivHeight] = useState(0);
  // const [zoom, setZoom] = useState(1);

  // const divWidth = (divHeight * 9) / 16;

  // function record() {
  //   let stream = document.querySelector('canvas').captureStream(30);
  //   let recorder = new MediaRecorder(stream);
  //   recorder.ondataavailable = (e) => {
  //     console.log(e.data);
  //     let video = document.createElement('video');
  //     video.src = URL.createObjectURL(e.data);
  //     video.autoplay = true;
  //     document.body.appendChild(video);
  //   };
  // }

  // useEffect(() => {
  //   const updateDimensions = () => {
  //     if (layerRef.current) {
  //       const newHeight = layerRef.current.clientHeight;
  //       setDivHeight(newHeight);
  //       setZoom(newHeight / 1920);
  //     }
  //   };

  //   updateDimensions();

  //   window.addEventListener('resize', updateDimensions);

  //   return () => {
  //     window.removeEventListener('resize', updateDimensions);
  //   };
  // }, [layerRef.current]);

  // useEffect(() => {
  //   if (renderRef.current) {
  //     const child = renderRef.current.children[0];
  //     if (child) {
  //       child.remove();
  //     }
  //   }

  //   const newP5Instance = new p5((p: p5) => {
  //     console.log(divHeight, divWidth);
  //     new FireworkSketch(p, 1080, 1920, renderRef);
  //   });

  //   return () => {
  //     newP5Instance.remove();
  //   };
  // }, []);

  // return (
  //   <div
  //     className='flex h-full items-center justify-center overflow-hidden rounded-[1rem]'
  //     ref={layerRef}
  //     style={{ width: divWidth }}
  //   >
  //     <button className='h-[100px] w-[100px] bg-white'>RECORD ME</button>
  //     <div
  //       className='overflow-hidden rounded-[1rem]'
  //       style={{ zoom: zoom * 0.9 }}
  //       ref={renderRef}
  //     ></div>
  //   </div>
  // );
}

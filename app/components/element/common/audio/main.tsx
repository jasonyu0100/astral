import { ctwn } from '@/utils/cn';
import { useEffect, useRef, useState } from 'react';

export function ElementAudioSquare({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleAudioToggle = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      const audio = audioRef.current;
      audio.currentTime = 0; // Reset audio to the start
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onAudioEnd = () => {
      setIsPlaying(false);
      audio.currentTime = 0; // Reset audio to the start
    };

    audio.addEventListener('ended', onAudioEnd);

    return () => {
      audio.removeEventListener('ended', onAudioEnd);
    };
  }, []);

  return (
    <div
      className={ctwn(
        'flex aspect-square h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full shadow-md transition-all duration-200',
        isPlaying ? 'animate-pulse' : '',
      )}
      onClick={handleAudioToggle}
    >
      <img
        src='/editor/cd.png'
        className={`aspect-square w-full ${isPlaying && 'animate-spin'}`}
      />
      <audio
        ref={audioRef}
        src={src}
        className='hidden'
        onEnded={() => {
          setIsPlaying(false);
          if (audioRef.current) {
            audioRef.current.currentTime = 0; // Reset to the beginning
          }
        }} // Reset when audio ends
      />
    </div>
  );
}

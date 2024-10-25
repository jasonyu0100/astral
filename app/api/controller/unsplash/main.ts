import { FileElem, FileElemVariant } from '@/server/model/elements/file/main';
import { useEffect } from 'react';

export const useControllerForUnsplash = () => {
  const authNextJs = async () => {
    fetch(
      `https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_API_KEY}`,
    ).then((resp) => {});
  };
  const getRandomImage = async () => {
    const accessKey = process.env.UNSPLASH_API_KEY;
    try {
      const resp = await fetch('https://api.unsplash.com/photos/random', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Client-ID ${accessKey}`,
        },
      });
      const data = await resp.json();

      return data.urls.raw;
    } catch (e) {
      console.error('Error fetching data from Unsplash:', e);
    }
  };

  const searchImage = async (query: string) => {
    const accessKey = process.env.UNSPLASH_API_KEY;
    try {
      const resp = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Client-ID ${accessKey}`,
          },
        },
      );
      const data = await resp.json();
      return data.results.map((result: any) => {
        const fileObj: FileElem = {
          id: crypto.randomUUID(),
          src: result.urls.raw,
          ext: 'image/*',
          title: result.alt_description,
          size: 0,
          variant: FileElemVariant.IMAGE,
        };
        return fileObj;
      });
    } catch (e) {
      console.error('Error fetching data from Unsplash:', e);
    }
  };

  useEffect(() => {
    authNextJs();
  }, []); // The empty dependency array ensures that this effect runs once after the component mounts

  return {
    getRandomImage,
    searchImage,
  };
};

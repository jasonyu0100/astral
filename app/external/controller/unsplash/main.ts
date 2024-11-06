import {
  FileElement,
  FileElementVariant,
} from '@/architecture/model/elements/file/main';
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

      // Map results and fetch content-type for each image
      const resultsWithTypes = await Promise.all(
        data.results.map(async (result: any) => {
          const imageUrl = result.urls.raw;

          // HEAD request to get the content-type
          const headResp = await fetch(imageUrl, { method: 'HEAD' });
          const contentType = headResp.headers.get('content-type') || 'image/*';

          // Extract file extension from content-type
          const ext = contentType.split('/').pop();

          const fileObj: FileElement = {
            id: crypto.randomUUID(),
            src: imageUrl,
            ext: ext ? `image/${ext}` : 'image/*',
            title: result.alt_description,
            size: 0, // Size would require further fetch or an estimation
            variant: FileElementVariant.IMAGE,
          };
          return fileObj;
        }),
      );

      return resultsWithTypes;
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

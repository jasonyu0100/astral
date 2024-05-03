import { memo, useContext, useMemo, useRef, useState } from 'react';
import { oembed } from '@loomhq/loom-embed';
import {
  LogObjContext,
} from '@/(lgx)/internal/model/resource/log/main';

export const FullLoomVideo = memo(function FullLoomVideo() {
  const logObj = useContext(LogObjContext);
  const loomRef = useRef<HTMLDivElement>(null);
  const [videoHtml, changeVideoHtml] = useState<string>('');

  useMemo(() => {
    const width = loomRef.current?.clientWidth;
    oembed(logObj.sharedUrl, { width: width }).then((res) => {
      changeVideoHtml(res.html);
    });
  }, [logObj]);

  return (
    <div className='w-full' ref={loomRef}>
      <div dangerouslySetInnerHTML={{ __html: videoHtml }}></div>
    </div>
  );
});

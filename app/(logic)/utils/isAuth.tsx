'use client';
import { portalMap } from '@/(portal)/map';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export default function insideVerses(Component: any) {
  return (props: any) => {
    const userCookie = Cookies.get('user') || '';
    const isAuthed = userCookie ? JSON.parse(userCookie)?.id != null : false;

    useEffect(() => {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = portalMap.portal.reserve.link;
      } else if (!isAuthed) {
        window.location.href = portalMap.portal.login.link;
        return null;
      }

      return () => {};
    }, []);

    return <Component {...props} />;
  };
}

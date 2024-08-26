'use client';
import { portalMap } from '@/(portal)/map';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export default function isAstralAuth(Component: any) {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const userCookie = Cookies.get('user') || '';
    const isAuthed = userCookie ? JSON.parse(userCookie)?.id != null : false;

    function checkMobile() {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = portalMap.portal.reserve.link;
      } else if (!isAuthed) {
        window.location.href = portalMap.portal.login.link;
        return null;
      }
    }

    useEffect(() => {
      checkMobile();
    }, []);

    return <Component {...props} />;
  };
}

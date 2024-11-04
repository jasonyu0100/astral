/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { portalMap } from '@/(portal)/map';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export default function PrivateAstralPage(Component: any) {
  return (props: any) => {
    const userCookie = Cookies.get('user') || '';
    const isAuthed = userCookie ? JSON.parse(userCookie)?.id != null : false;

    function checkMobile() {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      if (isMobile) {
        alert(
          "Astral doesn't support mobile devices. Please use a desktop browser.",
        );
        window.location.href = '/';
      } else if (!isAuthed) {
        window.location.href = `${portalMap.portal.login.link}?redirect=${window.location.pathname}`;
        return null;
      }
    }

    useEffect(() => {
      checkMobile();
    }, []);

    return <Component {...props} />;
  };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect } from 'react';

export default function PublicAstralPage(Component: any) {
  return (props: any) => {
    function checkMobile() {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      if (isMobile) {
        alert(
          "Astral doesn't support mobile devices. Please use a desktop browser.",
        );
        window.location.href = '/';
      }
    }

    useEffect(() => {
      checkMobile();
    }, []);

    return <Component {...props} />;
  };
}

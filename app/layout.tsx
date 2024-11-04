import { GoogleOAuthProvider } from '@react-oauth/google';
import { Analytics } from '@vercel/analytics/react';
import { fontVariables } from './fonts';
import './globals.css';
import { ctwn } from './utils/cn';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

  return (
    <html lang='en'>
      <head>
        <title>Astral</title>
        <meta name='referrer' content='origin' />
        <link rel='manifest' href='manifest.json' />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=AW-16754047290'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-16754047290');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  gtag('event', 'conversion', {
      'send_to': 'AW-16754047290/vdu2CJ-p8uEZELry-bQ-',
      'value': 1.0,
      'currency': 'AUD'
  });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5185395,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </head>
      <body className={ctwn('bg-slate-950', ...fontVariables)}>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_AUTH_CLIENT_ID || ''}>
          <Analytics />
          <main>{!isMaintenanceMode && <>{children}</>}</main>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}

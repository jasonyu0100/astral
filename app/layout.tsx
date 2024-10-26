import { Analytics } from '@vercel/analytics/react';
import { fontVariables } from './fonts';
import './globals.css';
import { ctwn } from './utils/cn';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

  return (
    <html lang='en'>
      <title>Astral</title>
      <head>
        <meta name='referrer' content='origin' />
      </head>
      <body className={ctwn('bg-slate-950', [...fontVariables])}>
        <Analytics />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16754167285">
        </script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16754167285');
        </script>
        <main>{!isMaintenanceMode && <>{children}</>}</main>
      </body>
    </html>
  );
}

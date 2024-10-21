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
        <main>{!isMaintenanceMode && <>{children}</>}</main>
      </body>
    </html>
  );
}

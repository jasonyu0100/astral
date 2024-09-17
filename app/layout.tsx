import { fontVariables } from './fonts';
import './globals.css';
import { cn } from './utils/cn';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

  return (
    <html lang='en'>
      <title>Astral</title>
      <head>
        <meta name='referrer' content='origin' />
      </head>
      <body className={cn('bg-slate-950', [...fontVariables])}>
        <main>{!isMaintenanceMode && <>{children}</>}</main>
      </body>
    </html>
  );
}

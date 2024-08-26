import { cn } from './(utils)/cn';
import { Toaster } from './components/ui/sonner';
import { fontVariables } from './fonts';
import './globals.css';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

  return (
    <html lang='en'>
      <title>Create - Ideas 💡</title>
      <head>
        <meta name='referrer' content='origin' />
      </head>
      <Toaster />
      <body className={cn('bg-slate-950', [...fontVariables])}>
        <main>{!isMaintenanceMode && <>{children}</>}</main>
      </body>
    </html>
  );
}

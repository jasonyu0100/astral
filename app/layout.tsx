import './globals.css';
import { fontVariables } from './fonts';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { cn } from './utils/cn';
import { Toaster } from './components/ui/sonner';
import { test } from '@cosmos-dev/example-package';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

  return (
    <html lang='en'>
      <title>Create - Cosmos</title>
      <head>
        <meta name='referrer' content='origin' />
      </head>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_AUTH_APIKEY || ''}>
        <Toaster />
        <body className={cn('bg-black', [...fontVariables])}>
          <main>{!isMaintenanceMode && <>{children}</>}</main>
        </body>
      </GoogleOAuthProvider>
    </html>
  );
}

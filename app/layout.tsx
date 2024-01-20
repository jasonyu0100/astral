import clsx from 'clsx';
import './globals.css';
import { fontVariables } from './fonts';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

  return (
    <html lang='en'>
      <title>Create - Cosmos</title>
      <head>
        <meta name='referrer' content='origin' />
      </head>
      <body className={clsx('bg-black', [...fontVariables])}>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_AUTH_APIKEY || ''}>
          {!isMaintenanceMode && <>{children}</>}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}

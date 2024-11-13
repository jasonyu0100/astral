import { GoogleOAuthProvider } from '@react-oauth/google';
import { Analytics } from '@vercel/analytics/react';
import { fontVariables } from './fonts';
import './globals.css';
import { ctwn } from './utils/cn';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';
  const siteTitle = 'Astral - Creative spaces that flow';
  const siteDescription =
    'Astral is an AI-powered project management suite designed for creatives, startup founders, and product managers. Supercharge your workflow with AI insights.';
  const siteKeywords =
    'AI workflow, project management, creative collaboration, visual mapping, idea synthesis, Astral';

  return (
    <html lang='en'>
      <head>
        {/* Essential Meta Tags */}
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={siteDescription} />
        <meta name='keywords' content={siteKeywords} />
        <meta name='referrer' content='origin' />

        {/* SEO Title */}
        <title>{siteTitle}</title>

        {/* Link to Manifest & Favicon */}
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />

        {/* Canonical URL */}
        <link rel='canonical' href='https://www.tryastral.com.au' />

        {/* Open Graph for Social Sharing */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:image' content='/brand/logo-astral-light.png' />
        <meta property='og:url' content='https://www.tryastral.com.au' />
        <meta property='og:site_name' content='Astral' />

        {/* Analytics and Tracking Scripts */}
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

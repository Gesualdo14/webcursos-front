import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID

  return (
    <Html>
      <Head>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K2FT6QHP');
        `,
          }}
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F25DH8FPE3"
        />
        <Script
          id="gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-F25DH8FPE3');
            `,
          }}
        />

        <link
          href="https://fonts.cdnfonts.com/css/cubano?styles=103531,103532,103533,103534,103535"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/9a65aee490.js"
          crossOrigin="anonymous"
          defer
        ></script>
        <script
          defer
          src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`}
        ></script>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K2FT6QHP" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

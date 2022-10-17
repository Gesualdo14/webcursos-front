import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  console.log({ PAYPAL_CLIENT_ID })
  return (
    <Html>
      <Head>
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
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
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
          src={`https://www.paypal.com/sdk/js?client-id=AZQjVsv5AdTZ19SeSJeiKESkqR3b9bp27Xn1UoKWsOtBNTMv27vdcEC_qgYTdqi4GB-cWGbXBd4BSw0s&currency=USD`}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

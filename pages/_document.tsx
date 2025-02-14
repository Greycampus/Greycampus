import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* ✅ Preconnect where necessary */}
          <link rel="dns-prefetch" href="https://www.greycampus.com" />
          <link rel="dns-prefetch" href={`${API_URL}`} />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

          {/* ✅ Optimized Google Fonts with display=swap */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          />

          {/* ✅ Global styles */}
          <style>{`
            html, body {
              margin: 0;
              padding: 0;
            }
          `}</style>
        </Head>
        <body>
          {/* ✅ GTM Fallback for NoScript Users */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-W9W9X4QJ"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

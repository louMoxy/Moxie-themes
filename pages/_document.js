import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { generateCssVariables } from '../utils/theme-utils';

class MyDocument extends Document {
  render() {
    const cssVars = generateCssVariables();

    return (
      <Html lang="en" className="theme-compiled">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
            rel="stylesheet"
          />
          {/* Y2K Theme Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Inter:wght@300;400;500;600;700&family=Monoton&family=Roboto:wght@300;400;500;700&family=Baloo+2:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700;900&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <style>{`:root{${cssVars}}`}</style>
        </Head>
        <body
          className={`antialiased text-lg leading-base`}
        >
          {/* Hidden form for Netlify form detection */}
          <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>
          
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

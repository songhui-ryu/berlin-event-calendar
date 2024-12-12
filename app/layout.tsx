import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../public/globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`
          bg-gradient-to-br 
          from-violet-950 from-30% 
          via-fuchsia-450 via-60%
          to-rose-400 to-90%
          `}
        >
            <head>
                <link rel="icon" href="favicon.ico" sizes="any" />
            </head>
            <body
                className={`
          antialiased
          min-h-screen
          `}
            >
                {children}
                <DefaultSeo {...SEO} />
                <Analytics />
            </body>
        </html>
    );
}

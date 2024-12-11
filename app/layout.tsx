import type { Metadata } from 'next';
import '../public/globals.css';

export const metadata: Metadata = {
    title: 'Berlin Events',
    description: 'Berlin events page showing official events, but better.',
};

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
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "../public/globals.css";

export const metadata: Metadata = {
    title: "Berlin Events",
    description:
        "Berlin events page showing the official events, but in a better view.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://berlin-event-calendar.vercel.app",
        siteName: "Berlin Events",
        title: "Berlin Events",
        description:
            "Berlin events page showing the official events, but in a better view.",
    },
    // Twitter settings for Twitter cards.
    twitter: {
        card: "summary_large_image",
        site: "@berlin_events",
        creator: "@berlin_events",
        title: "Berlin Events",
        description:
            "Berlin events page showing the official events, but in a better view.",
    },
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
                <Analytics />
            </body>
        </html>
    );
}

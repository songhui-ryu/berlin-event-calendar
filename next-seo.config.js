const seoConfig = {
    // The default title for your site.
    title: "Berlin Events",
    // The default title for pages that don't specify their own title.
    defaultTitle: "Berlin Events",
    // The default description for your site.
    description:
        "Berlin events page showing the official events, but in a better view.",
    // Open Graph settings for better social media integration.
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://berlin-event-calendar.vercel.app",
        site_name: "Berlin Events",
        title: "Berlin Events",
        description:
            "Berlin events page showing the official events, but in a better view.",
    },
    // Twitter settings for Twitter cards.
    twitter: {
        cardType: "summary_large_image",
        site: "@berlin_events",
        creator: "@berlin_events",
        title: "Berlin Events",
        description:
            "Berlin events page showing the official events, but in a better view.",
    },
};
export default seoConfig;

export const modifyLinks = () => {
    // Select all anchor tags in the page, including footer links
    const anchorTags = document.querySelectorAll('a');

    // Define a list of links you don't want to modify
    const excludedLinks = [
        '/notFound',
        '/blog',
        '/about',
        '/contact',
        '/termsOfUse',
        '/privacyPolicy',
    ];

    // Loop through each anchor tag
    anchorTags.forEach((anchor) => {
        const href = anchor.getAttribute('href');

        // Check if the href is a relative URL and not in the excluded list
        if (href && href.startsWith('/') && !excludedLinks.includes(href)) {
            // Modify the href to prepend /openCampus
            anchor.setAttribute('href', `/openCampus${href}`);
        }
    });
};

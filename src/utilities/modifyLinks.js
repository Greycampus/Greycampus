export const modifyLinks = (htmlContent) => {
    if (!htmlContent) return "";

    return htmlContent
        // 🔄 Step 1: Replace "/opencampus/" with "/openCampus/"
        .replace(/<a\s+href="\/opencampus\//g, '<a href="/openCampus/')
        
        // ✅ Step 2: Modify relative links EXCEPT those starting with "/blog/" or already containing "openCampus"
        .replace(/<a\s+href="(\/(?!blog\/|openCampus\/)[^"]+)"([^>]*)>/g, '<a href="openCampus$1"$2>');
};

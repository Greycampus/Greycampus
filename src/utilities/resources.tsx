
export const parseMarkdown = (markdown: string) => {
    if (!markdown) return "";
    
    return markdown
    .replace(/^### (.*$)/gm, "<h3>$1</h3>") // H3
    .replace(/^## (.*$)/gm, "<h2>$1</h2>") // H2
    .replace(/^# (.*$)/gm, "<h1>$1</h1>") // H1
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
    .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic
    .replace(/~~(.*?)~~/g, "<del>$1</del>") // Strikethrough
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>') // Links
    .replace(/^- (.*)$/gm, "<li>$1</li>") // List Items
    .replace(/\n/g, "<br/>"); // Line breaks
};

export const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;
export const LOGO_URl = `${API_URL}/uploads/gc_logo_7328d04d59.svg`;
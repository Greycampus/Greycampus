import { NextRequest, NextResponse } from "next/server";

// Import redirect mappings from JSON
import redirects from "./public/gc-link-redirect.json";

// Function to escape special regex characters
const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Function to find a matching redirect
const findRedirect = (pathname: string): string | null => {
  for (const entry of redirects) {
    let source = entry["Original URL"];
    let destination = entry["Redirect to"];

    // Escape special characters in source URL except for wildcard `*`
    let regexPattern = "^" + escapeRegExp(source).replace("\\*", "(.*)") + "$";
    let match = pathname.match(new RegExp(regexPattern));

    if (match) {
      return destination.replace("{rest-of-url}", match[1] || ""); // Replace wildcard
    }

    // Direct match
    if (source === pathname) {
      return destination;
    }
  }
  return null;
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;

  // Find matching redirect
  const redirectTo = findRedirect(pathname);

  if (redirectTo) {
    return NextResponse.redirect(new URL(redirectTo, req.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: redirects.map((entry) => 
    entry["Original URL"].replace("*", "(.*)") // Convert wildcards to regex patterns
  ),
};

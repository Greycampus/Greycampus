import { NextRequest, NextResponse } from "next/server";
import redirects from "./src/data/gc-link-redirect.json";

// Function to normalize URLs (removes domain if present)
const normalizeUrl = (url: string) => {
  return url.replace(/^https?:\/\/(www\.)?greycampus\.com/, ""); // Remove base domain
};

// Function to escape special regex characters except for `*`
const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Function to find a matching redirect
const findRedirect = (pathname: string): string | null => {
  for (const entry of redirects) {
    let source = normalizeUrl(entry["Original URL"]); // Normalize before comparison
    let destination = entry["Redirect to"];

    // Handle wildcard `*`
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
  matcher: redirects.map((entry) => normalizeUrl(entry["Original URL"]).replace("*", "(.*)")),
};

import type { ReactNode } from "react";

import ExternalLink from "@/components/ExternalLink";
import TextLink from "@/components/TextLink";
import { LINK_CLASSES } from "@/lib/linkStyles";

/** Matches [link text](url) */
const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Picks the right kind of link for a URL. */
function SmartLink({ href, children }: { href: string; children: ReactNode }) {
  // "/safety" -> a page on this site
  if (href.startsWith("/")) return <TextLink to={href}>{children}</TextLink>;
  // "https://..." -> another website, new tab
  if (/^https?:/.test(href)) return <ExternalLink href={href}>{children}</ExternalLink>;
  // "mailto:" / "tel:" -> plain anchor, no new tab
  return (
    <a href={href} className={LINK_CLASSES}>
      {children}
    </a>
  );
}

/**
 * Renders a string from beaches.json, turning [text](url) into links.
 * This keeps the JSON editable as plain text while allowing inline links.
 */
export default function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const [fullMatch, label, href] = match;
    const start = match.index ?? 0;

    // Plain text before this link
    if (start > lastIndex) nodes.push(text.slice(lastIndex, start));

    nodes.push(
      <SmartLink key={start} href={href}>
        {label}
      </SmartLink>,
    );
    lastIndex = start + fullMatch.length;
  }

  // Plain text after the last link
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));

  return <>{nodes}</>;
}
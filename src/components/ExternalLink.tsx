import type { ComponentProps } from "react";

import { LINK_CLASSES } from "@/lib/linkStyles";
import { cn } from "@/lib/utils";

/**
 * In-text link to another website. Opens in a new tab; `noopener noreferrer`
 * stops the destination page from getting access to this one.
 */
export default function ExternalLink({ className, ...props }: ComponentProps<"a">) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(LINK_CLASSES, className)}
      {...props}
    />
  );
}
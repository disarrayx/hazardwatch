import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Bulleted list. Tailwind's reset removes list styling, so bullets and
 * indentation are added back here (8px gap between items, 24px indent).
 */
export default function BulletList({ className, ...props }: ComponentProps<"ul">) {
  return <ul className={cn("list-disc space-y-2 pl-6", className)} {...props} />;
}
import BeachMap from "@/components/BeachMap";
import BulletList from "@/components/BulletList";
import Container from "@/components/Container";
import ExternalLink from "@/components/ExternalLink";
import { COUNCIL, LINKS } from "@/config/links";
import beachData from "@/data/beaches.json";
import { LINK_CLASSES } from "@/lib/linkStyles";
import type { BeachData } from "@/types/beach";

// All beach content lives in src/data/beaches.json
const { lastUpdated, beaches } = beachData as BeachData;

export default function Beaches() {
  return (
    <>
      {/* Visually hidden, but gives screen readers a page title */}
      <h1 className="sr-only">Beaches</h1>

      {/*
        Full-width map. `isolate` keeps Leaflet's high z-indexes inside this
        box so the map can't slide over the sticky navbar when scrolling.
      */}
      <div className="relative isolate h-[70vh] min-h-96 w-full">
        <BeachMap beaches={beaches} />
      </div>

      <Container className="space-y-6 pt-8 text-lg">
        <p>
          Currently only available for the Prevelly–Gnarabup coastline (Augusta
          Margaret River Shire, WA).
        </p>

        <p>
          Report rusted/damaged signs and coastal stairs or other issues to
          council:{" "}
          <a href={COUNCIL.phoneHref} className={LINK_CLASSES}>
            {COUNCIL.phoneDisplay}
          </a>{" "}
          and{" "}
          <a href={COUNCIL.emailHref} className={LINK_CLASSES}>
            {COUNCIL.email}
          </a>
        </p>

        <div className="space-y-2">
          <p>Get involved in the Augusta Margaret River Shire community to make an impact!</p>
          <BulletList>
            <li className="marker:text-primary">
              <ExternalLink href={LINKS.councilHaveYourSay}>
                Have your say at the council
              </ExternalLink>
            </li>
            <li className="marker:text-primary">
              <ExternalLink href={LINKS.councilVolunteer}>Become a volunteer</ExternalLink>
            </li>
          </BulletList>
        </div>

        <p>Last updated {lastUpdated}.</p>
      </Container>
    </>
  );
}
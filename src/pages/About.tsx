import BulletList from "@/components/BulletList";
import Container from "@/components/Container";
import ExternalLink from "@/components/ExternalLink";
import { LINKS } from "@/config/links";

export default function About() {
  return (
    <Container className="space-y-6 pt-8 text-lg">
      <p>
        HazardWatch is not officially endorsed by any organisation. We are a
        group of undergraduate UNSW students making a project for a course :)
      </p>

      <p>
        While we strive to make information accurate, we aren’t experts. Please
        follow official advice over us.
      </p>

      {/* Primary sources */}
      <div className="space-y-2">
        <p>Our primary information sources are:</p>
        <BulletList>
          <li>
            Shire of Augusta Margaret River’s Coastal Hazard Management Plans:{" "}
            <ExternalLink href={LINKS.coastalHazardPlan2015}>2015</ExternalLink>
            ,{" "}
            <ExternalLink href={LINKS.coastalHazardPlan2022}>2022</ExternalLink>
            ,{" "}
            <ExternalLink href={LINKS.coastalHazardPlan2026Draft}>
              2026 draft
            </ExternalLink>
          </li>
          <li>
            Surf Life Saving:{" "}
            <ExternalLink href={LINKS.beachsafe}>beachsafe.org.au</ExternalLink>
          </li>
          <li>
            Rip current safety:{" "}
            <ExternalLink href={LINKS.ripCurrentSafety}>
              ripcurrentsafety.com
            </ExternalLink>
          </li>
        </BulletList>
      </div>

      {/* Image credits (orange bullets, as in the design)
      <div className="space-y-2">
        <p>Image credits:</p>
        <BulletList>
          <li className="marker:text-primary">
            <ExternalLink href={LINKS.imageCreditRipDiagram}>
              Rip current diagram
            </ExternalLink>
          </li>
          <li className="marker:text-primary">
            <ExternalLink href={LINKS.imageCreditFloatationDevice}>
              Floatation device image
            </ExternalLink>
          </li>
        </BulletList>
      </div> */}
    </Container>
  );
}
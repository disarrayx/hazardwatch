import floatationDevice from "@/assets/floatation-device.jpg";
import ripDiagram from "@/assets/rip-current-diagram.jpg";
import BulletList from "@/components/BulletList";
import Container from "@/components/Container";
import ExternalLink from "@/components/ExternalLink";
import { LINKS } from "@/config/links";

/** Shared heading style for the page's main sections. */
const H2_CLASS = "text-3xl sm:text-4xl";

/** STOP / LOOK / PLAN checklist for bystander rescues. */
const RESCUE_STEPS = [
  {
    title: "STOP",
    items: [
      "Call for help (000) and look for others who can assist and are trained.",
      "Check for hazards and dangers to yourself.",
    ],
  },
  {
    title: "LOOK",
    items: [
      "Look for a floatation device to support you and the rescuee, e.g. a surfboard, bodyboard, pool noodle, rescue ring.",
      "Look for some way to rescue them without entering the water, e.g. a rope, pole, stick.",
    ],
  },
  {
    title: "PLAN",
    items: [
      "Swim at a patrolled beach.",
      "Know what to do in an emergency.",
      "Bring a floatation device with you to the beach.",
      "Learn CPR and/or first aid.",
    ],
  },
];

export default function Safety() {
  return (
    <>
      <Container className="space-y-8 pb-6 pt-8 text-lg">
        <p>
          This information is sourced from{" "}
          <ExternalLink href={LINKS.beachsafe}>beachsafe.org.au</ExternalLink>{" "}
          (run by Surf Life Saving Australia) and{" "}
          <ExternalLink href={LINKS.ripCurrentSafety}>
            Rip Current Safety
          </ExternalLink>
          .
        </p>

        {/* General beach safety */}
        <section className="space-y-4">
          <h2 className={H2_CLASS}>General Beach Safety</h2>
          <BulletList>
            <li>
              Swim between the red and yellow flags. These are placed to avoid
              rips and are most watched by lifeguards.
            </li>
            <li>Read safety signs.</li>
            <li>
              If you require assistance, stay calm, raise your arm and wave it
              side to side to attract attention. Conserve your energy by
              floating on your back and not panicking.
            </li>
            <li>
              Avoid visiting beaches soon after storms due to pollution from
              sewage and stormwater runoff.
            </li>
            <li>Don't use informal paths, use proper walking paths.</li>
          </BulletList>
        </section>

      </Container>

      {/* Coastal Erosion */}
      <Container className="space-y-8 pt-8 text-lg">
        <h2 className={H2_CLASS}>Rip Currents</h2>

        <section className="space-y-4">
          <p>
            Erosion can be from physical or chemical processes and can affect cliffs, beaches, dunes and man-made structures.
          </p>

          <BulletList className="space-y-4">
            <li className="marker:text-secondary">
              <p className="font-semibold text-secondary">Staying safe:</p>
              <BulletList className="mt-2">
                <li>Know your area. For example, Western Australia is known for having limestone cliffs which are prone to erosion.</li>
                <li>Pay attention to signage in the area.</li>
                <li>Don't walk underneath overhangs or on top of cliffs, especially not after storm conditions.</li>
              </BulletList>
            </li>

            <li className="marker:text-secondary">
              <p className="font-semibold text-secondary">Minimising human-caused erosion:</p>
              <BulletList className="mt-2">
                <li>
                  Stay off informal paths and vegetation.
                </li>
              </BulletList>
            </li>
          </BulletList>
        </section>

      </Container>

      {/* Rip Safety */}
      <Container className="space-y-8 pt-8 text-lg">
        <h2 className={H2_CLASS}>Rip Currents</h2>
        <img
            src={ripDiagram}
            alt="Aerial diagram of a beach showing incoming waves, sand bars, and rip currents flowing out to sea between them"
            className="h-auto w-full"
        />
        {/* Rip currents: spotting and escaping */}
        <section className="space-y-4">
          <p>
            Rips are one of the most common hazard on Australian beaches. A rip
            is a fast-flowing channel of water moving away from the shore and
            out to sea. You can learn more about them{" "}
            <ExternalLink href={LINKS.ripCurrentSafety}>here</ExternalLink>.
          </p>

          <BulletList className="space-y-4">
            <li className="marker:text-secondary">
              <p className="font-semibold text-secondary">Spotting a rip current:</p>
              <BulletList className="mt-2">
                <li>Dark gaps between the breaking waves.</li>
                <li>A choppy water surface between waves.</li>
                <li>A line of foam, debris or seaweed moving away from the shore.</li>
              </BulletList>
            </li>

            <li className="marker:text-secondary">
              <p className="font-semibold text-secondary">Escaping a rip current:</p>
              <BulletList className="mt-2">
                <li>
                  Remember that rip currents are{" "}
                  <strong className="font-semibold">
                    not trying to pull you under.
                  </strong>{" "}
                  They take you away from the shore.
                </li>
                <li>
                  Relax and focus on staying afloat. Signal for help by putting
                  your arm up or calling out.
                </li>
                <li>
                  If you are a competent swimmer, you can swim parallel to the
                  shore to get out. Aim for the white water on the side of the
                  rip.
                </li>
                <li>
                  <strong className="font-semibold">
                    Do not swim against the rip current
                  </strong>
                  . You will tire yourself out.
                </li>
              </BulletList>
            </li>
          </BulletList>
        </section>

        {/* Bystander rescue */}
        <section className="space-y-4">
          <h2 className={H2_CLASS}>Bystander Rescue</h2>
          <p>
            Many areas are unpatrolled, and so a large number of rescues are
            attempted by bystanders. However, many bystanders are{" "}
            <strong className="font-semibold">not trained</strong> in water
            rescue or CPR, and so often put themselves and the rescuee at risk.
          </p>

          <BulletList>
            <li className="marker:text-secondary">
              <p className="font-semibold text-secondary">Before you rescue:</p>

              <div className="mt-4 space-y-6">
                {RESCUE_STEPS.map(({ title, items }) => (
                  <div key={title}>
                    <h3 className="font-semibold text-primary">{title}</h3>
                    <BulletList className="mt-2">
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </BulletList>
                  </div>
                ))}
              </div>
            </li>
          </BulletList>

          <figure className="space-y-4 pt-4">
            <img
              src={floatationDevice}
              alt="A rescue tube storage post on the sand, a yellow rescue tube, and a close-up of the post's release catch"
              className="h-auto w-full"
            />
            <figcaption>Example of a floatation device that may be present.</figcaption>
          </figure>
        </section>
      </Container>
    </>
  );
}
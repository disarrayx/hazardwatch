import BulletList from "@/components/BulletList";
import RichText from "@/components/RichText";
import type { Beach, CardItem } from "@/types/beach";

/** The card's sections, in display order, and the JSON field each reads from. */
const SECTIONS = [
  { key: "hazards", heading: "Hazards" },
  { key: "potentialRisks", heading: "Potential Risks" },
  { key: "informational", heading: "Informational" },
] as const;

/** One entry: optional icon, a title, and its bullet points. */
function CardEntry({ item }: { item: CardItem }) {
  const { title, icon, points } = item;

  return (
    <div>
      <div className="flex items-center gap-2">
        {icon && (
          <img
            // BASE_URL keeps the path correct when hosted under /repo-name/
            src={`${import.meta.env.BASE_URL}src/assets/icons/${icon}`}
            alt="" // decorative: the title already says it
            className="size-6 shrink-0"
          />
        )}
        <p className="text-base">
          <RichText text={title} />
        </p>
      </div>

      {points && points.length > 0 && (
        // With an icon, indent bullets to line up with the title text
        <BulletList className={icon ? "mt-2 pl-10" : "mt-2"}>
          {points.map((point) => (
            <li key={point}>
              <RichText text={point} />
            </li>
          ))}
        </BulletList>
      )}
    </div>
  );
}

/** Popup card for one beach. Sections with no entries are not rendered. */
export default function BeachCard({ beach }: { beach: Beach }) {
  return (
    <article className="space-y-4 text-sm">
      <h2 className="text-center text-xl font-semibold">{beach.name}</h2>

      {SECTIONS.map(({ key, heading }) => {
        const items = beach[key];
        if (!items || items.length === 0) return null;

        return (
          <section key={key} className="space-y-2">
            <h3 className="text-base underline underline-offset-4">{heading}</h3>
            <div className="space-y-4">
              {items.map((item) => (
                <CardEntry key={item.title} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </article>
  );
}
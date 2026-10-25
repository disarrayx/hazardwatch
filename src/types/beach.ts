/**
 * Types describing the shape of src/data/beaches.json.
 * Any string marked "rich text" may contain [link text](url) links.
 */

/** One headed entry in a card section, e.g. "Rockfall and erosion risk". */
export interface CardItem {
  /** Heading for the entry (rich text). */
  title: string;
  /** Icon filename inside public/icons/, e.g. "rockfall.png". Optional. */
  icon?: string;
  /** Mitigation / detail bullet points shown under the heading (rich text). */
  points?: string[];
}

export interface Beach {
  /** Unique, URL-safe identifier, e.g. "rivermouth-beach". */
  id: string;
  /** Shown as the card heading. */
  name: string;
  lat: number;
  lng: number;
  /** Section: "Hazards". Omit or leave empty to hide the section. */
  hazards?: CardItem[];
  /** Section: "Potential Risks". */
  potentialRisks?: CardItem[];
  /** Section: "Informational". */
  informational?: CardItem[];
}

/** Top level of beaches.json. */
export interface BeachData {
  /** Shown at the bottom of the Beaches page, e.g. "October 2026". */
  lastUpdated: string;
  beaches: Beach[];
}
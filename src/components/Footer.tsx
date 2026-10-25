import Container from "@/components/Container";

/** Site footer: safety disclaimer and Acknowledgement of Country. */
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border py-8">
      <Container className="space-y-6">
        <p>
          <strong className="font-semibold">Important</strong>: This site is
          informational and conditions change. Live conditions on the day may
          differ. Always call 000 in an emergency.
        </p>

        <p>
          HazardWatch acknowledges the Wadandi people as the Traditional
          Custodians of the land and waters of Prevelly and Gnarabup, and pays
          respect to Elders past and present.
        </p>
      </Container>
    </footer>
  );
}
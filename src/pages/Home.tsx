import Container from "@/components/Container";
import TextLink from "@/components/TextLink";
import heroImage from "@/assets/hero.jpg";

export default function Home() {
  return (
    <>
      {/* Full-width hero. Height steps up with the viewport (192 / 256 / 360px). */}
      <img
        src={heroImage}
        alt="People walking along the beach at sunset"
        className="h-48 w-full object-cover sm:h-64 lg:h-90"
      />

      <Container className="space-y-6 pt-8 sm:pt-16">
        <h1 className="text-4xl leading-tight sm:text-5xl">
          Know your <span className="text-secondary">beach</span>. Know your{" "}
          <span className="text-primary">hazards</span>.
        </h1>

        <p className="text-lg">
          We use Australian council coastal hazard management plans and real
          time data to help you make informed decisions and stay safe at our
          beautiful beaches.
        </p>

        <p className="text-lg">
          Visit the <TextLink to="/beaches">beaches</TextLink> page to learn
          about your local beach. Visit{" "}
          <TextLink to="/safety">safety</TextLink> to learn more about hazards
          and general beach safety.
        </p>

        <p className="text-lg">
          We are currently in beta, available only for the Prevelly–Gnarabup
          coastline (Augusta Margaret River Shire, WA) right now.
        </p>
      </Container>
    </>
  );
}
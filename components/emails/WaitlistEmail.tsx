import { Container, Html, Img, Section, Text } from "@react-email/components";
import * as React from "react";
export default function WaitlistEmail() {
  return (
    <Html>
      <Section style={{ backgroundColor: "#ffffff" }}>
        <Container>
          <Img src="/Landing/logo.png" alt="Usourceful Logo" width={90} />
          <Text className="text-2xl font-bold">
            Thanks for joining our waitlist!
          </Text>
          <Text>
            We'll keep you updated on our progress and let you know when we
            launch.
          </Text>
        </Container>
      </Section>
    </Html>
  );
}

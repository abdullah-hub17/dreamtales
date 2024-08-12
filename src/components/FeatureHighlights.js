import React from "react";
import { ScaleFade, Box, useDisclosure } from "@chakra-ui/react";
import "../assets/styles/FeatureHighlights.css";

const FeatureHighlights = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <section className="feature-highlights" id="features">
      <h2>Why DreamTales?</h2>
      <button className="button1" onClick={onToggle}>
        Features
      </button>
      <div className="features">
        <ScaleFade className="card" initialScale={0.3} in={isOpen}>
          <Box
            p="20px"
            bg="teal.500"
            rounded="md"
            shadow="md"
            mb={4}
          >
            <div className="feature">
              <h3>Personalized Stories</h3>
              <p>Tailored to your child's interests.</p>
            </div>
          </Box>
        </ScaleFade>

        <ScaleFade className="card" initialScale={0.3} in={isOpen}>
          <Box
            p="20px"
            color="white"
            bg="teal.500"
            rounded="md"
            shadow="md"
            mb={4}
          >
            <div className="feature">
              <h3>Soothing Narration</h3>
              <p>Calming voices to ease children to sleep.</p>
            </div>
          </Box>
        </ScaleFade>

        <ScaleFade className="card" initialScale={0.3} in={isOpen}>
          <Box
            p="20px"
            color="white"
            bg="teal.500"
            rounded="md"
            shadow="md"
            mb={4}
          >
            <div className="feature">
              <h3>Offline Access</h3>
              <p>Download stories for bedtime anywhere.</p>
            </div>
          </Box>
        </ScaleFade>
      </div>
    </section>
  );
};

export default FeatureHighlights;

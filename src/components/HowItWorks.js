import React from "react";
import "../assets/styles/HowItWorks.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="howitworks">
      <h2>How It Works</h2>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                1. Choose Age & Story Type
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Select your child's age and preferred story type to ensure
            age-appropriate content.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                2. Input Your Ideas
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Provide your own character or story idea through a prompt, allowing
            customization.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                3. AI Generates the Story
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            The AI creates a unique story based on your input that can be read
            or listened to in any language.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                4. Play the Story
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Enjoy the soothing narration or read along as your child drifts off
            to sleep.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default HowItWorks;

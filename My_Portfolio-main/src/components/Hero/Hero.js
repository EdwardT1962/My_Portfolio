
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          My professional skills include both knowledge of programming and foreign languages, as well as business, marketing and finance.
        </SectionText>
        <Button onClick={() => window.location = 'https://EdwardT1962.github.io/Resume-Site'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
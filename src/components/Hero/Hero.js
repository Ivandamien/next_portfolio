import React from 'react';
// import CV from '../../../public/images/ivanresume.pdf';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello <br /> am Ivan Okello  <br />
        a Fullstack Developer
      </SectionTitle>
      <SectionText>
      {/* Welcome to my portfolio! As a fullstack developer, I'm passionate about crafting immersive digital experiences that marry seamless functionality with stunning design. Whether it's developing scalable web applications, building robust APIs, or creating engaging user interfaces, I relish every opportunity to push the boundaries of what's possible. With a keen eye for detail and a deep appreciation for the nuances of both front-end and back-end development, I strive to bring my clients' visions to life in ways that surpass their wildest expectations. So why wait? Let's build something amazing together! */} 
      As a full-stack developer, I blend technical expertise with creative problem-solving to build web applications that deliver exceptional user experiences. From concept to deployment, I strive for excellence in every project.
      </SectionText> 
      {/* <Button ><a href={""}  >Download CV</a></Button> */}
      <Button >Hire ME</Button>

    </LeftSection>
  </Section>
);

export default Hero;
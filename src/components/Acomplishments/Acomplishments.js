import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: ' Projects'},
  { number: 100, text: 'Students', },
  { number: 60, text: 'clients', },
  { number: 50, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {
        data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{ card.number}+</BoxNum>
            <BoxText>{ card.text}</BoxText>

          </Box>
        ))
      }
    </Boxes>
  </Section>
);

export default Acomplishments;

import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from "./HeaderStyles";
import dynamic from "next/dynamic";

const Header = () => (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom:"20px" }}>
          <DiCssdeck size="3rem" />
          <Span>Ivan</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ivandamien" >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://ke.linkedin.com/in/ivan-okello-107b711b2" >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="#" >
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
    

  </Container>
);
export default dynamic (() => Promise.resolve(Header), {ssr: false})

// export default Header;

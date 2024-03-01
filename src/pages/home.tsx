import React from "react";
import { HeaderHome } from "../components/headerHome/headerHome";
import { BodyHome } from "../components/bodyHome/bodyHome";
import { FooterHome } from "../components/footerHome/footerHome";
import { Stfc1 } from "../components/stfcSection/stfc1";
import { Stfc2 } from "../components/stfcSection/stfc2";
import { Stfc3 } from "../components/stfcSection/stfc3";
import { Stfc4 } from "../components/stfcSection/stfc4";
import { Stfc5 } from "../components/stfcSection/stfc5";
import { Floatingbtn } from "../components/floatingBtn/floatingbtn";

export function Home() {
  const scrollToSection = () => {
    const stfcSection = document.getElementById("stfc-section");

    if (stfcSection) {
      stfcSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeaderHome scrollToSection={scrollToSection} />
      <BodyHome scrollToSection={scrollToSection} />
      <FooterHome />
      <Stfc1 />
      <Stfc2 />
      <Stfc3 />
      <Stfc4 />
      <Stfc5 />
      <Floatingbtn />
    </>
  );
}

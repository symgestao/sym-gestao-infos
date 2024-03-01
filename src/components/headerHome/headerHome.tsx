// HeaderHome.tsx
import React, { useState } from "react";
import "./headerHome.css";
const logoSym = require("../../assets/LogoSym.png") as string;

interface HeaderHomeProps {
  scrollToSection: () => void;
}

export function HeaderHome({ scrollToSection }: HeaderHomeProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (menuItem: string) => {
    // Implemente as ações desejadas para cada item do menu aqui
    console.log(`Você clicou em: ${menuItem}`);
    // Feche o dropdown após clicar em um item
    setDropdownOpen(false);

    // Verifica se o item clicado é "Manual" e faz o scroll suave até o componente Stfc
    if (menuItem === "Manual") {
      const stfcSection = document.getElementById("stfc-section");

      if (stfcSection) {
        stfcSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Verifica se o item clicado é "Problemas específicos e soluções" e faz o scroll suave até o componente StfcSubTitle
    if (menuItem === "Problemas específicos e soluções") {
      const stfcSubtitleSection = document.getElementById("stfc-subTitle");

      if (stfcSubtitleSection) {
        stfcSubtitleSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Verifica se o item clicado é "Teclas Fanvil" e faz o scroll suave até o componente Stfc3
    if (menuItem === "Teclas Fanvil") {
      const stfcTeclasSection = document.getElementById("stfc-teclas");

      if (stfcTeclasSection) {
        stfcTeclasSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="mainHeaderHomeContainer">
      <div className="headerHomeContainer">
        <img src={logoSym} className="logoSym" alt="" />
      </div>
      <div className="headerHomeButons">
        <div
          className="button2"
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          STFC
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a onClick={() => handleMenuItemClick("Manual")} href="#!">
                Identificando o problema
              </a>
              <a
                onClick={() =>
                  handleMenuItemClick("Problemas específicos e soluções")
                }
                href="#!"
              >
                Problemas específicos
              </a>
              <a onClick={() => handleMenuItemClick("Teclas Fanvil")} href="#!">
                Teclas Fanvil
              </a>
            </div>
          )}
        </div>
        <button className="button2">
          <a href="http://www.google.com.br">GESTÃO</a>
        </button>
        <button className="button2">
          <a href="http://www.google.com.br">SISTEMAS</a>
        </button>
      </div>
    </div>
  );
}

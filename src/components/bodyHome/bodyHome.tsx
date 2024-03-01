// BodyHome.tsx
import React from "react";
import "./bodyHome.css";

const img1 = require("../../assets/img1.png") as string;

interface BodyHomeProps {
  scrollToSection: () => void;
}

export function BodyHome({ scrollToSection }: BodyHomeProps) {
  return (
    <div className="bodyHomeMainContainer">
      <div className="bodyHomeTextContainer">
        <h1>Tudo em um só lugar!</h1>
        <p>
          Bem-vindo ao Portal de Conhecimento SYM! Na SYM, reconhecemos a
          importância do acesso fácil e rápido às informações essenciais para
          todos os nossos colaboradores. É com grande entusiasmo que
          apresentamos o Portal de Conhecimento SYM, uma plataforma dedicada a
          fornecer tutoriais detalhados sobre os procedimentos da nossa empresa.
          Este portal é projetado para ser uma fonte centralizada de
          informações, acessível a novos membros da equipe que estão embarcando
          em sua jornada conosco e também para aqueles que buscam aprimorar seus
          conhecimentos sobre os processos internos da SYM.
        </p>
        <button className="buttonStart" onClick={scrollToSection}>
          <span>Começar !</span>
          <svg
            width="34"
            height="34"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="37"
              cy="37"
              r="35.5"
              stroke="#f68f47"
              strokeWidth="3"
            ></circle>
            <path
              d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
              fill="#f68f47"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <img className="bodyHomeImg" src={img1} alt="" />
      </div>
    </div>
  );
}

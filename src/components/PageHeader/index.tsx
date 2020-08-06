import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

import "./styles.css";

interface PageHeaderProps {
  title: string;
  description?: string; // Ponto de interrogação indica que este atributo não é obrigatório
}

// PageHeader é um FunctionComponent e suas propriedades são as de PageHeaderProps

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {/*Uma condicional onde o segundo membro só será renderizado se o primeiro resultar em true*/}
        {props.description && <p>{props.description}</p>}
        {/*Caso o PageHeader possua tags, serão renderizadas aqui*/}
        {props.children}{" "}
      </div>
    </header>
  );
};

export default PageHeader;

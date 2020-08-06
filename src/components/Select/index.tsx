import React, { SelectHTMLAttributes } from "react";

import "./styles.css";

// A interface está exendendo uma interface do react
// que possui todas as especificações padrão para um Select em HTML
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;

  options: Array<{
    // É necessário explicitar o tipo dos valores no array,
    value: string; // que é um objeto com os atributos value e label.
    label: string;
  }>;
}

// o rest receberá todas as especificações opcionais para o Select
const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>

      {/*Para que as especificações opcionais sejam aplicadas*/}
      <select value="" id={name} {...rest}>
        {/*Definindo uma primeira opção padrão*/}
        {/*
          disabled: não selecionável
          selected: pré-selecionado
          hidden: não disponível dentro das opções
        */}
        <option value="" disabled hidden>
          Selecione uma opção
        </option>

        {/*Para que cada elemento do array de objetos seja uma option, usa-se o map*/}
        {options.map((option) => {
          return (
            // Para cada option, será retornada uma tag <option> com os valores do objeto option
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

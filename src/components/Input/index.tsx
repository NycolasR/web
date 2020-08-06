import React, { InputHTMLAttributes } from "react";

import "./styles.css";

// A interface está exendendo uma interface do react
// que possui todas as especificações padrão para um input em HTML
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

// o rest receberá todas as especificações opcionais para o input
const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>

      {/*Para que as especificações opcionais sejam aplicadas*/}
      <input type="text" id={name} {...rest} />
    </div>
  );
};

export default Input;

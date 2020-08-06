import React, { TextareaHTMLAttributes } from "react";

import "./styles.css";

// A interface está exendendo uma interface do react
// que possui todas as especificações padrão para um Textarea em HTML
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

// o rest receberá todas as especificações opcionais para o Textarea
const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>

      {/*Para que as especificações opcionais sejam aplicadas*/}
      <textarea id={name} {...rest} />
    </div>
  );
};

export default Textarea;

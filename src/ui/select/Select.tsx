import { useState } from "react";
import { Licence, Sex, Stomach } from "../../common/interfaces";

interface SelectProps {
  title: string;
  options: Sex[] | Licence[] | Stomach[];
}

const Select = ({ title, options }: SelectProps) => {
  const [currValue, setCurrValue] = useState(options[0]);

  const onChange = (event: any) => setCurrValue(event.target.value);

  return (
    <>
      <h4>{title}</h4>
      <select value={currValue} onChange={onChange}>
        {options.map((option: any, index: number) => (
          <option key={index.toString()} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;

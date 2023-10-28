import React from 'react';

type IInputProps = React.ComponentProps<'input'> & {
  label: string;
};

const InputDate = ({ label, name, value, onChange }: IInputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type='date'
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputDate;

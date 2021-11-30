import React from 'react';

interface ISelectOption {
  value: string;
  label: string;
}

interface IProps {
  options: ISelectOption[];
  value: string;
  label: string;
  className?: string;
  labelClassName?: string;
  selectClassName?: string;
}

export function SelectInput({
  label,
  options = [{ value: 'noValue', label: 'No value' }],
  value,
  className = '',
  selectClassName = '',
  labelClassName = ''
}: IProps): JSX.Element {
  return (
    <div className={className}>
      <label className={labelClassName}>
        {label}
        <select id={value} name={value} className={selectClassName}>
          {options.map(({ label, value }, i) => {
            return (
              <option key={i} value={value}>
                {label}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}

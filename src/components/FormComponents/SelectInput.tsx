import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

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
  register: UseFormRegister<FieldValues>;
}

export function SelectInput({
  label,
  options = [{ value: 'noValue', label: 'No value' }],
  value,
  className = '',
  selectClassName = '',
  labelClassName = '',
  register
}: IProps): JSX.Element {
  return (
    <div className={className}>
      <label className={labelClassName}>
        {label}
        <select {...register(value)} className={selectClassName}>
          {options.map(({ label, value: optionValue }, i) => {
            return (
              <option key={i} value={optionValue}>
                {label}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}

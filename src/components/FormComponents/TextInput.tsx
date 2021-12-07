import { UseFormRegister, FieldValues } from 'react-hook-form';

interface IProps {
  label: string;
  value: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  register: UseFormRegister<FieldValues>;
}

export function TextInput({
  label,
  value,
  className = '',
  inputClassName = '',
  labelClassName = '',
  register
}: IProps): JSX.Element {
  return (
    <div className={className}>
      <label className={labelClassName}>
        {label}
        <input type="text" {...register(value)} className={inputClassName} />
      </label>
    </div>
  );
}

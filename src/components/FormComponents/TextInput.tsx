interface IProps {
  label: string;
  value: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export function TextInput({
  label,
  value,
  className = '',
  inputClassName = '',
  labelClassName = ''
}: IProps): JSX.Element {
  return (
    <div className={className}>
      <label className={labelClassName}>
        {label}
        <input type="text" name={value} id={value} className={inputClassName} />
      </label>
    </div>
  );
}

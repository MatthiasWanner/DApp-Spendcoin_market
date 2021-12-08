import { COLORS } from '@utils/constants/colors.constants';
import React from 'react';

interface IProps {
  text?: string;
  spinnerColor?: COLORS;
}

export default function Spinner({
  text,
  spinnerColor = COLORS.WHITE
}: IProps): JSX.Element {
  return (
    //OPTION CIRCLE
    <div className="grid place-items-center h-full w-full">
      <div className="flex flex-col items-center space-y-10">
        <svg
          className="animate-spin w-20 text-center"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke={spinnerColor}
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill={spinnerColor}
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        {text && <p className="text-black text-lg">{text}</p>}
      </div>
    </div>
  );
}
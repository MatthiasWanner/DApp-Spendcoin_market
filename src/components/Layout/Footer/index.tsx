import React from 'react';
import FooterDCInfos from './FooterDCInfos';
import FooterPartners from './FooterPartners';

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-row justify-between text-base font-medium text-white">
      <div className="flex flex-col w-2/3">
        <FooterDCInfos />
      </div>
      <div className="flex flex-col justify-center w-1/3">
        <FooterPartners />
      </div>
    </footer>
  );
}

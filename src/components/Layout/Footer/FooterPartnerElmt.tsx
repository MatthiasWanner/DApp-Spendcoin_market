import React from 'react';
import Image from 'next/image';

type FooterPartnerElmtProps = {
  partnerName: string;
  logo: string;
  url: string;
};

function FooterPartnerElmt({
  partnerName,
  logo,
  url
}: FooterPartnerElmtProps): JSX.Element {
  return (
    <div className="flex flex-col justify-center">
      <a href={url}>
        <Image
          src={logo}
          alt={`Logo partenaire ${partnerName}`}
          width="40"
          height="40"
        />
      </a>
    </div>
  );
}

export default FooterPartnerElmt;

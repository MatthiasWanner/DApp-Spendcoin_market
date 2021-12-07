import React from 'react';
import FooterPartnerElmt from './FooterPartnerElmt';

function FooterPartners(): JSX.Element {
  const partners = [
    {
      partnerName: 'Request',
      logo: '/img/logo_request.png',
      url: 'https://request.network/'
    },
    {
      partnerName: 'Autre',
      logo: '/img/other_partner.svg',
      url: ''
    }
  ];
  return (
    <div className="flex flex-row space-x-8 justify-center border-l-2 h-2/3">
      <h4 className="font-medium">Our Partners:</h4>
      {partners.map((partner, index) => (
        <FooterPartnerElmt
          key={`${partner.partnerName}-${index}`}
          {...partner}
        />
      ))}
    </div>
  );
}

export default FooterPartners;

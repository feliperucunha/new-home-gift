import React from 'react';
import { locationLink } from '../constants';

const MapButton = (address: any) => {

  
  // const openGoogleMaps = () => {
  //   const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  //   window.open(url, '_blank');
  // };
  const openGoogleMaps = () => {
    const url = locationLink;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={openGoogleMaps}
      className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Abrir no Google Maps
    </button>
  );
};

export default MapButton;
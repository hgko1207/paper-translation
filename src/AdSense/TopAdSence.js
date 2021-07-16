import React from 'react';
import GoogleAdsense from 'react-adsense-google';

const TopAdSence = () => {
  return (
    <GoogleAdsense
      adClient='ca-pub-7581566810202853'
      adSlot='1131844921'
      style={{'display': 'block'}}
      adFormat='auto'
      fullWidthResponsive='true'
    />
  )
};

export default TopAdSence;
import React, { useEffect } from 'react';
import GoogleAdsense from 'react-adsense-google';

const BottomAdSense = () => {
    // useEffect(()=>{
  //   if (window) {
  //     (window.adsbygoogle = window.adsbygoogle || []).push({});
  //   }
  // });
  
  return (
    <GoogleAdsense
      adClient='ca-pub-7581566810202853'
      adSlot='3284162675'
      style={{'display': 'block'}}
      adFormat='auto'
      fullWidthResponsive='true'
    />
  )
};

export default BottomAdSense;
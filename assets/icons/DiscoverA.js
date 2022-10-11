
import React from "react";
import { SvgXml } from "react-native-svg"; 

export default function SVGDiscoverAIcon(){  

  const svgMarkup = 
          `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.9998 4.00018C35.0398 4.00018 43.9998 12.9602 43.9998 24.0002C43.9998 35.0602 35.0398 44.0002 23.9998 44.0002C12.9398 44.0002 3.99979 35.0602 3.99979 24.0002C3.99979 12.9602 12.9398 4.00018 23.9998 4.00018ZM31.6998 17.4202C31.9198 16.7202 31.2798 16.0602 30.5798 16.2802L20.3398 19.4802C19.9198 19.6202 19.5798 19.9402 19.4598 20.3602L16.2598 30.6202C16.0398 31.3002 16.6998 31.9602 17.3798 31.7402L27.5798 28.5402C27.9998 28.4202 28.3398 28.0802 28.4598 27.6602L31.6998 17.4202Z" fill="white"/>
          </svg>`;
    
  const SvgImage = () => <SvgXml xml={svgMarkup} width="30" />;  

  return <SvgImage />;
}
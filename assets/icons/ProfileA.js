
import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SVGProfileAIcon(){  


  const svgMarkup = 
          `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 30.3479C32.6773 30.3479 40 31.7579 40 37.1979C40 42.64 32.6292 44 24 44C15.3247 44 8 42.59 8 37.1499C8 31.7079 15.3708 30.3479 24 30.3479ZM24 4C29.8782 4 34.588 8.70805 34.588 14.5821C34.588 20.4562 29.8782 25.1662 24 25.1662C18.1238 25.1662 13.412 20.4562 13.412 14.5821C13.412 8.70805 18.1238 4 24 4Z" fill="white"/>
          </svg>`;
    
    
  const SvgImage = () => <SvgXml xml={svgMarkup} width="30" />;  

  return <SvgImage />;
}

import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SVGVoiceIcon(){  

  const svgMarkup = 
          `<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9167 4.58332C12.9167 2.97249 11.6108 1.66666 9.99999 1.66666C8.38916 1.66666 7.08333 2.97249 7.08333 4.58332V9.99999C7.08333 11.6108 8.38916 12.9167 9.99999 12.9167C11.6108 12.9167 12.9167 11.6108 12.9167 9.99999V4.58332Z" stroke="#C4C4C4" stroke-linejoin="round"/>
          <path d="M3.75 9.58331C3.75 13.035 6.54833 15.8333 10 15.8333M10 15.8333C13.4517 15.8333 16.25 13.035 16.25 9.58331M10 15.8333V18.3333" stroke="#C4C4C4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
    
  const SvgImage = () => <SvgXml xml={svgMarkup} width="50" />;  

  return <SvgImage />;
}
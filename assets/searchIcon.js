
import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SVGSerachIcon(){  

  const svgMarkup = 
          `<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 17.5L13.7617 13.755L17.5 17.5ZM15.8333 8.74999C15.8333 10.6286 15.0871 12.4303 13.7587 13.7587C12.4303 15.087 10.6286 15.8333 8.75 15.8333C6.87139 15.8333 5.06971 15.087 3.74133 13.7587C2.41295 12.4303 1.66667 10.6286 1.66667 8.74999C1.66667 6.87137 2.41295 5.0697 3.74133 3.74132C5.06971 2.41293 6.87139 1.66666 8.75 1.66666C10.6286 1.66666 12.4303 2.41293 13.7587 3.74132C15.0871 5.0697 15.8333 6.87137 15.8333 8.74999V8.74999Z" stroke="#FAFAFA" stroke-linecap="round"/>
          </svg>`;
    
  const SvgImage = () => <SvgXml xml={svgMarkup} width="50" />;  

  return <SvgImage />;
}
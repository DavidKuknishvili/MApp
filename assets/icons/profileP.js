
import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SVGProfileP(){  

  const svgMarkup = 
          `
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="50" fill="#404040"/>
          <path d="M50 58.2283C61.9312 58.2283 72 60.1671 72 67.6472C72 75.13 61.8652 77 50 77C38.0715 77 28 75.0612 28 67.5812C28 60.0983 38.1348 58.2283 50 58.2283ZM50 22C58.0825 22 64.5585 28.4736 64.5585 36.5504C64.5585 44.6272 58.0825 51.1035 50 51.1035C41.9202 51.1035 35.4415 44.6272 35.4415 36.5504C35.4415 28.4736 41.9202 22 50 22Z" fill="#DB4346"/>
          </svg>
          
          `;
    
  const SvgImage = () => <SvgXml xml={svgMarkup} width="130" height='130' />;  

  return <SvgImage />;
}

import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SVGPlayIcon(){  

  const svgMarkup = 
          `
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 7C14.85 7 7 14.85 7 24.5C7 34.15 14.85 42 24.5 42C34.15 42 42 34.15 42 24.5C42 14.85 34.15 7 24.5 7ZM31.9996 24.4908C31.9996 21.6948 24.7016 17.9568 23.6616 17.5228C22.9356 17.2188 21.2316 16.5088 20.1856 17.5448L20.1841 17.5463C19.8886 17.8418 18.9976 18.7327 18.9996 24.6668C19.0036 30.2648 19.8636 31.1148 20.1856 31.4328C20.6036 31.8488 21.1156 32.0028 21.6556 32.0028C22.3536 32.0028 23.0996 31.7468 23.7536 31.4748C25.4316 30.7748 31.9996 27.1108 31.9996 24.4908Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M45 24.5C45 13.196 35.804 4 24.5 4C13.196 4 4 13.196 4 24.5C4 35.804 13.196 45 24.5 45C35.804 45 45 35.804 45 24.5ZM7 24.5C7 14.85 14.85 7 24.5 7C34.15 7 42 14.85 42 24.5C42 34.15 34.15 42 24.5 42C14.85 42 7 34.15 7 24.5Z" fill="white"/>
          </svg>
          `;
    
  const SvgImage = () => <SvgXml xml={svgMarkup} width="50" />;  

  return <SvgImage />;
}
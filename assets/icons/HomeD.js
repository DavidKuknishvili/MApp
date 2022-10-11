
import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SVGHomeDIcon(){  

  const svgMarkup = 
          `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4338 30.5826C29.8418 30.5826 31.8018 32.5286 31.8018 34.9206V41.0726C31.8018 41.5866 32.2138 41.9986 32.7418 42.0106H36.5538C39.5578 42.0106 41.9998 39.5986 41.9998 36.6346V19.1866C41.9858 18.1666 41.4998 17.2066 40.6658 16.5686L27.4798 6.05256C25.7098 4.65056 23.2338 4.65056 21.4578 6.05656L8.36179 16.5646C7.49579 17.2226 7.00979 18.1826 6.99979 19.2206V36.6346C6.99979 39.5986 9.44179 42.0106 12.4458 42.0106H16.2938C16.8358 42.0106 17.2758 41.5806 17.2758 41.0526C17.2758 40.9366 17.2898 40.8206 17.3138 40.7106V34.9206C17.3138 32.5426 19.2618 30.5986 21.6518 30.5826H27.4338ZM36.5538 45.0106H32.7058C30.5018 44.9586 28.8018 43.2286 28.8018 41.0726V34.9206C28.8018 34.1826 28.1878 33.5826 27.4338 33.5826H21.6618C20.9238 33.5866 20.3138 34.1886 20.3138 34.9206V41.0526C20.3138 41.2026 20.2938 41.3466 20.2518 41.4826C20.0358 43.4626 18.3438 45.0106 16.2938 45.0106H12.4458C7.78779 45.0106 3.99979 41.2526 3.99979 36.6346V19.2066C4.01979 17.2186 4.93579 15.3986 6.51779 14.2006L19.5878 3.71056C22.4658 1.43056 26.4758 1.43056 29.3478 3.70656L42.5118 14.2066C44.0578 15.3846 44.9738 17.2006 44.9998 19.1646V36.6346C44.9998 41.2526 41.2118 45.0106 36.5538 45.0106Z" fill="#FFFFFF70"/>
          </svg>`;
    
  const SvgImage = () => <SvgXml xml={svgMarkup} width="30" />;  

  return <SvgImage />;
}
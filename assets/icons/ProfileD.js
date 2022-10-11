
import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SVGProfileDIcon(){  

  const svgMarkup = 
          `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M39.6798 36.3862C39.6798 42.9782 30.6398 43.7402 23.8418 43.7402L23.3553 43.7398C19.0242 43.7293 7.9998 43.4558 7.9998 36.3462C7.9998 29.8887 16.6765 29.0257 23.4228 28.9932L24.3283 28.9926C28.6591 29.0031 39.6798 29.2766 39.6798 36.3862ZM23.8418 31.9922C15.3198 31.9922 10.9998 33.4562 10.9998 36.3462C10.9998 39.2622 15.3198 40.7402 23.8418 40.7402C32.3618 40.7402 36.6798 39.2762 36.6798 36.3862C36.6798 33.4702 32.3618 31.9922 23.8418 31.9922ZM23.8418 3.99939C29.6978 3.99939 34.4598 8.76339 34.4598 14.6194C34.4598 20.4754 29.6978 25.2374 23.8418 25.2374H23.7778C17.9338 25.2194 13.1998 20.4534 13.2197 14.6134C13.2197 8.76339 17.9838 3.99939 23.8418 3.99939ZM23.8418 6.85539C19.5598 6.85539 16.0758 10.3374 16.0758 14.6194C16.0618 18.8874 19.5198 22.3674 23.7838 22.3834L23.8418 23.8114V22.3834C28.1218 22.3834 31.6038 18.8994 31.6038 14.6194C31.6038 10.3374 28.1218 6.85539 23.8418 6.85539Z" fill="#FFFFFF70"/>
          </svg>
          `;
    
  const SvgImage = () => <SvgXml xml={svgMarkup} width="30" />;  

  return <SvgImage />;
}
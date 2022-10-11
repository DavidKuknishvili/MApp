
import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SVGHeartActiveIcon(){  

  const svgMarkup = 
          `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5595 5.00104C17.8195 5.03936 19.0395 5.25936 20.2215 5.66136H20.3395C20.4195 5.69936 20.4795 5.74136 20.5195 5.77936C20.9615 5.92136 21.3795 6.08136 21.7795 6.30136L22.5395 6.64136C22.8395 6.80136 23.1995 7.09936 23.3995 7.22136C23.5995 7.33936 23.8195 7.46136 23.9995 7.59936C26.2215 5.90136 28.9195 4.98136 31.6995 5.00104C32.9615 5.00104 34.2215 5.17936 35.4195 5.58136C42.8015 7.98136 45.4615 16.0814 43.2395 23.1614C41.9795 26.7794 39.9195 30.0814 37.2215 32.7794C33.3595 36.5194 29.1215 39.8394 24.5595 42.6994L24.0595 43.0014L23.5395 42.6794C18.9615 39.8394 14.6995 36.5194 10.8015 32.7594C8.12154 30.0614 6.05954 26.7794 4.77954 23.1614C2.51954 16.0814 5.17955 7.98136 12.6415 5.53936C13.2215 5.33936 13.8195 5.19936 14.4195 5.12136H14.6595C15.2215 5.03936 15.7795 5.00104 16.3395 5.00104H16.5595ZM34.3795 11.3214C33.5595 11.0394 32.6595 11.4814 32.3595 12.3214C32.0795 13.1614 32.5195 14.0814 33.3595 14.3794C34.6415 14.8594 35.4995 16.1214 35.4995 17.5194V17.5814C35.4615 18.0394 35.5995 18.4814 35.8795 18.8214C36.1595 19.1614 36.5795 19.3594 37.0195 19.4014C37.8395 19.3794 38.5395 18.7214 38.5995 17.8794V17.6414C38.6595 14.8394 36.9615 12.3014 34.3795 11.3214Z" fill="black"/>
          </svg>
          `;
    
  const SvgImage = () => <SvgXml xml={svgMarkup} width="50" />;  

  return <SvgImage />;
}
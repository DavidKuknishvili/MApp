
import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SVGIcon(svgMarkup){  
    
  const SvgImage = () => <SvgXml xml={svgMarkup} width="50" />;  

  return <SvgImage />;
}

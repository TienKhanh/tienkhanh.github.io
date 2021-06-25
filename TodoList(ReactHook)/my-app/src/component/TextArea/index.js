import React, { useEffect } from "react";
var i = 0;
const TextArae = ({ onAdd,onUpdateDecs }) => {
  useEffect(() => {
    i = i + 1;
    if(onAdd){
        onUpdateDecs("mo ta " + i);
    }
    
  },[onAdd]);

  return <textarea rows="6" />;
};

export default TextArae;

import React, { useState } from'react';
import style from './Map.module.css'
import { SimpleMap } from '@salocreative/interactive-map';


function Map() {
    const [selected, onSelect] = useState(null);
  return (
    <div className = {style.Map}>
     <SimpleMap selected={ selected } onSelect={ onSelect }/>
    </div>
  );
}
export default Map;
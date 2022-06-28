import React from 'react';
import loaderSrc from '../../assets/loading.gif';

const Loader = props => (    
    <div>
        <img 
        style={{width: 75}}
        alt="loading..."
        src={loaderSrc} />
    </div>
)

export default Loader;
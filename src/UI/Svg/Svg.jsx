import React from 'react';
import classes from './Svg.scss'


const Svg = (props) => {
  
    const notification = props.notification ? classes['svg__notifications'] : [];
 
 return (
<div className={[classes['svg'], notification ].join(' ')  }>
{props.children}
</div>

);
    }
export default Svg;
import React from 'react';

import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import logo from '../../assets/logo.png';
import classes from './Logo.scss';

const Logo = (props) => (

<Auxiliar>
    <a className={ classes.logo }>
        <img src={ logo } alt="MyBurger" />
        {/* <span class={ classes.logo__separate }> </span> */}
    </a>
   

</Auxiliar>

);

export default Logo;
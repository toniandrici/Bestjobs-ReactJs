import React from 'react';
import Logo from '../../../Logo/Logo';
import  things  from './NavigationLeft.scss';
import NavigationItem from '../../NavigationItem/NavigationItem';

const NavigationLeft = () => (
    <div className={things.navigation__left}>
   
     <nav role="navigation">
     <Logo />
        <ul className={things.navigation__left__list}>
           <NavigationItem link="/" exact><strong><small>Hire</small></strong></NavigationItem>
          <NavigationItem link="/orders"><strong><small>Hunt</small></strong> </NavigationItem>
       </ul>
     </nav>
    </div>


) ;



export default NavigationLeft;
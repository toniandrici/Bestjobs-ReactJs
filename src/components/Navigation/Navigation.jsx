import React from 'react';
import NavigationLeft from './NavigationFirst/NavigationLeft/NavigationLeft';
import NavigationRight from './NavigationFirst/NavigationRight/NavigationRight';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

import classes from './Navigation.scss';
import styles from '../../styles/main.scss';

const navigation = () =>
(
<header className={classes.header}>
   <div className={classes.header__container}>
   <div className={classes.first__header}>
      <div className={styles["wrapper"]}>
         <div className={styles["row"]}>
            <div className={classes.nav__first}>
               <NavigationLeft />
               <NavigationRight />


            </div>
            <hr />
         </div>
      </div>
   </div>
   <div className={classes.second__header}>
      <div className={styles["wrapper"]}>
         <div className={styles["row"]}>
            <div className={classes.nav__second}>
               <Input placeholder={'Keyword'}/>
               <Input elementType={'input'} placeholder={'City/County/Country'} className={'InputElement__not__mobile'} />

               <Button btnType={["Button__primary", "Button__not__mobile"]}>
                  
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
</svg>
                  Search </Button>
            </div>
         </div>
      </div>
   </div>
   </div>
</header>
);

export default navigation;
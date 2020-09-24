import React from 'react';
import Logo from '../Logo/Logo';
import styles from '../../styles/main.scss';
import classes from './Footer.scss';
import Svg from '../../UI/Svg/Svg';
const Footer = () => (
<footer>
<div className={styles.wrapper}>
         
            <div className={classes.footer__first}>
                <div className={classes.footer__first__1}>
                <Logo />
                </div>
               
                <div className={classes.footer__first__2}>
                <h4><small>Candidates</small></h4>
                   <ul>
                       <li>
                           Job offers
                       </li>
                       <li>
                           Site map
                       </li>
                       <li>
                          Support (+40) 31 710 4230
                       </li>
                       <li>
                          Conditions
                       </li>
                       <li>
                           Confidentiality
                       </li>
                   </ul>
                </div>
                <div className={classes.footer__first__3}>
                <h4><small>Employers</small></h4>
                <ul>
                       <li>
                           Add job
                       </li>
                       <li>
                           Pricing
                       </li>
                       <li>
                         Iwant an employer account
                       </li>
                   </ul>
                </div>
                <div className={classes.footer__first__4}>
                    <div className={classes.footer__group}>
                    <div className={classes.footer__group__first}>
                        <h4><small>Follow us on social media:</small></h4>
<Svg>
<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" className="svg-inline--fa fa-facebook-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
</Svg>
<Svg>
<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
</Svg>
<span className={classes.footer__small__button}><small>LEARN</small></span>
</div>
<div className={classes.footer__group_second}>
<h4><small>Download the BestJobs app</small></h4>
<div className={classes.footer__big}>
<div className={classes.footer__big__button}>
<Svg>
<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" className="svg-inline--fa fa-apple fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
</Svg>
<div className={classes.footer__big__button__right}>
<small>Available on the</small>
    <h3>App Store</h3>
    </div>
</div>
<div className={classes.footer__big__button}>
<Svg>
<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" className="svg-inline--fa fa-google-play fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
</Svg>
<div className={classes.footer__big__button__right}>
<small>Get it on</small>
<h3>Google Play</h3>
</div>

</div>
</div>

    </div>
                    </div>
             
                </div>
                <div className={classes.footer__first__5}>
                <Svg>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" className="svg-inline--fa fa-globe fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
</Svg>
<select name="language" id="language">
  <option  value="English">English</option>
  <option value="ROMANA">ROMANA</option>
  <option value="POLSKI">POLSKI</option>
  <option value="DEUTCH">DEUTCH</option>
  <option value="DEUTCH">FRANCAIS</option>
</select>
                </div>
             </div>
             </div> 
                       <div className={classes.footer__last}>
                           <span>@2020 BESTJOBS RECRUTARE SA</span>
                           </div>
                     
              
</footer>
)

export default Footer;
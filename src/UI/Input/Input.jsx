import React from 'react';
import classes from './Input.scss';
import { element } from 'prop-types';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar';

const input = (props) => {

let inputElement = null;
const inputClasses = [classes.InputElement];

if(props.invalid && props.shouldValidate && props.touched) {
inputClasses.push(classes.Invalid);
}

switch(props.elementType) {
case ('input'):
    inputElement =(

        <div className={[classes.input__group, classes[props.className]].join(' ')}>
            <div className={classes.input__group__addon}>
                <span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                </span>
        
            </div>
            <input onChange={props.changed } className={[classes['InputElement'], classes['InputElement__border']].join(' ')} {...props.elementConfig} placeholder={props.placeholder} value={props.value} />
            <div className={classes.input__group__addonB}>
                <span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-arrow" class="svg-inline--fa fa-location-arrow fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="green" d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path></svg>
                </span>
        
            </div>
        
        </div>
        );
            break;
      case ('textarea'): inputElement=<textarea onChange={props.changed } className={`${classes}.${inputClasses.join(' ')}`} {...props.elementConfig}  value={props.value} />;
                break;
    
      case ('checkbox'): inputElement= ( 
      <Auxiliar>
<input type="checkbox" id={props.id} value={props.value} name={props.name} checked={props.isChecked}
    disabled={props.disabled} onChange={ ()=> props.onChange() }/>
<label aria-hidden="true" htmlFor={props.id} />
<label htmlFor={props.id}>
    {props.label}
</label>
</Auxiliar>)
break;

case ('radio'): inputElement= ( 
    <Auxiliar>
<input type="radio" id={props.id} value={props.value} name={props.name} checked={props.isChecked}
  disabled={props.disabled} onChange={ ()=> props.onChange() }/>
<label aria-hidden="true" htmlFor={props.id} />
<label htmlFor={props.id}>
  {props.label}
</label>
</Auxiliar>)
break;
default:
inputElement =(

<div className={[classes.input__group, classes[props.className]].join(' ')}>
    <div className={classes.input__group__addon}>
        <span>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"
                className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path fill="#666"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                </path>
            </svg>
        </span>

    </div>
    <input onChange={props.changed } className={classes.InputElement} {...props.elementConfig} placeholder={props.placeholder} value={props.value} />
   

</div>
);
}

return(
<Auxiliar>
    {inputElement}
</Auxiliar>

);
};









export default input;
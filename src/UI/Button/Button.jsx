import React from 'react';
import classes from './Button.scss';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar';

const button = (props) =>{

const Classes = (Array.isArray(props.btnType)) ? Array.from(props.btnType).map(item => classes[item]) : [classes[props.btnType]];

return (
    <Auxiliar>
    <button
    disabled={props.disabled}
    className={[classes.Button,  ...Classes].join(' ')}
    onClick={props.clicked}>{props.children}</button>
    </Auxiliar>
);
}
export default button;
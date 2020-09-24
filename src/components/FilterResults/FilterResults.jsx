import React , {Component} from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input'
import Popover from '../../UI/Popover/Popover';
import Accordion from '../../UI/Accordion/Accordion';
// import MultiSelect from "react-multi-select-component";
import { Multiselect } from 'multiselect-react-dropdown';

import classes from './FilterResults.scss';
import styles from '../../styles/main.scss';
import { fas } from '@fortawesome/free-solid-svg-icons';

const options = {
    selectLabels :[
    { name: "Administrative/Secretarial", id: "0" },
    { name: "Agriculture/ Zootechnics ", id: "1" },
    { name: "Au pair/ Babysitter/Cleaning", id: "2", disabled: true },
    { name: "Beauty services", id: "3" },
    { name: "Call center /Client service", id: "4" },
    { name: "Construction / Installations", id: "5" },
    { name: "Education/ Training", id: "6" },
    { name: "Enigneering", id: "7" },
    { name: "Finance/Acoounting", id: "8" },
    ],
    experience:[
        { label: "No experience", value: "0" },
        { label: "Entry (0-2 years)", value: "1" },
        { label: "Middle (2-5 years)", value: "2" },
        { label: "Senior (5-10 years)", value: "3" },
        { label: "Executive (>10 years)", value: "4" },
    ],
    employmentType: [
        { label: "Full time", value: "0" },
        { label: "Part time", value: "0" },
        { label: "Internship time", value: "0" },
        { label: "Project time", value: "0" },
    ],
    sortBy: [
        { label: "Relevance", value: "0" },
        { label: "Salary", value: "0" },
        { label: "Activation date", value: "0" },
        { label: "Distance", value: "0" },
    ]

};

class FilterResults extends Component{

    constructor(props) {
        super(props);
        this.state = { isChecked: false ,
            defaultValue: 'Select a color',
            currentValues: [],
        selected : '',
        setSelected:'',
        popover: React.createRef()
    };

            this._handleChange = this._handleChange.bind(this)
      }



      _handleClick() {
        this.setState({ isChecked: !this.state.isChecked });
      }

      _handleChange(value) {
        this.setState({
          currentValues: getToggledOptions(this.state.currentValues, value)
        })
      }

      closeParent() {
            this.state.popover.current.onClose();
      }

    render () {
        console.log(this.props);

      const experience = options.experience.map(item => {
       return (<li  key={item.label}>
                    <Input
                    elementType='checkbox'
            id="checkbox3"
            value={item.value}
            name="example"
            label={
            <span> {item.label}</span>
            }
            isChecked={this.state.isChecked}
            onChange={() => this._handleClick()}/>
                    
                    </li>
                    )
                });

                const employerType = options.employmentType.map(item => {
                    return (<li  key={item.label}>
                                 <Input
                                 elementType='checkbox'
                         id="checkbox3"
                        
                         value={item.value}
                         name="example"
                         label={
                         <span> {item.label}</span>
                         }
                         isChecked={this.state.isChecked}
                         onChange={() => this._handleClick()}/>
                                 
                                 </li>
                                 )
                             });
                             const sort = options.sortBy.map(item => {
                                return (<li  key={item.label}>
                                             <Input
                                             elementType='radio'
                                     id="checkbox3"
                                     value={item.value}
                                     name="example"
                                     label={
                                     <span> {item.label}</span>
                                     }
                                     isChecked={this.state.isChecked}
                                     onChange={() => this._handleClick()}/>
                                             
                                             </li>
                                             )
                                         });

        return(
            <div className={classes.filters}>
    <div className={classes.filters__result}>
        <strong>
            25789 Jobs
        </strong>

    </div>
    <div className={classes.filters__button__container}>

        <Popover ref={this.state.popover}  full="true" triggerNode={ <span className={classes.filters__button}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h"
                className="svg-inline--fa fa-sliders-h fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path fill="currentColor"
                    d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z">
                </path>
            </svg>
            Filter results</span>}
            trigger='click'
            >
                <div className={[classes['filters__wrapper'], classes['filters__wrapper__mobile']].join(' ') }>

                    <div className={classes.filters__wrapper__mobile__title}>
                        <strong>Filter results</strong>
                        <svg onClick={() => this.closeParent()} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>

                    </div>

                <Accordion title="Domain">

                <Multiselect
options={options.selectLabels} // Options to display in the dropdown
selectedValues={this.state.selected} // Preselected value to persist in dropdown
onSelect={this.state.setSelected} // Function will trigger on select event
placeholder="0 selected"
displayValue="name" // Property name to display in the dropdown options
/>
                </Accordion>

 <Accordion title="Experience">
 <ul className={classes.filters__wrapper__list}>
                 
                    {experience}
                </ul>
    </Accordion>
    <Accordion title="Emplyment type">
    <ul className={classes.filters__wrapper__list}>
                         {employerType}
                    </ul>
    </Accordion>
    <Accordion title="Sort by">
    <ul className={classes.filters__wrapper__list}>
                       {sort}
                    </ul>
    </Accordion>

    <div className={classes.filters__wrapper__remote}>

<Input elementType='checkbox'
     id="checkbox3"
     value={'remote'}
     name="example"
     label={
     <span><strong> Work from home (Remote)</strong></span>
     }
     isChecked={this.state.isChecked}
     onChange={() => this._handleClick()}/>

</div>

<div className={classes.filters__wrapper__footer}>
<Button btnType={'Button__default'}>
    <small>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
         Reset</small>
</Button>
<Button btnType={'Button__success'}>
    <small>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
        Apply filters</small>
</Button>
</div>


    </div>

            <div className={[classes['filters__wrapper'], classes['filters__wrapper__desktop']].join(' ') }>
                <div className={classes.filters__wrapper__title}>
                    <h4>Filters results</h4>
                </div>
                <div className={classes.filters__wrapper__domain}>
<h4>Domain</h4>


<Multiselect
options={options.selectLabels} // Options to display in the dropdown
selectedValues={this.state.selected} // Preselected value to persist in dropdown
onSelect={this.state.setSelected} // Function will trigger on select event
placeholder="0 selected"
displayValue="name" // Property name to display in the dropdown options
/>

                </div>
                <div className={styles.row}>
                    <div className={[styles['col-xs-12'], styles['col-sm-6'], styles['col-md-4']
                        ].join(' ')}>
                            <h3>Experience</h3>
                         <ul className={classes.filters__wrapper__list}>
                    
                        {experience}
                    </ul>
                    </div>
                    <div className={[styles['col-xs-12'], styles['col-sm-6'], styles['col-md-4']].join(' ')}>
                            <h3>Employment type</h3>
                         <ul className={classes.filters__wrapper__list}>
                         {employerType}
                    </ul>
                    </div>
                    <div className={[styles['col-xs-12'], styles['col-sm-6'], styles['col-md-4']].join(' ')}>
                            <h3>Sort by</h3>
                         <ul className={classes.filters__wrapper__list}>
                       {sort}
                    </ul>
                    </div>
                                </div>
                                <div className={classes.filters__wrapper__remote}>

                                <Input elementType='checkbox'
                                     id="checkbox3"
                                     value={'remote'}
                                     name="example"
                                     label={
                                     <span><strong> Work from home (Remote)</strong></span>
                                     }
                                     isChecked={this.state.isChecked}
                                     onChange={() => this._handleClick()}/>

</div>
<div className={classes.filters__wrapper__footer}>
<Button btnType={'Button__default'}>
    <small>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
         Reset</small>
</Button>
<Button btnType={'Button__success'}>
    <small>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
   
        Apply filters</small>
</Button>
</div>

                      </div>
                       
                    </Popover>     
    </div>



</div>
         )
    }

};

export default FilterResults;
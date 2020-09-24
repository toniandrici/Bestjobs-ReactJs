import React, { Component } from 'react';

import classes from './Modal.scss';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import styles from '../../styles/main.scss';
import Svg from '../Svg/Svg';
import Button from '../Button/Button';
import Card from '../../components/Card/Card';
import faker from 'faker';
const html = document.querySelector('html');

class Modal extends Component {

    constructor() {
        super() ;

        this.state= {
            openModal: false
        }
        
    }
 

    shouldComponentUpdate(nextProps, nextState) {
        
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children; 
    }
    
    componentWillUpdate() {
        console.log('Modal will update');
    }

    close() {
        this.props.onClose(false);
    }
  
    
        render() {
            let number = (Math.random() * 10) / 2;
           let content =[];
            for (let i = 0; i < number ; i++)
            {
                let images =  faker.image.image();
                content.push ( <div className={classes.modal__header__imgB__wrapper}>
                    <img src={images} alt="img" />
                    </div>)
            }

console.log(this.props);
            if(this.props.show ){

            html.style.overflow='hidden';
            // html.style.='hidden';
        } else {
            html.style.overflow='auto'
        }
            return (
<Auxiliar > 
              


                 <div 
            className={classes.modal}
             
            style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}
             >
               
                <div className={classes.modal__container}
                
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}
                >
                <header>
                    <h3>Job details</h3>
                    <div onClick={() => this.close() } className={classes.modal__close}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                    </div>
                    </header>
                    <div className={styles['col-xs-12']}>
                    <div className={classes.modal__container__wrapper}>
                      

                <div className={classes.modal__container__left}>
                    
                   
                        <div className={classes.modal__header}>
                            <div className={classes.modal__header__imgA}>
                            <img src={this.props.random.img} alt="img" />
                            </div>

                            <div className={classes.modal__header__content}>
                                <h1>{this.props.random.jobTitle}</h1>
                                <span><a href="#">{this.props.random.title}</a></span>
                                <p><small>Responded to 90% of applications in the past 30 days, typically in 3 days</small></p>
                            </div>

                         
                        </div>
                        <div className={classes.modal__spans}>
                            <span>React</span>
                            <span>Angular</span>
                            <span>Javascript</span>
                            <span>VueJs</span>
                            <span>NodeJs</span>
                            <a href="#">...more</a>
                        </div>

                        <div className={classes.modal__description}>
                            <div className={classes.modal__description_label}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" class="svg-inline--fa fa-briefcase fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>
                          <span>Carrer level</span>
                            </div>
                            <div className={classes.modal__description_text}>
                                <p>Middle (2-5 years), Senior (5-10 years)</p>
                            </div>
                            <div className={classes.modal__description_label}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" class="svg-inline--fa fa-briefcase fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>
                          <span>Employment type</span>
                            </div>
                            <div className={classes.modal__description_text}>
                                <p>Full time</p>
                            </div>
                            <div className={classes.modal__description_label}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" class="svg-inline--fa fa-briefcase fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>
                          <span>Spoken languages</span>
                            </div>
                            <div className={classes.modal__description_text}>
                                <p>English</p>
                            </div>

                            <div className={classes.modal__description_label}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" class="svg-inline--fa fa-briefcase fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>
                          <span>Address</span>
                            </div>
                            <div className={classes.modal__description_text}>
                                <p>Bucharest</p>
                            </div>
                            <div className={classes.modal__description_label}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" class="svg-inline--fa fa-briefcase fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>
                          <span>Number of vacancies</span>
                            </div>
                            <div className={classes.modal__description_text}>
                                <p>1</p>
                            </div>
                        </div>

                        <div className={classes.modal__buttons}>
                        <Button btnType={'Button__defaultB'}>
                            
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                            Like</Button>
                        <Button btnType={'Button__defaultB'}>
                            
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                            Dislike</Button>
                        <Button btnType={'Button__defaultB'}>
                            
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" class="svg-inline--fa fa-share fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg>
                            Share</Button>
                        <Button btnType={'Button__success'}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
   
                            Apply</Button>
                        </div>
                        <div className={classes.modal__bigDescription}>
                            <p>{this.props.random.bigDescription}</p>
                        </div>

                        <div className={classes.modal__finalButton}>
                        <Button btnType={'Button__success'}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
   
                            Apply</Button>
                        </div>
                    
                  
                </div>
                <div className={classes.modal__container__right}>
                <div className={classes.modal__header__imgB}>
                                <div className={classes.modal__header__imgB__wrapper}>
                                <img src={this.props.random.img} alt="img" />
                                </div>
                           {content}
                            </div>
                </div>

                </div>

            </div>
            
            <div className={classes.modal__container__footer}>
    <h3>Similar jobs</h3>
    <div className={[styles['row'], styles['row--nested']].join(' ')}>
                <div className={[styles['col-xs-12'], styles['col-sm-6']].join(' ')}>
                    <Card small={true} />
                 </div>
                 <div className={[styles['col-xs-12'], styles['col-sm-6']].join(' ')}>
                    <Card small={true}/>
                 </div>
                 <div className={[styles['col-xs-12'], styles['col-sm-6']].join(' ')}>
                    <Card small={true}/>
                 </div>
                 <div className={[styles['col-xs-12'], styles['col-sm-6']].join(' ')}>
                    <Card small={true}/>
                 </div>
                 <div className={[styles['col-xs-12'], styles['col-sm-6']].join(' ')}>
                    <Card small={true} />
                 </div>
                 <div className={[styles['col-xs-12'], styles['col-sm-6']].join(' ')}>
                    <Card small={true}/>
                 </div>
        </div>
</div>
    
            </div>
          
            </div>
           
         </Auxiliar>  
            )
        }
    } ;
    
    export default Modal;
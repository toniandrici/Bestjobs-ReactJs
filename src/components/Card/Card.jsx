import React, {Component} from 'react';
import styles from '../../styles/main.scss';
import classes from './Card.scss';
import img from '../../assets/test.jpg';
import Button from '../../UI/Button/Button';
import ReactStars from "react-rating-stars-component";
import Modal from '../../UI/Modal/Modal';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import faker from 'faker';
class Card extends Component  {

constructor() {
    super();
    this.state = {
        openModal: false
    };
}




openModal() {

    this.setState({openModal: true});
   
}

handleCancel = (test) => {

 this.setState({openModal: false});
}

    render() {
        let child;
    let random = {
        img: faker.image.image(),
        title: faker.name.title(),
        jobTitle: faker.name.jobTitle(),
        city: faker.address.city(),
        salary: faker.finance.amount(),
        currency: faker.finance.currencySymbol(),
        stars: (Math.random() * 10) / 2,
        bigDescription: faker.lorem.paragraphs()
    }  



if(!this.props.small)
{
    child= (
<Auxiliar>
<Modal show={this.state.openModal}  ref={(ref) => this.state = ref} onClose={this.handleCancel}  random={random}/>
<article onClick={() => this.openModal(random)}   className={classes.card}>


    <header className={classes.card__header}>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart"
            className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z">
            </path>
        </svg>
    </header>
    <main>
        <div className={classes.card__desktop}>
        <div className={classes.card__containerImage}>
            <a className={classes.card__image} href="#">
                <img alt="Post featued image name" sizes="(min-width: 1000px) 930px, 90vw" src={random.img}
                    className="responsive-img lazyload" />
            </a>
        </div>

  

    <div className={classes.card__body}>
        <a className={classes.card__link} href="#">
            <h2 className={classes.card__title}>
                {random.title}
            </h2>
        </a>
        <div className={classes.card__stars}>
                <ReactStars count={5} value={random.stars} size={20} edit={false} color={"#ccc"}  activeColor="#333" />
        </div>
<div className={classes.card__jobTitle}> 
<a href="#">
   <strong>{random.jobTitle}</strong>
</a>

</div>

    </div>
    </div>
    <div className={classes.card__mobile}>
    <div className={classes.card__containerImage}>
            <a className={classes.card__image} href="#">
                <img alt="Post featued image name" sizes="(min-width: 1000px) 930px, 90vw" src={random.img}
                    className="responsive-img lazyload" />
            </a>
            <div>
            <span>{parseInt(random.stars)}</span>
            </div>
            
     </div>
     <div className={classes.card__description}> 
     <div className={classes.card__jobTitle}> 
<a href="#">
<strong>{random.jobTitle}</strong>
</a>
</div>
<div>
<a className={classes.card__link} href="#">
            <h2 className={classes.card__title}>
            {random.title}
            </h2>
        </a>
</div>

<span>{`${random.salary} ${random.currency}`}</span>
<span>{random.city}</span>
</div>

     </div>

    </main>

    <footer className={classes.card__footer}>
    <div className={classes.card__footer__leftRight}>
        <div className={classes.card__footer__left}>
            <span><strong><small>LOCATION</small></strong></span>
            <span><a href="#">{random.city}</a></span>
        </div>
        <div className={classes.card__footer__right}>
        <span><strong><small>SALARY</small></strong></span>
            <span>{`${random.salary} ${random.currency}`}</span>
        </div>
        </div>
        <Button btnType='Button__default' >Details</Button>
    </footer>
</article>


</Auxiliar>

    );
}
else{
    child= (
<Auxiliar>

<article className={[classes['card'], classes['card__little']].join(' ')}>

    <main>
      
    <div className={classes.card__small}>
    <div className={classes.card__containerImage}>
            <a className={classes.card__image} href="#">
                <img alt="Post featued image name" sizes="(min-width: 1000px) 930px, 90vw" src={random.img}
                    className="responsive-img lazyload" />
            </a>
            <div>
            <span>{parseInt(random.stars)}</span>
            </div>
            
     </div>
     <div className={classes.card__description}> 
     <div className={classes.card__jobTitle}> 
<a href="#">
<strong>{random.jobTitle}</strong>
</a>
</div>
<div>
<a className={classes.card__link} href="#">
            <h2 className={classes.card__title}>
            {random.title}
            </h2>
        </a>
</div>

<span>{`${random.salary} ${random.currency}`}</span>
<span>{random.city}</span>
</div>

{/* <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart"
            className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z">
            </path>
        </svg> */}

     </div>

    </main>
</article>


</Auxiliar>
    );

}


  
  return (
<Auxiliar>
    {child}
</Auxiliar>

)
}};


export default Card;
import React, {Component, Fragment} from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import FilterResults from '../../components/FilterResults/FilterResults';
import Card from '../../components/Card/Card';
import Accordion from '../../UI/Accordion/Accordion';
import Modal from '../../UI/Modal/Modal';
import  '../../styles/colapse.scss';
import styles from '../../styles/main.scss';
import classes from './Home.scss';
import faker from 'faker';
import Button from '../../UI/Button/Button';

// test.use();

const options = [
    'one', 'two', 'three'
  ]
  
  const arrowClosed = (
    <span className="arrow_closed" />
  )
  const arrowOpen = (
    <span className="arrow_open" />
  )


class Home extends Component {

    constructor (props) {
     super();
        this.state = {
          selected: '',
          items: []
        }
      }


      onMenuItemClick(item) {
        console.log(item);
      }
    

      componentDidMount() {
      this.loadMore();
      }

      loadMore() {
        let aux = [];
        for(let i = 0 ; i < 8; i ++){
            aux.push( <div className={[styles['col-xs-12'], styles['col-sm-6'], styles['col-md-4'], styles['col-lg-3']].join(' ')}>
            <Card />
        </div>)
        }

        this.setState({items: this.state.items.concat(aux)});
         
      }

     

open(){
    this.setState({flagged: true});
}
      close() {
        this.setState({flagged: false});
      }

render () {

  
   
return(
<Fragment>
    <Navigation />
    <main className={classes.home__main}>
        <div className={styles.wrapper}>
            <div className={styles.row}>
    

            
                <FilterResults />
                </div>
                </div>
                <div className={styles.wrapper}>
                 <div className={[styles['row'], styles['row--nested']].join(' ')}>
                {/* <div className={[styles['col-xs-12'], styles['col-sm-6'], styles['col-md-4'], styles['col-lg-3']].join(' ')}>
                    <Card />
                </div>
                <div className={[styles['col-xs-12'], styles['col-sm-6'], styles['col-md-4'], styles['col-lg-3']].join(' ')}>
                    <Card />
                </div>
                <div className={[styles['col-xs-12'], styles['col-sm-6'], styles['col-md-4'], styles['col-lg-3']].join(' ')}>
                    <Card />
                </div>
                <div className={[styles['col-xs-12'], styles['col-sm-6'], styles['col-md-4'], styles['col-lg-3']].join(' ')}>
                    <Card />
                </div>
                <div className={[styles['col-xs-12'], styles['col-sm-6'], styles['col-md-4'], styles['col-lg-3']].join(' ')}>
                    <Card />
                </div>
                <div className={[styles['col-xs-12'], styles['col-sm-6'], styles['col-md-4'], styles['col-lg-3']].join(' ')}>
                    <Card />
                </div>
                <div className={[styles['col-xs-12'], styles['col-sm-6'], styles['col-md-4'], styles['col-lg-3']].join(' ')}>
                    <Card />
                </div>
                <div className={[styles['col-xs-12'], styles['col-sm-6'], styles['col-md-4'], styles['col-lg-3']].join(' ')}>
                    <Card />
                </div> */}

                         {this.state.items}

                    <div onClick={() => this.loadMore()} className={classes.home__button}>
                         <Button  btnType={"Button__primary"}>See more</Button>
                </div>

            </div>
        </div>
    </main>
    <Footer />
</Fragment>
        )
}

 
};

export default Home;
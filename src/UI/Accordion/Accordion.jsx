import React from 'react';
import classes from './Accordion.scss';
const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className={classes.accordion_wrapper}>
        
        <div
          className={`${classes.accordion_title} ${isOpen ? classes.open : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
        </div>
        <div className={`${classes.accordion_item} ${!isOpen ? classes.collapsed : classes.open}`}>
          <div className={classes.accordion_content}>{children}</div>
        </div>
      </div>
    );
  };

  export default Accordion;
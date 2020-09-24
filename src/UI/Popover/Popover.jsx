import React, {Component} from 'react';
import classes from './Popover.scss';
import PopoverContent from './PopoverContent/PopoverContent.jsx';


const html = document.querySelector('html');


class Popover extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: !!this.props.visible
       
      }
    }
  
    onShow(e) {
     
      // e.stopPropagation();
      this.setState({visible: true});
      
    }
  
    onClose() {
      this.setState({visible: false});
    }
  
    onToggle(e) {
     
      // e.stopPropagation();
      this.setState({visible: !this.state.visible});
     
    }
  
    onClickOutSide() {
      this.onClose();
      this.props.onClickOutSide && this.props.onClickOutSide();
    }
  
    render() {
   
      (this.state.visible &&  window.innerWidth < 800) ? html.style.overflow='hidden': html.style.overflow='auto';
         
      return (
        <div className={[classes.popover, classes[this.props.className]].join(' ')}>
           
          {this.props.triggerNode && React.cloneElement(this.props.triggerNode, {
            onClick: this.props.trigger === 'click' || this.props.trigger === 'hover' ? this.onToggle.bind(this) : null,
            onMouseOver: this.props.trigger === 'hover' ? this.onShow.bind(this) : null
          })}
  
          {this.state.visible &&
            <PopoverContent
              showArrow={this.props.showArrow}
              placement={this.props.placement}
              closeOnClick={this.props.closeOnClick}
              onClickOutSide={this.onClickOutSide.bind(this)}
              className={this.props.full ? 'popover_content__full__page': ''}
              style={this.props.style}
              onClose={this.onClose.bind(this)}
            >
                
              {this.props.children}
             
            </PopoverContent>
  
          }
          </div>
       
      )
    }
  }

  export default Popover;
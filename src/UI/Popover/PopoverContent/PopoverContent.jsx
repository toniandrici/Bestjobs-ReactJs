import React, {Component} from 'react';
import classes from './PopoverContent.scss';


class PopoverContent extends Component {
    handleClickOutSide(e) {
      if(this.node) {
        if(this.props.closeOnClick) {
          this.props.onClose();
        } else {
          if(!this.node.contains(e.target)) {
            this.props.onClickOutSide();
          }
        }
      }
    }
  
    componentDidMount() {
      this.node && this.node.focus();
      window.document.addEventListener('click', this.handleClickOutSide.bind(this), false);
    }
  
    componentWillUnmount() {
      this.node && this.node.blur();
      window.document.removeEventListener('click', this.handleClickOutSide.bind(this), false);
    }
  
    onKeyDown(e) {
      if(e.keyCode === 27) {
        e.stopPropagation();
        this.props.onClose();
      }
    }
  
    render() {
      return (
        <div
          ref={node => this.node = node}
          tabIndex="-1"
          onKeyDown={this.onKeyDown.bind(this)}
          className={`${classes.popover_content} ${this.props.className ? ' ' + classes[this.props.className] : ''}${this.props.placement ? ' ' + this.props.placement : ''}${this.props.showArrow ? ' _arrow':''}`}
          style={this.props.style}
        >
          <div
            className="popover-inner"
          >
            {this.props.children}
          </div>
        </div>
      );
    }
  }

  export default PopoverContent;
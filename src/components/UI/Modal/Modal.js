import React,{Component} from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component{

  //only render the modal when it is necessry
  shouldComponentUpdate(nextProps,nextState){
    return this.props.show!==nextProps.show;
  }
  render(){
    const animateModal ={
      transform: this.props.show?  'translateY(0)':'translateY(-100vh)',
      opacity:this.props.show?  '1':'0',
    };
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.clickModal}/>
        <div className={classes.Modal} style={animateModal}>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }

}

export default Modal;

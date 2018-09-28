import React ,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/actionsIndex';
class Signout extends Component{
  componentDidMount(){
    this.props.sigingout();
  }
  render(){
    return ();
  }
}

const mapDispatchToProps= dispatch=>{
  return {
    sigingout: ()=>dispatch(actions.authSignout),
  }
}
export default connect(null, mapDispatchToProps)(Signout);

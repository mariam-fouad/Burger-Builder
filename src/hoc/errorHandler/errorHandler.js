import React , {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
const errorHandler =(WrapedComponents , axios)=>{
  return class extends Component {
    state= {
      error:null,
    }
    errorConfirmedHandler = ()=>{
      this.setState({error:null});
    }
    componentDidMount(){
      axios.interceptors.response.use (res=>res , error=>{
        this.setState({error:error});
        return error;
      });
      axios.interceptors.request.use (req=>{
        this.setState({error:null});
        return req;
      });
    }

    render (){
      return (
        <React.Fragment>
          <Modal show={this.state.error}
          clickModal={this.errorConfirmedHandler}>
            {this.state.error? this.state.error.message:null}
          </Modal>
          <WrapedComponents {...this.props} />
        </React.Fragment>
      );
    }
  }
}

export default errorHandler;

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
    //not recommended anymore
    // componentWillMount () {
    //     axios.interceptors.request.use(req => {
    //         this.setState({error: null});
    //         return req;
    //     });
    //     axios.interceptors.response.use(res => res, error => {
    //         this.setState({error: error});
    //     });
    // }
    componentWillUnmount(){
      //to remove the interceptors when the component is
      //not showing anymore to save memory
      axios.interceptors.request.eject(this.reqInterceptors);
      axios.interceptors.response.eject(this.resInterceptors);
    }
    errorInterceptors=()=>{
      this.reqInterceptors=axios.interceptors.request.use(req => {
          this.setState({error: null});
          return req;
      });
      this.resInterceptors=axios.interceptors.response.use(res => res, error => {
          this.setState({error: error});
      });
    }

    render (){
      this.errorInterceptors();
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

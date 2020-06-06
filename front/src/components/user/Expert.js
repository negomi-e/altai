import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getUser,
} from '../../redux/user/actions';


class UserPage extends Component {

  componentDidMount() {
    this.props.getUser(localStorage.getItem('id'));
  }


  render() {
    const { user } = this.props;
    return (<>
      
    </>)
  }
}


export default connect(null, {
  getUser,
})(withRouter(UserPage));

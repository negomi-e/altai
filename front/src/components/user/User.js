import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getUser,
} from '../../redux/user/actions';


class User extends Component {

  componentDidMount() {
    this.props.getUser(localStorage.getItem('id'));
  }


  render() {
    const { user } = this.props;
    return (<>
      <h2>Hello User</h2>
      <div>
        <div>
          Foto
        </div>
        <div>
          Info
        </div>
        <div>
          Initiativs
        </div>
      </div>
    </>)
  }
}


export default connect(null, {
  getUser,
})(withRouter(User));

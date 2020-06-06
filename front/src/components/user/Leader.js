import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getUser,
} from '../../redux/user/actions';


class Leader extends Component {

  componentDidMount() {
    this.props.getUser(localStorage.getItem('id'));
  }


  render() {
    const { user } = this.props;
    return (<>
      <h2>Hello Leader</h2>
    </>)
  }
}


export default connect(null, {
        getUser,
})(withRouter(Leader));

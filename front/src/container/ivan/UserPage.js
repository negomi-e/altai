import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import User from '../../components/user/User';
import Leader from '../../components/user/Leader';
import Expert from '../../components/user/Expert';
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
      <h1>Hello, {user.name}</h1>
      {user.leader &&
        user.leader.status
        ?
        <Leader user={user} />
        :
        <User user={user}/>
      }
    </>)
  }
}

const mapStatetoProps = (state) => {
  return {
    user: state.user.user,
  }
}

export default connect(mapStatetoProps, {
  getUser,
})(withRouter(UserPage));


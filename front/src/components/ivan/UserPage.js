import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import User from '../../components/user/User';
import Leader from '../../components/user/Leader';
import Expert from '../../components/user/Expert';
import InitiativeModal from '../../components/Common/Modal/InititativeModal'
import {
  Button,
} from 'react-bootstrap';
import {
  getUser,
} from '../../redux/user/actions';


class UserPage extends Component {
  state = {
    open: false,
  }


  componentDidMount() {
    this.props.getUser(localStorage.getItem('id'));
  }

  setOpen = () => { this.setState({ open: !this.state.open }) }


  render() {
    const { user } = this.props;

    return (<>

      {user.leader &&
        user.leader.status
        ?
        <Leader user={user} />
        :
        <User user={user}/>
      }

<Button className="button" onClick={() => this.setOpen()}>Add initiative</Button>
        {this.state.open ? <InitiativeModal /> : null}

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


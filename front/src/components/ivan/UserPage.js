import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import User from '../../components/user/User';
import Leader from '../../components/user/Leader';
import Expert from '../../components/user/Expert';
import { asyncSendDataToBase, 
  // asyncGetDataAboutPerson 
} from '../../redux/personalCabinet/asyncActionCreator'
import './user.css'


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
    showButton: false
  }

  componentDidMount() {
    this.props.getUser(localStorage.getItem('id'));
    // this.props.asyncGetDataAboutPerson()
  }
  
  changeShowButton = () => {
    this.setState({...this.state, showButton: !this.state.showButton })
  }

  getDataOfForm = (event) => {
     event.preventDefault()
     const { education, experience, publicActivity , socialNetwork } = event.target;
     const id = localStorage.getItem('id')
     this.props.asyncSendDataToBase(id, education.value, experience.value, publicActivity.value, socialNetwork.value )
    }

  setOpen = () => { this.setState({ open: !this.state.open }) }


  render() {
    const { user } = this.props;
   
    return (<div className="profile">

      {user.leader && user.leader.status 
      ?  
      <Leader user={user} /> 
      :  
      <User user={user} 
      changeShowButton={this.changeShowButton} 
      check={this.state.showButton} 
      getDataOfForm={this.getDataOfForm}
      education={this.props.user.education}
      experience={this.props.user.experience}
      publicActivity={this.props.user.publicActivity}
      socialNetwork={this.props.user.socialNetwork}
      votes={this.props.user.votes && this.props.user.votes.length}
      rating={this.props.user.rating}
      name={this.props.user.name}
      /> }

    <br/>
      <Button className="button" onClick={() => this.setOpen()}>Добавить Инициативу</Button>
        {this.state.open ? <InitiativeModal /> : null}
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    dataPerson: state.dataPerson,
  }
}

const mapDispatchToProps = {
  getUser,
  asyncSendDataToBase,
  // asyncGetDataAboutPerson
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserPage));


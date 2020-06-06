import React, { Component } from 'react'
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

function Candidates() {

  const classes = useStyles();


  return (
    <div className={classes.root} >
      <h2>List of all Candidates</h2>
      <p>This is where you  vote</p>
    </div>
  )
}

export default Candidates;

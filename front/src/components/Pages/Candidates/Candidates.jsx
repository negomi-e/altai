import React, { Component } from 'react'
import { connect } from 'react-redux';
import InfluencerCard from './Card'

import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Grid, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px',
  },
  content: {
    marginTop: '20px',
  },

  },
}));

function Candidates() {
  let inputSearch = '';

  const classes = useStyles();
  const influencers = [{
    id: 1,
    name: 'Jeremy',
    votes: 30,
    bio:
      'I love long walks by the beach',
    region: 'Altai',
    topics: [{
      id: 1,
      issue: 'Overcrowded parks',
      createdAt: 1555016400000,
    },
    {
      id: 2,
      issue: 'Overcrowded parks',
      createdAt: 1555016400000,
    }]
  }, {
    id: 2,
    name: 'Lisa',
    votes: 4,
    bio:
      'I am an environmentalist',
    region: 'Lower Altai',
    topics: []
  }, {
    id: 3,
    name: 'Emily',
    votes: 160,
    bio:
      'I am an environmentalist',
    region: 'Altai',
    topics: [{
      id: 1,
      issue: 'Overcrowded parks',
      createdAt: 1555016400000,
    },
    {
      id: 2,
      issue: 'QUARANTINE QUEEN',
      createdAt: 1555016400000,
    }]
  }, {
    id: 4,
    name: 'Alfie',
    votes: 0,
    bio:
      'I am an environmentalist',
    region: 'Lower Altai',
    topics: [{
      id: 1,
      issue: 'Overcrowded parks',
      createdAt: 1555016400000,
    }]
  }]


  let Search = (e) => {
    // this.props.search(e.target.value)
  }

  return (
    <div className={classes.root} >
      <h2>List of all Candidates</h2>
      <TextField  label="Search" margin="normal" onChange={Search(this)} variant="outlined" />
      
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {influencers.map(influencer => (
            <Grid
              item
              key={influencer.id}
              lg={4}
              md={6}
              xs={12}
            >
              <InfluencerCard influencer={influencer} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Candidates;

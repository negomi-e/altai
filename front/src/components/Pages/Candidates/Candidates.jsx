//FUNCTION
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getAllUsers,
} from '../../../redux/user/actions';

//DESIGN
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
}));

const Candidates = (props) => {

  let inputSearch = '';

  useEffect(() => {
    //PROBLEM THIS ONLY RENDERS ONE USER-- I NEED ALL
    props.getAllUsers();
    // return () =>
  }, []);


  const classes = useStyles();



  const Search = (e) => {
    // props.user.search(e.target.value)
  }

  return (
    <div className={classes.root} >
      <h2>Список всех кандидатов</h2>
      <TextField label=" Поиск..." margin="normal" onChange={Search(this)} variant="outlined" />

      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {props.user && props.user.map(influencer => (
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


const mapStatetoProps = (state) => {
  return {
    user: state.user.users,
  }
}

export default connect(mapStatetoProps, {
  getAllUsers,
})(withRouter(Candidates));

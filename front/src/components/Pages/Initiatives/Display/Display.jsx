import React, {Component} from 'react'
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },

}));

function Display (){

    const classes = useStyles();


    return (
        <div className={classes.root} >
            Individual initiative
        </div>
    )
}

export default Display;

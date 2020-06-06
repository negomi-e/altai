import React, {Component} from 'react'
import { connect } from 'react-redux';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    IconButton
  } from '@material-ui/core';
  import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },

}));

function Initiatives (){

    const classes = useStyles();
    const initiatives =[{name: 'Lorem ipsum', author: 'Jeremy', votes: '5'}]

    return (
        <div className={classes.root} >
            <h2>Initiatives</h2>
            <CardContent className={classes.content}>
        <List>
          {initiatives.map((product, i) => (
            <ListItem
              divider={i < initiatives.length - 1}
              key={product.id}
            >
                <IconButton
                edge="end"
                size="small"
              >
                <ExpandLessIcon />
                {product.votes}
              </IconButton>

              <ListItemText
                primary={product.name}
                secondary={`Author ${product.author}`}
              />
              
            </ListItem>
          ))}
        </List>
      </CardContent>
        </div>
    )
}

export default Initiatives;
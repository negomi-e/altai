import React, { useState } from 'react';
// import clsx from 'clsx';
import PropTypes from 'prop-types';
// import uuid from 'uuid/v1';
import moment from 'moment'
import { makeStyles } from '@material-ui/styles';
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
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '40%',
    height: 'auto',
    margin: '40px',
  
    justifyContent: 'flex-start'
    // border: '1px solid gray'
  },
  content: {
    padding: 0,
    
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }

}));

const OngoingProjects = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
    const products = [{
        id: 1,
        name: 'Car Park expansion',
        updatedAt: moment().subtract(2, 'hours')
      },
      {
        id: 2,
        name: 'Park location',
        
        updatedAt: moment().subtract(6, 'hours')
      },
      {
        id: 3,
        name: 'Recycling centre',
        updatedAt: moment().subtract(7, 'hours')
      }]

  return (
    <Card
      {...rest}
      className={classes.root}
    >
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Latest news"
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {products.map((product, i) => (
            <ListItem
              divider={i < products.length - 1}
              key={product.id}
            >
              <ListItemAvatar>
                <img
                  alt="Product"
                  className={classes.image}
                  src={product.imageUrl}
                />
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={`Updated ${product.updatedAt.fromNow()}`}
              />
              <IconButton
                edge="end"
                size="small"
              >
                <MoreVertIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

OngoingProjects.propTypes = {
  className: PropTypes.string
};

export default OngoingProjects;
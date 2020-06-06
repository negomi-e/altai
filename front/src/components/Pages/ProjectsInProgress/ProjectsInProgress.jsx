import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import ProductCard from './ProductCard';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '30px'
  },
  content: {
    marginTop: '20px'
  },
  pagination: {
    marginTop: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const ProjectsInProgress = () => {
  const classes = useStyles();

  const products = [{
    id: 1,
    title: 'New Quarantine Regulations',
    description:
      'Lorem Ipsum .',
    imageUrl: '/images/products/product_1.png',
    totalDownloads: '594',
    updatedAt: '27/03/2019'
  },
  {
    id: 2,
    title: 'Medium Corporation',
    description:
      'Community project to help businesses get back up and running.',
    imageUrl: '/images/products/product_2.png',
    totalDownloads: '625',
    createdAt: '31/03/2019'
  },
  {
    id: 3,
    title: 'Food Bank',
    description:
      'May announcements of food bank changes',
    imageUrl: '/images/products/product_2.png',
    totalDownloads: '625',
    createdAt: '31/03/2019'
  },
  {
    id: 4,
    title: 'Education Project',
    description:
      'Ongoing education project to help children learn in innovative ways.',
    imageUrl: '/images/products/product_2.png',
    totalDownloads: '625',
    createdAt: '31/03/2019'
  },]

  return (
    <div className={classes.root}>
      
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ProjectsInProgress;
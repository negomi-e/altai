import React, { useState } from 'react';
import moment from 'moment'
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// import { StatusBullet } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    height: 'auto',
    margin: '40px',
    justifyContent: 'flex-start'
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: '5px'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refunded: 'danger'
};

const HotTopics = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
const topics =[{
    id: 1,
    issue: 'Overcrowded parks',
    amount: 30.5,
    author: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: '455'
  },
  {
    id: 2,
    issue: 'Quarantine distancing',
    amount: 25.1,
    author: {
      name: 'Cao Yut Fi'
    },
    createdAt: 1555016400000,
    status: '2'
  },
  {
    id: 3,
    issue: 'Just another complaint',
    amount: 10.99,
    author: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: '97'
  },]


  return (
    <Card
      {...rest}
      className={classes.root}
    >
      <CardHeader
        action={
          <Button
            color="primary"
            size="small"
            variant="outlined"
          >
            Новая запись
          </Button>
        }
        title="Новости"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Тема</TableCell>
                  <TableCell>Автор</TableCell>
                  <TableCell>Голоса</TableCell>
                  <TableCell sortDirection="desc">
                    <Tooltip
                      enterDelay={300}
                      title="Sort"
                    >
                      <TableSortLabel
                        active
                        direction="desc"
                      >
                        Дата
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {topics.map(topic => (
                  <TableRow
                    hover
                    key={topic.id}
                  >
                    <TableCell>{topic.issue}</TableCell>
                    <TableCell>{topic.author.name}</TableCell>
                    <TableCell>
                      <div className={classes.statusContainer}>
                        {topic.status}
                      </div>
                    </TableCell>
                    <TableCell>
                      {moment(topic.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          Посмотреть все <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

HotTopics.propTypes = {
  className: PropTypes.string
};

export default HotTopics;

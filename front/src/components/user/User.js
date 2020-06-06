import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px gray solid',
    width: '100%',
    height: 'auto'
  },
  features: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    width: '250px',
    height: '400px',
    display: 'inline-block',
  },
  rootinfo: {
    display: 'inline',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));


function User({ user }) {
  let classes = useStyles();
  console.log(user);
  return (<>

    <div className={classes.rootinfo}>
      <Avatar className={classes.avatar} alt="avatar" src="https://static.ngs.ru/news/24/preview/07e10f76a5ff689531224b72af0cb85e1dd6c995_1200.jpg" />
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Курсаков Иван Сергеевич
        </Typography>
          <Typography variant="h5" component="h2">
            Гражданин
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Образование Высшее(АГУ)
        </Typography>
          <Typography variant="body2" component="p">
            <b>Сфера деятельности: </b> Бизнесмен-ресторатор
          <br />
            <b>Общественная деятельность: </b> Организация благотворительных акций
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Проголосовать!</Button>
        </CardActions>
      </Card>

    </div>
    <div>
      Initiativs
        </div>
  </>)
}



export default (withRouter(User));

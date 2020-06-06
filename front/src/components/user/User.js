import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

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
    height: '400px'
  }

}));


function User({ user }) {
  let classes = useStyles();
  return (<>

    <div className={classes.root}>
      <Avatar className={classes.avatar} alt="avatar" src="https://yandex.ru/images/search?pos=6&ncrnd=1591456700565-298208267073903&img_url=https%3A%2F%2Fmtdata.ru%2Fu5%2FphotoB5E5%2F20713182564-0%2Foriginal.jpg&text=%D0%B8%D0%BB%D1%8C%D1%8F+%D0%B2%D0%B0%D1%80%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2&rpt=simage" />
      <div>
        Info
        </div>
      <div>
        Initiativs
        </div>
    </div>
  </>)
}



export default (withRouter(User));

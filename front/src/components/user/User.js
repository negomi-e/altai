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

const style = {
  input: {
    margin: 10, borderRadius: 15, outline: "none", marginLeft: 40 , width: 280, height: 20
  },
  button: {
    borderRadius: 15, outline: "none", marginLeft: 75, margin:15, width: 250, height: 30, fontSize: 17
  },
  label: {
    marginLeft: 10 , fontWeight: "bold" , fontSize:20, marginTop: 5, textDecoration: 'underline'
  },
  buttonSubmit:{
    width: 200,
    height: 30,
    borderRadius: 15,
    outline: "none",
    margin:15, 
    marginLeft: 260 , 
    boxShadow: '0 0 10px rgb(245, 153, 15)',
    fontSize: 18
  }
}




function User({
   user, changeShowButton, check, getDataOfForm,
   education, experience, publicActivity, 
   socialNetwork, votes, rating,name}) {
  let classes = useStyles();

  return (<>

    <div className={classes.rootinfo}>
      <Avatar className={classes.avatar} alt="avatar" src="https://static.ngs.ru/news/24/preview/07e10f76a5ff689531224b72af0cb85e1dd6c995_1200.jpg" />
      <Card className={classes.root}>
        <CardContent>
       <label style={{fontSize: 20 ,marginRight: 20, fontWeight: 'bold'}}> голосов {votes} </label> | 
       <label style={{fontSize: 20 ,marginLeft: 20, fontWeight: 'bold'}}> ваш рейтинг: {rating}</label>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {name}
        </Typography>
          <Typography variant="h5" component="h2">
          <b>Статус: </b>  Гражданин
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
          <b>Образование: </b> {education ? education : "нет данных"}
        </Typography>
          <Typography variant="body2" component="p">
            <b>Сфера деятельности: </b> {experience == ''   ? "нет данных" : experience }
          <br />
            <b>Общественная деятельность: </b> {publicActivity  == '' ? "нет данных" : publicActivity }
            
          </Typography>
        </CardContent>
        {/* <CardActions> */}
          {/* <Button size="small">Проголосовать!</Button> */}
        {/* </CardActions> */}

        { 
         check 
         ? <button onClick={()=> changeShowButton()} style={style.button}> Свернуть</button>
         : <button onClick={()=> changeShowButton()} style={style.button}> Заполнить данные о себе</button>
        }

       { check &&
       <div style={{ 
         width: 500, 
         margin: 10, 
         border: "2px solid blue",
         borderRadius: 12,
         boxShadow: '0 0 15px rgb(19, 11, 97)' }}>
        <form onSubmit={getDataOfForm}>
       <label style={style.label}>Oбразование:</label><br/>
          <input style={style.input} name="education" placeholder="  укажите образование" /> <br/>
       <label style={style.label}> Cтаж: </label><br/>
          <input style={style.input} name="experience" placeholder="  укажите стаж" /> <br/>
       <label style={style.label}>Общественная деятельность: </label> <br/>
          <input style={style.input} name="publicActivity" placeholder="  укажите общественную деятельность" /><br/>
       <label style={style.label}> Социальная сеть:</label><br/>
         <input style={style.input} name="socialNetwork" placeholder="  укажите социальную сеть" /> <br/>
         
      <button type="submit" style={style.buttonSubmit} >Сохранить</button>
        </form>
      </div>
      }
      </Card>
        
    </div>
    {/* <div> */}
      {/* Initiativ */}
        {/* </div> */}
  </>)
}


export default (withRouter(User));

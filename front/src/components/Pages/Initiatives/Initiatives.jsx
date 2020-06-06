
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: '41.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

 function Initiatives() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const data = [{
    name: 'W',
    subject: 'Высилить всех бобров с их земель',
    date: Date(),
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0%2C%D0%9C%D0%B5%D1%87%D1%82%D0%B0%2C%D0%9A%D1%80%D0%B0%D1%81%D0%B0%D0%B2%D0%B8%D1%86%D0%B0.jpg/2880px-%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0%2C%D0%9C%D0%B5%D1%87%D1%82%D0%B0%2C%D0%9A%D1%80%D0%B0%D1%81%D0%B0%D0%B2%D0%B8%D1%86%D0%B0.jpg",
    shortText: 'Уважаемые Москвичи! В последние дни многие из Вас получили несправедливые штрафы, связанные с нарушением режима самоизоляции, которой на самом деле не было.',
    fullText: 'Людям, оказавшимся в тяжелом материальном положении, потерявшим работу, не умеющим пользоваться смартфоном, соблюдающим все правила самоизоляции, приходят штрафы из-за глючного и плохо работающего приложения "Социальный мониторинг" В социальных сетях появилось огромное количество описаний ситуаций, вызывающих недоумение и возмущение.В результате разработки приложения "Социальный мониторинг" москвичам нанесен огромный вред и можно в ближайшее время ожидать, что больные люди откажутся от обращений за медицинской помощью, чтобы не получать незаконные штрафы.Это положительно скажется или уже сказалось на статистике заболеваемости коронавирусом в г.Москве, но не на истинном числе заболевших.'
  },
  {
    name: 'A',
    subject: 'Высилить всех бобров с их земель',
    date: Date(),
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0%2C%D0%9C%D0%B5%D1%87%D1%82%D0%B0%2C%D0%9A%D1%80%D0%B0%D1%81%D0%B0%D0%B2%D0%B8%D1%86%D0%B0.jpg/2880px-%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0%2C%D0%9C%D0%B5%D1%87%D1%82%D0%B0%2C%D0%9A%D1%80%D0%B0%D1%81%D0%B0%D0%B2%D0%B8%D1%86%D0%B0.jpg",
    shortText: 'Уважаемые Москвичи! В последние дни многие из Вас получили несправедливые штрафы, связанные с нарушением режима самоизоляции, которой на самом деле не было.',
    fullText: 'Людям, оказавшимся в тяжелом материальном положении, потерявшим работу, не умеющим пользоваться смартфоном, соблюдающим все правила самоизоляции, приходят штрафы из-за глючного и плохо работающего приложения "Социальный мониторинг" В социальных сетях появилось огромное количество описаний ситуаций, вызывающих недоумение и возмущение.В результате разработки приложения "Социальный мониторинг" москвичам нанесен огромный вред и можно в ближайшее время ожидать, что больные люди откажутся от обращений за медицинской помощью, чтобы не получать незаконные штрафы.Это положительно скажется или уже сказалось на статистике заболеваемости коронавирусом в г.Москве, но не на истинном числе заболевших.'
  }
]

  return (
    <Container fixed>
      <>
      {data.map((item) => {
        return <>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {item.name}
          </Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={item.subject}
            subheader={item.date}
          />
          <CardMedia
            className={classes.media}
            image={item.image}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.shortText}
        </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
               {item.fullText}
          </Typography>
            </CardContent>
          </Collapse>
          <br/>
        </Card>
        <br/>
        </>
      })}
      <br/>
      </>
    </Container>
  );
}

export default Initiatives;

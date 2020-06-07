import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment'
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core/';

import { faHome, faUser, faUserTie, faUserAstronaut, faUserGraduate, faUserSecret, faCrown } from "@fortawesome/free-solid-svg-icons";
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import TelegramIcon from '@material-ui/icons/Telegram';

  import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
  import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '80%',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    minHeight: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
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
    backgroundColor: '#afeeee',
  },
  leader:{
    backgroundColor: '#FFDF00'
  }
}));

export default function InfluencerCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { influencer } = props
  const topics = influencer.reports

  let positionicon;
  switch (influencer.position) {
    case 'amateur':
      positionicon = faUser
      break;
    case 'helper':
      positionicon = faUserTie
      break;
    case 'launch':
      positionicon = faUserAstronaut
      break;
    case 'leader':
      positionicon = faCrown
      break;
    case 'mentor':
      positionicon = faUserGraduate
      break;
    default:
      positionicon = faUser
  }



  return (
    <Card className={classes.root} key={influencer._id}>
      <CardHeader
        avatar={
          <Avatar aria-label="icon-role" className={classes.avatar}>
            {positionicon === 'leader'?<FontAwesomeIcon className={classes.leader} icon={positionicon} />:
            <FontAwesomeIcon icon={positionicon} />}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <TelegramIcon />
          </IconButton>
        }
        title={influencer.name}
        subheader={influencer.region}
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="icon"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {influencer.bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="vote">
          <ThumbUpIcon />
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
          <Typography paragraph>Their initiatives</Typography>
          <Table>
            <TableBody>
              {topics.length > 0 ? topics.map(topic => (
                <TableRow
                  hover
                  key={topic._id}
                >
                  <TableCell>{topic.report}</TableCell>
                  <TableCell>
                    {moment(topic.createdAt).format('DD/MM/YYYY')}
                  </TableCell>

                </TableRow>
              )) : <div> No initiatives</div>}
            </TableBody>
          </Table>
        </CardContent>
      </Collapse>
    </Card>
  );
}
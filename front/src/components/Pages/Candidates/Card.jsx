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

import { red } from '@material-ui/core/colors';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    color: 'black'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

export default function InfluencerCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const {influencer} = props
  const topics = influencer.reports
  

  return (
    <Card className={classes.root} key={influencer._id}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {influencer.votes.length}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={influencer.name}
        subheader={influencer.region}
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="icon"
      />
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
                {topics.length>0? topics.map(topic => (
                  <TableRow
                    hover
                    key={topic._id}
                  >
                    <TableCell>{topic.report}</TableCell>
                    <TableCell>
                      {moment(topic.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                   
                  </TableRow>
                )): <div> No initiatives</div>}
              </TableBody>
            </Table>
        </CardContent>
      </Collapse>
    </Card>
  );
}
import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    grid: {
        display: 'flex',
        width:'80%',
        alignItems: 'center'
    },
    title:{
        alignItems: 'center'
    },
    gridList:{
        flexWrap: 'nowrap',
        height: 'auto',
        transform: 'translateZ(0)',
        padding: '40px'
    },
    tile:{
    width: '30% !important',
    display: 'flex',
    alignItems: 'center',
    },
    card:{
        padding: '10px'
    }

}));

export default function TopCandidates () {

        const leader = ['Alfie', 'James', 'Phoebe', 'Katie']
        const classes = useStyles();

        return (
            <div  className={classes.root} spacing={2}>
                <Typography variant="h2" color="textSecondary" component="h2" className={classes.title}>This month's leaders</Typography>
                
            <GridList className={classes.gridList} cols={2.5}>
                    {/* <Grid container className={classes.grid} justify="center" > */}
                        {leader.map((value) => (
                            <GridListTile key={value} className={classes.tile}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {value}
                                                
          </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                They are your point of contact for 'Health'.
                                                {value} is passionate about all issues. 
                                                Contact info
                                                Role
          </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
        </Button>
                                        <Button size="small" color="primary">
                                            Their initiatives
        </Button>
                                    </CardActions>
                                </Card>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
        )
    }

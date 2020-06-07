import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
    getLeaders,
} from '../../../../redux/user/actions';
import altai from '../../../../public/images/structure.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign: 'center',
        itemsAlign: 'center',
        // overflow: 'hidden',
        background: `url(${altai})`,
    backgroundSize: '100%',
    // backgroundAttachment: 'fixed'
    },
    grid: {
        display: 'flex',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        paddingTop: '20px',
        alignItems: 'center',
        maxHeight: '100px'
    },
    gridList: {
        flexWrap: 'flex',
        height: 'auto',
        transform: 'translateZ(0)',
        padding: '40px',
        justifyContent: 'center',
        textAlign: 'center',
        itemsAlign: 'center',
    },
    tile: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        padding: '10px',
        backgroundColor: '#0C4D75',
        // opacity: '.9',
        color: 'white !important',
    },
    // actions: {
    //     backgroundColor: '#0C4D75',
    //     color: 'white',
    // }

}));

function TopCandidates(props) {

    useEffect(() => {
        //PROBLEM THIS ONLY RENDERS ONE USER-- I NEED ALL
        props.getLeaders();
        // return () =>
    }, []);

    const leader = ['Alfie', 'James', 'Phoebe', 'Katie']
    const classes = useStyles();

    console.log('these are the props', props.user)

    return (
        <div className={classes.root} spacing={2}>
            <Typography variant="h2" color="grey" component="h2" className={classes.title}>Ваш представитель</Typography>
        <br/>
            <GridList className={classes.gridList} cols={2.5}>
                {/* <Grid container className={classes.grid} justify="center" > */}
                {props.user.map((value) => (
                    <GridListTile key={value._id} className={classes.tile}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {value.name}

                                    </Typography>
                                    <Typography variant="body2" color="white" component="p">
                                    Ваш местный представитель
                                    <br/>
                                    Контактная информация: <b>{value.phone}</b>

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.actions}>
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


const mapStatetoProps = (state) => {
    return {
        user: state.user.leaders,
    }
}
export default connect(mapStatetoProps, {
    getLeaders,
})(withRouter(TopCandidates));
import React from 'react'
import { connect } from 'react-redux';

import TopCandidates from './Parts/TopCandidates'
import OngoingProjects from './Parts/OngoingProjects'
import HotTopics from './Parts/HotTopics'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        // border: '1px gray solid',
        width: '100%',
        height: '300px'
    },
    features:{
    display: 'flex',
    justifyContent: 'top',
    alignItems: 'center',
    width: '100%',
    margin: '50px'
    }

}));


function Home (){

let classes = useStyles();
    return (
        <div className={classes.root} >
            <TopCandidates />
            <div className={classes.features}>
             <OngoingProjects />
            <HotTopics />
            </div>
        </div>
    )
}


export default Home;
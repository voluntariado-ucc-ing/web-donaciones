import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#19A4E0',
    },
}))(LinearProgress);

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CustomizedProgressBars(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BorderLinearProgress variant="determinate" value={props.progress} />
        </div>
    );
}

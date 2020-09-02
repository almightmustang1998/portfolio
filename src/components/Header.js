import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box} from "@material-ui/core";
import avatar from "../headshot.jpg";
import Typed from "react-typed";

// CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "white"
    },
    subtitle: {
        color: "white",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute", 
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className = {classes.typedContainer}>
        <Grid container justify="center">
            <Avatar className = {classes.avatar} src={avatar} alt="Carlos Chavez" />
        </Grid>
        <Typography className = {classes.title} varient="h4">
            <Typed strings={["Carlos Chavez"]} typeSpeed={20} />
        </Typography>
        <br/>

        <Typography className = {classes.subtitle} varient = "h5">
            <Typed strings={["CS Senior @ Temple University", "4.0 GPA", "Searching for Summer 2021 internship"]} 
            typeSpeed={20}
            backSpeed={10}
            loop
             />
        </Typography>
        </Box>
    );
};

export default Header

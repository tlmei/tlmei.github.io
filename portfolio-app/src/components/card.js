import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 400,
    objectFit: 'cover',
    width: '100%'
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.cardTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.cardText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
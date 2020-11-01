import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Fade, Typography, Hidden } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';

import MediaCard from './card';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "hidden",
    maxWidth: 1000,
    maxHeight: 1000,
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "100%",
    height: "auto",
    padding: "35px",
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>
        <MediaCard 
          image={props.image} 
          cardTitle={props.cardTitle} 
          cardText={props.cardText}
        />
      </div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img className={classes.image} src={props.image}/>
            <Typography variant="h6">{props.modalTitle}</Typography>
            <Typography variant="subtitle1">{props.modalSubtitle}</Typography>
            <Typography variant="subtitle1">{props.modalDetails}</Typography>
            <Typography variant="body1">{props.modalDescription}</Typography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
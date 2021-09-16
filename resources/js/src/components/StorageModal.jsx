import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import HomeIcon from '@material-ui/icons/Home';


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
  },
}));

export default function StorageModal(props) {
  const classes = useStyles();

  // open storage modal
  const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

  return (
    <div>
    <HomeIcon style={{cursor: 'pointer'}} onClick={handleOpen} />
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
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
            <h2 id="spring-modal-title">{props.storage && props.storage.location 
            ? props.storage.location : 'Kein Lagerort vorhanden'}</h2>
            <ul className="list-group" id="spring-modal-description">
                {
                    props.storage && props.storage.rack
                    ? <li className="list-group-item">{props.storage.rack}</li>
                    : null
                }
                {
                    props.storage && props.storage.shelf_position
                    ? <li className="list-group-item">{props.storage.shelf_position}</li>
                    : null
                }
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

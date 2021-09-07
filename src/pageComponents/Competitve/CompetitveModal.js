import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '../../components/TextField';
import BUtton from '../../components/Button';
import { useHistory } from 'react-router-dom';


function getModalStyle() {
  const top = 25;
  return {
    top: `${top}%`,
    margin:'auto'
  };
}


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: 'rgba(109, 181, 181, 0.39)',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    color: 'white'
  },
}));

export default function CodeChefCArd({open, title, para, btncontent, onChange, name, value, onClick}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const history = useHistory();



    const body = (
        <div style={modalStyle}  className={classes.paper}>
            <h2 id="simple-modal-title">{title}</h2>
            <p id="simple-modal-description">
                {para}
            </p>
            
            <div style={{display:'flex',alignItems:'center', margin: '15px', flexDirection:'column'}} >
                <TextField placeholder={btncontent} color="white" bg="#003366" w="400px"
                            name={name}
                            onChange ={onChange}
                            value={value}
                            required/>
                <BUtton m="10px" h="40px" w="200px" onClick={onClick}>
                  {btncontent}
                </BUtton>
            </div>

            <BUtton m="10px" h="40px" w="200px" onClick={() => history.push('/')}>
                  Go to Home
            </BUtton>
        </div>
    );

    return (
    <div>
        <Modal
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            open={open}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    </div>
  );
}
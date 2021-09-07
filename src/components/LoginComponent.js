import {makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';


const Input = withStyles({
    root: {
        width: '95%',
        backgroundColor: 'rgba(196, 196, 196, 0.1)',
        color: 'rgba(196, 196, 196, 0.1)',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'lightgray',
            },
            '&:hover fieldset': {
                borderColor: 'lightgray',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'lightgray',
            },
        },
    }
})(TextField);

const  ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(blue[900]),
        padding: '10px',
        backgroundColor: blue[900],
        width: '95%',
            '&:hover': {
                backgroundColor: blue[800],
            },
    },
}))(Button);

const  useStyles = makeStyles((theme) => ({
    margin: {
        boxShadow : '0 5px 15px rgba(0,0,0,0.19)',
        margin: theme.spacing(1),
    },
    input: {
        color: "white"
    }
}));

export {Input, ColorButton, useStyles }
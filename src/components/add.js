import React, { useState } from 'react';
import { Jumbotron, Table,Badge } from "reactstrap";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

function Add(props) {
  const handleSubmit = props.handleSubmit;
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: 1, arrivalTime: '', burstTime: '' },
  ]);
  const [processCounter, setProcessCounter] = useState(1);

  const incrementCounter = () => {
      setProcessCounter(count => count+1);
  }

  const decrementCounter = () => {
    setProcessCounter(count => count-1);
}

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    handleSubmit(inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    incrementCounter();
    setInputFields([...inputFields, { id: processCounter+1,  arrivalTime: '', burstTime: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
    decrementCounter();
  }

  return (
    <Container>
    <h2 style={{  marginLeft: "10px" }}><Badge color="secondary">Add New Job</Badge></h2>
      {/* <h1>Add New Job</h1> */}
      <br></br>
      <form className={classes.root} onSubmit={handleFormSubmit}>
        { inputFields.map(inputField => (
          <div key={inputField.id}>

          <TextField
              label="Process ID"
              variant="filled"
              value={inputField.id}
              disabled={true}
            />
            <TextField
              name="arrivalTime"
              label="Arrival Time"
              variant="filled"
              value={inputField.arrivalTime}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="burstTime"
              label="CPU Burst"
              variant="filled"
              value={inputField.burstTime}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            
            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >Schedule</Button>
      </form>
    </Container>
  );
}

export default Add;
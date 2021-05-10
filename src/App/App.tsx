import './App.css';

import { Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  Button: {
    marginBottom: theme.spacing(2),
  },
  Item: {
    margin: theme.spacing(2),
  },
  Paper: {
    justifyContent: 'center',
    margin: `${theme.spacing(2)}px auto`,
    width: theme.spacing(50),
  },
  PaperAll: {
    margin: '20px auto',
    textAlign: 'left',
    width: theme.spacing(50),
  },
}));

function App() {
  const classes = useStyles();

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');

  const [all, setAll] = useState({ a, b, c, d });

  return (
    <div className="App">
      <form
        autoComplete="off"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          setAll({ a, b, c, d });
        }}
      >
        <Paper className={classes.Paper}>
          <Typography variant="h4">Registration Form</Typography>

          <div className={classes.Item}>
            <TextField fullWidth label="Enter name" onChange={(e) => setA(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField fullWidth label="Enter surname" onChange={(e) => setB(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField fullWidth label="Enter e-mail" onChange={(e) => setC(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField fullWidth label="Enter password" onChange={(e) => setD(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <Button className={classes.Button} type="submit" variant="outlined">
              Submit
            </Button>
          </div>
        </Paper>
      </form>
      <Paper className={classes.PaperAll}>
        <pre>{JSON.stringify(all, null, 2)}</pre>
      </Paper>
    </div>
  );
}

export default App;
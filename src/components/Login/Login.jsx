import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'

import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import React from 'react'

export default function Login() {
  // estilos para el paper
  const paperStyle = {
    padding: 20,
    height: '80vh',
    width:'280px',
    margin: '20px 900px',
  }
  const avatarStyle = {
    backgroundColor: '#564cb9',
  }
  const buttonStyle={
  marginTop: '100px',
  marginBottom: '20px',
}
const linkStyle={
  textDecoration: 'none',
  color: '#574cb9',
}
  return (
    <Grid >
      {/* elevation da ese efecto de sombra */}
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle} ><LockIcon/></Avatar>
          <h2>Log in</h2>
        </Grid>
        <TextField label='Email' placeholder='Enter email' fullWidth='true' required  variant="standard"/>
        <TextField label='Password' placeholder='Enter password' type='password' fullWidth='true' required  variant="standard"/>
        <Button variant='contained' color='primary' fullWidth='true' type='submit' style={buttonStyle}>Log in</Button>
        <Grid container spacing={1}>
          <Grid item xs>
            <Typography>
              <Link to="/" style={linkStyle}>Forgot password</Link>
            </Typography>
          </Grid>
          <Grid item xs>
              <Typography>
            <Link to="/" style={linkStyle}>Create an account</Link>
          </Typography>
          </Grid>
          
          
         </Grid>
      </Paper>
    </Grid>
  )
}

import { useState } from 'react'
import { useAuth } from '../hooks/auth'

import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState('')
  const auth = useAuth()

  const signedIn = () => {
    console.log('signed in')
  }

  if (auth.user) {
    return(<Navigate to={'/tasks'} />)
  } else {
    return(
      <Container maxWidth={'lg'}>
        <Paper elevation={4} sx={{p: 4, textAlign: 'center'}}>
          <Typography variant='h3' sx={{m: 2}}>Login</Typography>
          <TextField onChange={e => setUser(e.target.value)} placeholder='User Name'/>
          <br/>
          <Button onClick={() => auth.signin(user, signedIn)}>Login</Button>
        </Paper>
      </Container>
    )
  }
  
  
}

export default Login
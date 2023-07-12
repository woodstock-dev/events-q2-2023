import React, { useState } from 'react'
import { useAuth } from '../hooks/auth'

import { Button, TextField } from '@mui/material'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState('')
  const auth = useAuth()

  const signedIn = () => {
    console.log('signed in')
  }

  if (auth.user) {
    return(<Navigate to={'/events'} />)
  } else {
    return(
      <React.Fragment>
        <TextField onChange={e => setUser(e.target.value)}/>
        <Button onClick={() => auth.signin(user, signedIn)}>Login</Button>
      </React.Fragment>
    )
  }
  
  
}

export default Login
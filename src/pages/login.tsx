import React, { useState } from 'react'
import { useAuth } from '../hooks/auth'

import { Button, TextField } from '@mui/material'

const Login = () => {
  const [user, setUser] = useState('')
  const auth = useAuth()

  const signedIn = () => {
    console.log('signed in')
  }
  
  return(
    <React.Fragment>
      {auth.user}
      <TextField onChange={e => setUser(e.target.value)}/>
      <Button onClick={() => auth.signin(user, signedIn)}>Login</Button>
    </React.Fragment>
  )
}

export default Login
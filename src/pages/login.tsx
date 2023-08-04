// Copyright 2023 Ryan McGuinness
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { useState } from 'react'
import useAuth from '../hooks/authHook'

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
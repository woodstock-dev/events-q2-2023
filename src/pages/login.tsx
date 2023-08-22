import { useState } from 'react'
import useAuth from '../hooks/authHook'
import { Button, TextField } from '@mui/material'
import { Navigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

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
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField 
              onChange={e => setUser(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button 
              onClick={() => auth.signin(user, signedIn)}
              type="submit"
              fullWidth
              color="secondary"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                Login
            </Button>
          </Box>
        </Box>
      </Container>
      

    )
  }
  
  
}

export default Login

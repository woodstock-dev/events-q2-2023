// Copyright 2023 YOUR NAME HERE
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
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import  Container  from "@mui/material/Container";
import {useAuth} from "../Context/authModel"
import { Navigate } from "react-router-dom";
export default function Login(){
const [ user, setUser]= useState("");
const auth= useAuth();
const signedIn = () =>{
console.log("signedIn")
}
if (auth.user){
  return <Navigate to ={ "/events"}/>
}
else {
 return (
    <Container maxWidth='xs'>
    <Box 
      display='flex'
      flexDirection='column'
      component="form" 
      noValidate sx={{ mt: 1 }}
    >
            <TextField
              margin='normal'
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange ={(j) => setUser(j.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" background-color="#FF7F50" />}
              label="Remember me"
            />
            <Button
              // type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              fullWidth
              onClick={() => auth.signin(user,signedIn)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Container>
  );
}
}
/**
 * Copyright 2023 Josilyn McGuinness
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/authHook";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const signedIn = () => {
    console.log("signed in");
  };
  if (auth.isAuthenticated()) {
    return <Navigate to={"/plans"} />;
  } else {
    return (
      <Container sx={{ width: 400 }}>
        <Paper elevation={3} >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main", mt: 3 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                onChange={(e) => setUser(e.target.value)}
              />
              <Button
                onClick={() => auth.signin(user, signedIn)}
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 3 }}>
                Sign In
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    );
  }
};

export default Login;

/*
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
          <FormControlLabel control={<Checkbox value="remember" color="secondary" />} label="Remember me" />
                    <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color="secondary">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" color="secondary">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          */

// Copyright 2023 Cody Black
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

import React from 'react';
import { useNavigate } from "react-router-dom"
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import useAuth from "../hooks/auth.tsx";

const Header = () => {
  const nav = useNavigate();
  const auth = useAuth();

  function handleSignout () {
    auth.signout(() => console.log("signed out"));
    nav("/");
  }

  
   return (
    <React.Fragment>
      <Toolbar>
        <AppBar>
          <Typography variant="h6" component="h1">
            <Button color="inherit" onClick={() => nav('/')}>Home</Button>
            <Button color="inherit" onClick={() => nav('Events')}>Events</Button>
            <Button color="inherit" onClick={() => nav('Events/details')}>Event Details</Button>
            <Button color="inherit" onClick={() => nav('Events/add')}>Add Event</Button>
            {auth.isAuthenticated() ? (
            <Button color="inherit" onClick={handleSignout}>SignOut</Button>) : null}
          </Typography>
          
        </AppBar>
      </Toolbar>
    </React.Fragment>
   )
}
export default Header;
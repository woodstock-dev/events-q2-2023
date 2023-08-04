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

import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/authHook"
import React from "react";

const Header = () => {
  const auth = useAuth();
  const nav = useNavigate()
  return(
      <Box sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: 'row',
          alignItems: 'center',
          height: '60px',
          borderBottom: '.5px solid #cccccc',
          mb: 2}}>
          <Box flexGrow={6} paddingLeft={2}>
            <Typography variant="h6">Events</Typography>
          </Box>
          <Box flexGrow={6} alignSelf={'right'} textAlign={'right'} paddingRight={2}>
          {
            (auth.isAuthenticated()) ?
              <React.Fragment>
                <Button color="inherit" onClick={() => nav('/tasks')}>Tasks</Button>
                <Button color="inherit" onClick={() => auth.signout(() => nav('/'))}>Logout</Button>
              </React.Fragment>: <></>
          }
          </Box>
      </Box>
  )
}

export default Header


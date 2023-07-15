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
import { useNavigate } from "react-router-dom";
import { Button, AppBar, Toolbar, styled, Box, Typography } from '@mui/material'



const Header = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    padding: '25px'
  })

  const nav = useNavigate() // A react hook

  return(
     <AppBar position="static">
        <StyledToolbar>
          <Typography variant="h4"><Typography variant="h4" component="span" color="secondary">TASK</Typography>App</Typography>
          <Box>
            <Button variant="outlined" color="secondary" onClick={() => nav('/')}>Login</Button>
            <Button color="inherit" onClick={() => nav('/Form')}>Form</Button>
            <Button color="inherit" onClick={() => nav('/Events')}>Events</Button>
            <Button color="inherit" onClick={() => nav('/EventView')}>Event View</Button>
          </Box>
        </StyledToolbar>
      </AppBar>
  )
}

export default Header
import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/auth"
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


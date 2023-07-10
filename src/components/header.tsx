import { Box, Button, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/auth"

const Header = () => {
  const auth = useAuth();
  const nav = useNavigate()
  return(
    <Box position={'relative'} 
         left={0}
         top={0} 
         display={'flex'} 
         flexDirection={'row'} 
         flexGrow={1}
         height={'60px'} sx={{borderBottom: '.5px solid #cccccc', mb: 2}}>
      <Grid container>
        <Grid container 
              xs={6}
              alignItems={'center'}
              sx={{pl: 2}}>
          <Typography variant="h6">Events</Typography>
        </Grid>
        <Grid container
              xs={6}
              justifyContent={'flex-end'}
              alignItems={'center'}
              sx={{pr: 2}}>

          {
            (auth.isAuthenticated()) ?
              <>
                <Button color="inherit" onClick={() => nav('events')}>Events</Button>
                <Button color="inherit" onClick={() => nav('events/create')}>Add Event</Button>
                <Button color="inherit" onClick={() => auth.signout(() => nav('/'))}>Logout</Button>
              </> : <></>
          }
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header


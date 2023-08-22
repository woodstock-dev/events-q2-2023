
import { Toolbar, Typography, colors, Link, styled } from '@mui/material'

  const Copyright = () => {

    return (
      <Typography variant="body2" color="white">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Heather Jackson
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const StyledToolbar = styled(Toolbar)({
      marginTop: 'auto',
      backgroundColor: colors.grey[900],
      display: 'flex',
      justifyContent: 'center' 
  })

  const Footer = () => {
    return(
      <StyledToolbar>
        <Copyright />
      </StyledToolbar>
    )
  }

export default Footer

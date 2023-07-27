import './footer.css';
import { Toolbar, Typography  } from '@mui/material';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

const Footer = () => {
  return(
    <Toolbar component={'footer'} style={{position: "static", backgroundColor: "#4974a5", height: "8vh"}}>
      <Typography variant='overline' color='primary'><CopyrightOutlinedIcon fontSize="small" color="primary"/>2023 &nbsp;&nbsp;Josilyn McGuinness</Typography>
    </Toolbar>
  )
}

export default Footer;
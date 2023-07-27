import "./header.css";
import { useNavigate } from "react-router-dom";
import { Toolbar, AppBar, Typography, Button, Box } from "@mui/material";
import logo from "../assets/planIt_icon.png";

//This is a bit overkill for this project, but I wanted to practice
const navigationLinks = [
  { name: "LOGIN", to: "/" },
  { name: "EVENT LIST", to: "/events" },
  { name: "ADD EVENT", to: "/events/details" },
];

const Header = () => {
  const nav = useNavigate();

  const navLinks = navigationLinks.map((item) => (
    <Button color="secondary" sx={{fontWeight: "bold"}} onClick={() => nav(item.to)}>
      {item.name}
    </Button>
  ));

  return (
    <AppBar className="header" position="static">
      <Toolbar>
        <img src={logo} className="logo" width="135px"/>
        <Typography color="secondary" className="header-text" variant="h3" component="div" sx={{ flexGrow: 1 }}>
          P
          <Typography className="header-text" variant="h4" component="div" sx={{ flexGrow: 1 }}>
            lan
          </Typography>
          <Typography className="header-text i" variant="h3" component="div" sx={{ flexGrow: 1 }}>
            &nbsp;I
          </Typography>
          <Typography className="header-text" variant="h4" component="div" sx={{ flexGrow: 1 }}>
            t
          </Typography>
        </Typography>
        <Box>{navLinks}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

/*const nav = useNavigate() // A react hook
...
<Button onClick={() => nav('/')}>Go Home</Button> // navigates to the home page.

const navLinks = navigationLinks.map((item) => (
  <Link to={item.to} className="nav-links">
    {item.name}
  </Link>
));
  const nav = useNavigate()

  const navLinks = navigationLinks.map((item) => (
    <Button variant='contained' className="nav-links" onClick={() => nav(item.to)}>
      {item.name}
    </Button>
  ));*/

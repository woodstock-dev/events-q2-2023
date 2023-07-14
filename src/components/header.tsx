import "./header.css";
import { useNavigate } from "react-router-dom";
import { Toolbar, AppBar, Typography, Button, Box } from "@mui/material";

//This is a bit overkill for this project, but I wanted to practice
const navigationLinks = [
  { name: "LOGIN", to: "/" },
  { name: "EVENT LIST", to: "/events" },
  { name: "ADD EVENT", to: "/events/details" },
];

const Header = () => {
  const nav = useNavigate()

  const navLinks = navigationLinks.map((item) => (
    <Button color="secondary" className="nav-links" onClick={() => nav(item.to)}>
      {item.name}
    </Button>
  ));

  return (
    <AppBar className="header" position="static">
      <Toolbar>
        <Typography color="secondary" className="header-text" variant="h3" component="div" sx={{ flexGrow: 1 }}>
          PI
          <Typography className="header-text" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Plan It
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
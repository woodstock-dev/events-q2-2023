import { useNavigate } from "react-router-dom";
import EventData from "../model/eventData";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


export default function EventPage() {

  const nav = useNavigate()
  
  const eventsArray = EventData.map(event => (
    <Box key={event.id}>
      <Box>{event.title}</Box>
      <Box>{(event.date).toDateString()}</Box>
      <Button onClick={() => {
        nav("edit", {state:{event: event}})
      }}>edit</Button>
    </Box> 
  ))
  

  const addButton = <Button 
    sx={{ mt: 3, mb: 2 }} 
    variant="contained" 
    onClick={() => nav("add")}
    >
      Add Event
    </Button>

  return (
      <Container 
        maxWidth="xs"
      >
        <Typography
          variant="h4">
          All My Events
        </Typography>
        <Box>
          {eventsArray}
          {addButton}
        </Box>

      </Container>
  );
}

import { useNavigate } from "react-router-dom";
import EventData from "../model/eventData";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";


export default function EventPage() {

  const nav = useNavigate()
  
  const eventsArray = EventData.map(event => 
    <Box key={event.id}>
      <Typography>{event.title}</Typography>
      <Typography>{(event.date).toDateString()}</Typography>
      <Button onClick={() => {
        nav("edit", {state:{event: event}})
      }}>edit</Button>
    </Box>
  )
  

  const addButton = <Button
    sx={{ mt: 3, mb: 2 }} 
    variant="contained" 
    onClick={() => {
      nav("add", {state:{event: {}}})
    }}>Add Event</Button>

  return (
      <Container 
        maxWidth="xs"
      >
        <Typography
          variant="h4">
          All My Events
        </Typography>
        {eventsArray}
        {addButton}
      </Container>
  );
}

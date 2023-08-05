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
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EventData from '../eventData'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



export default function EventPage() {

  const eventsArray = EventData.map(event => (
    <Button onClick={() => nav("edit")} key={event.id}>{event.title}{event.date}</Button>
  ))

  const nav = useNavigate()
  const addButton = <Button 
    sx={{ mt: 3, mb: 2 }} 
    variant="contained" 
    onClick={() => nav("add")}
    >
      Add Event
    </Button>

  return (
    <Container 
      component="main" 
      maxWidth="xs"
    >
      <Box
          sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography 
          variant="h4">
          All My Events
        </Typography>
        {eventsArray}
        {addButton}
      </Box>
    </Container>
  );
}
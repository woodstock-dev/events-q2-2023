// Copyright 2023 Josilyn McGuinness
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

import { eventsData } from "../data/sampleData"
import EventListItem from "./eventListItem";
import FilterEvents from "./filterEvents";
import { Paper, Typography } from "@mui/material";
import './eventList.css'

const EventList = () => {
  const sampleData = eventsData;
  return (
    <Paper className="event-list" elevation={3}>
      <FilterEvents />
      <br /><br />
      <Typography variant='h6' align="center" sx={{mb:2}}>SCHEDULED PLANS</Typography>
      { sampleData.map(d => <EventListItem plan={d} /> )}
    </Paper>
  )
}

export default EventList
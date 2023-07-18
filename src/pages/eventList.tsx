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
/**
 * map through cards with
 * {data.map((T)=>(<EventCard value={{task}}/>))}
 *
 */

import EventCard from '../components/eventCard';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { allTasks } from '../@types/data';
import DashMenu from '../components/dashMenu';

const data = allTasks;

const EventList = () => {
  return (
    <div>
      <DashMenu />

      <Typography
        variant='h4'
        color=''
        sx={{
          mb: 4,
        }}
      >
        Event View Dashboard
      </Typography>
      {data.map((T) => (
        <EventCard />
      ))}
    </div>
  );
};

export default EventList;

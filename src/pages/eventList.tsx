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
import { Paper, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { allTasks } from '../@types/context';
import DashMenu from '../components/dashMenu';
import { Route, Routes, Outlet, useNavigate } from 'react-router-dom';
import AddEvents from './addEvents';
import React from 'react';

const data = allTasks;

const EventList = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Index />} />
        <Route path='add' element={<AddEvents />} />
        <Route path='/:id?edit' element={<AddEvents />} />
        <Route path='/:id' element={<AddEvents />} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  return <Outlet />;
};

const Index = () => {
  return (
    <Container
      sx={{
        overflow: 'auto',
        maxHeight: 600,
      }}
    >
      <Typography
        variant='h4'
        color=''
        sx={{
          mb: 4,
        }}
      >
        Event View Dashboard
        {data.map((T) => (
          <EventCard task={T} />
        ))}
      </Typography>
    </Container>
  );
};

export default EventList;

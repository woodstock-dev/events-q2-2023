// Copyright 2023 Cody Black
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

import React from 'react';
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
const EventForm = React.lazy(() => import ('./eventForm.tsx'));
const EventView = React.lazy(() => import ('./eventView.tsx'));
import {sampleData} from '../data/sampleData.tsx';
import {
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";



const Events = () => {
  

  return (
    <React.Fragment>
      <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Index />} />
        <Route path="read/:id" element={<EventView />} />
        <Route path="update/:id" element={<EventView />} />
        <Route path="create" element={<EventForm />} />
      </Route>
    </Routes>
    
    
     
    </React.Fragment>
  )
}
function Layout() {
  

  return (
    <React.Fragment>
      
      <Outlet />
      
    </React.Fragment>
  )
}
const padNumber = (value: number) => {
  return `${value}`.padStart(2, "0");
};

const Index = () => {
  const nav = useNavigate();
  const data = sampleData;

  return (
    <Container>
        <TableContainer component={Paper} sx={{ width: "100%", alignSelf: "center" }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell width="100">Date</TableCell>
                <TableCell width="100">Time</TableCell>
                <TableCell>Name</TableCell>
                <TableCell width="120" align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d) => (
                <TableRow>
                  <TableCell>
                    {padNumber(d.start.getMonth() + 1)}/{padNumber(d.start.getDate())}/{d.start.getFullYear()}
                  </TableCell>
                  <TableCell>
                    {d.start.getHours()}:{padNumber(d.start.getMinutes())} {d.start.getHours() > 12 ? "AM" : "PM"}
                  </TableCell>
                  <TableCell>{d.name}</TableCell>
                  <TableCell align="center">
                    <IconButton aria-label="edit" onClick={() => nav(`/events/${d.id}`)}>
                      <Edit fontSize="small"/>
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => console.log(d.id)}>
                      <Delete fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
  )
}

export default Events;
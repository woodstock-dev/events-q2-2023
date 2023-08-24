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
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormC, FormLabel } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useLocation, useNavigate } from "react-router-dom";

const EventForm = () => {
  
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit}>
        <FormLabel>Event Name</FormLabel>
        <TextField></TextField>
        <FormLabel>Start Date</FormLabel>
        <DateTimePicker />
        <FormLabel>End Date</FormLabel>
        <DateTimePicker />
        <FormLabel>Details</FormLabel>
        <TextField></TextField>
        <FormLabel>Address</FormLabel>
        <TextField></TextField>
        <Button>Submit</Button>
      </form>
    
    </LocalizationProvider> 
   
  )
};

const handleSubmit = (event: Event) => {
  event.preventDefault();
  alert("Form Submitted");
}

export default EventForm;
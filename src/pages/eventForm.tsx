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

import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs"
import  {v4 as uuid}  from 'uuid';

const EventForm = () => {
  const todayStart = dayjs();
  const todayEnd = dayjs().add(1, 'minute');
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(dayjs);
  const [endDate, setEndDate]= useState(dayjs);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel>Event Name</FormLabel>
        <TextField required></TextField>
        <FormLabel>Start Date</FormLabel>
        <DateTimePicker
          defaultValue={todayStart}
          disablePast
        />
        <FormLabel>End Date</FormLabel>
        <DateTimePicker 
          defaultValue={todayEnd}
          disablePast
        />
        <FormLabel>Details</FormLabel>
        <TextField required></TextField>
        <FormLabel>Address</FormLabel>
        <TextField></TextField>
        <Button>Submit</Button>
      </FormControl>
    
    </LocalizationProvider> 
   
  )
};

const handleSubmit = (event: Event) => {
  event.preventDefault();
  generateIdClick();
  alert("Event Submitted");
  console.log(event);
}

const uuidV4 = () => {
  const newUuid = uuid()
  setImmediate(newUuid)
}

const generateIdClick = () => {
  uuidV4()
}

export default EventForm;
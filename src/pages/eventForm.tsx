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
import dayjs, {Dayjs} from "dayjs"
import  {v4 as uuid}  from 'uuid';

const EventForm = () => {
  const todayStart = dayjs();
  const todayEnd = dayjs().add(1, 'minute');
  const [id, setId] = useState(uuid());
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(dayjs);
  const [endDate, setEndDate] = useState(dayjs);
  const [details, setDetails] = useState("");
  const [address, setAddress] = useState("");
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel>Event Name</FormLabel>
        <TextField 
          required
          id="name"
          name="name"
          value={name}
          placeholder="Event Name"
          onChange={(event) =>
            setName(event.target.value)}>
        </TextField>
        <FormLabel>Start Date</FormLabel>
        <DateTimePicker
          defaultValue={todayStart}
          disablePast
          value={startDate}
          onChange={(event) =>
            setStartDate(event as Dayjs)}
        />
        <FormLabel>End Date</FormLabel>
        <DateTimePicker 
          defaultValue={todayEnd}
          disablePast
          value={endDate}
          onChange={(event) =>
            setEndDate(event as Dayjs)}
        />
        <FormLabel>Details</FormLabel>
        <TextField 
        id="details"
        name="details"
        value={details}
        placeholder="Details"
        onChange={(event) =>
          setDetails(event.target.value)}>
        </TextField>
        <FormLabel>Address</FormLabel>
        <TextField
        id="address"
        name="address"
        value={address}
        placeholder="Address"
        onChange={(event) =>
          setAddress(event.target.value)}>
        </TextField>
        <Button>Submit</Button>
      </FormControl>
    
    </LocalizationProvider> 
   
  )
};

const handleSubmit = (event: Event) => {
  event.preventDefault();
  alert("Event Submitted");
  console.log(event);
}


export default EventForm;
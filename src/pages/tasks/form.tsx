// Copyright 2023 Ryan McGuinness
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

import { DateTimePicker, LocalizationProvider, renderTimeViewClock } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Task } from "../../model/task";
import dayjs, { Dayjs } from "dayjs";
import { Box, Button, Grid, TextField } from "@mui/material";
import useTasks from "../../hooks/tasksHook";

const Form = () => {
  const nav = useNavigate();
  const loc = useLocation();
  
  const stateEvent = loc.state.task as Task;
  const tasks = useTasks();

  const [id] = useState<string | undefined>(stateEvent.id);
  const [start, setStart] = useState<Dayjs>(dayjs(stateEvent.start));
  const [end, setEnd] = useState<Dayjs>(dayjs(stateEvent.end));
  const [name, setName] = useState<string>(stateEvent.name);
  const [description, setDescription] = useState<string | undefined>(stateEvent.description);
  const [address] = useState<Geolocation | undefined>(stateEvent.address);
  const [notes, setNotes] = useState<string | undefined>(stateEvent.notes);

  const update = () => {
    tasks.updateTask({
      id: id,
      start: start.toDate(),
      end: end.toDate(),
      name: name,
      description: description,
      address: address,
      notes: notes,
    });
    nav("/tasks/");
  };

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <DateTimePicker 
                label="Start" 
                value={start} 
                onChange={(v) => setStart(v as Dayjs)} 
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}/>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <DateTimePicker label="End" 
                              value={end} 
                              onChange={(v) => setEnd(v as Dayjs)}
                              viewRenderers={{
                                hours: renderTimeViewClock,
                                minutes: renderTimeViewClock,
                                seconds: renderTimeViewClock,
                              }}/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="tf-name"
                label="Name"
                defaultValue={name}
                fullWidth
                onChange={(v) => setName(v.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="tf-description"
                label="Description"
                defaultValue={description}
                fullWidth
                onChange={(v) => setDescription(v.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField id="tf-address" label="Address" defaultValue={address} fullWidth multiline maxRows={3} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="tf-notes"
                label="Notes"
                variant="outlined"
                defaultValue={notes}
                fullWidth
                onChange={(v) => setNotes(v.target.value)}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "right" }}>
              <Button onClick={update}>Save</Button>
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </React.Fragment>
  );
};

export default Form;

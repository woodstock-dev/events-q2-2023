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

import { Search, Add } from "@mui/icons-material";
import { Container, Fab, FilledInput, FormControl, Grid, InputAdornment, InputLabel, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useNavigate } from "react-router-dom";
import { NewTask } from "../model/task";
import useTasks from "../hooks/tasksHook";
import { Dayjs } from "dayjs";

const TaskFilter = () => {
  const nav = useNavigate()
  const tasks = useTasks()
  
  const createTask = () => {
    const now = new Date(Date.now())
    nav('/tasks/create', {state: {task: NewTask(undefined, "", "", now, now)}})
  }

  return (
    <Container sx={{width: '100%', pb: 2}}>
      <Typography variant="h6">Filter</Typography>
      <Grid container spacing={1}>
        <Grid item xs={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label='Start' value={tasks.getStartDate()} onChange={(v) => tasks.setStartDate(v as Dayjs)}/>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label='End' value={tasks.getEndDate()} onChange={(v) => tasks.setEndDate(v as Dayjs)}/>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={11} md={5}>
          <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Search</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              endAdornment={
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={1}>
            <Fab color="secondary" aria-label="add" onClick={createTask}>
              <Add fontSize="large" />
            </Fab>
        </Grid>
      </Grid>
      </Container>
  );
};

export default TaskFilter;

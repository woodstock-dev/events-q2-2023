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

import { Search } from "@mui/icons-material";
import { Container, FilledInput, FormControl, Grid, InputAdornment, InputLabel, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const EventFilter = () => {
  return (
    <Container sx={{width: '100%'}}>
      <Typography variant="h6">Filter</Typography>
      <Grid container spacing={2} alignContent={'center'}>
        <Grid item xs={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label='Start'/>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label='End' onChange={(v) => console.log(v)}/>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
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
      </Grid>
      </Container>
  );
};

export default EventFilter;

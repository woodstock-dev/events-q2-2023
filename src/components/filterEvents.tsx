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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Paper, Grid, Typography, Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import './filterEvents.css'

const FilterEvents = () => {
  return (
    <>
      <Typography variant='h6' align="center" sx={{mb:2}}>SEARCH INTERVAL</Typography>
      <Stack direction="row" justifyContent="space-around">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className="input-item" label="From" slotProps={{ textField: { size: "small" } }} /> 
            <DatePicker className="input-item" label="To" slotProps={{ textField: { size: "small" } }} />
          </LocalizationProvider> 
      </Stack>
    </>
  );
};

export default FilterEvents;

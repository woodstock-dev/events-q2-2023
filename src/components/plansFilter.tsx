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
import { Typography, Stack, Fab, Paper } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SearchIcon from "@mui/icons-material/Search";
import dayjs from "dayjs";
import usePlans from "../hooks/planHook";
import { useState } from "react";

const PlansFilter = () => {
  const [startDateFilter, setStartDateFilter] = useState<Date>(new Date());
  const [endDateFilter, setEndDateFilter] = useState<Date>(new Date());
  const plans = usePlans();
  function handleSearch() {
    plans.setStartDate(startDateFilter);
    plans.setEndDate(endDateFilter);
    plans.read();
  }
  const handleStartChange = (d: dayjs.Dayjs | null) => {
    console.log(d)
    setStartDateFilter(dayjs(d).toDate())
  }

  return (
    <Paper sx={{pb: 2}}>
      <Typography variant="h6" align="center" sx={{ mb: 2, bgcolor: '#abd1b5'}}>
        Search Interval
      </Typography>
      <Stack direction="row" sx={{ pl: 1, pr: 1 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="input-item"
            label="From"
            slotProps={{ textField: { size: "small" } }}
            sx={{ mr: 2 }}
            value={dayjs(startDateFilter)}
            onChange={handleStartChange}
          />
          <DatePicker
            className="input-item"
            label="To"
            slotProps={{ textField: { size: "small" } }}
            sx={{ mr: 2 }}
            value={dayjs(endDateFilter)}
            onChange={(d) => setEndDateFilter(dayjs(d).toDate())}
          />
        </LocalizationProvider>
        <Fab color="secondary" size="small">
          <SearchIcon onClick={handleSearch} />
        </Fab>
      </Stack>
    </Paper>
  );
};

export default PlansFilter;


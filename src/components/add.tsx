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

import { TextField, FormControl, Grid, Typography, Box } from "@mui/material"
const Add = () => {
  return(
    <Grid
      mt="40px"
      display="flex"
      direction="column"
      alignItems="center"
    >
      <Typography variant="h4">Add New Event</Typography>
      <FormControl>
        <TextField margin="normal" label="Event Title" color="secondary" focused />
        <TextField multiline margin="normal" label="Location" color="secondary" focused />
        <TextField multiline margin="normal" label="Date/Time" color="secondary" focused />
      </FormControl>
    </Grid>
  )
}

export default Add
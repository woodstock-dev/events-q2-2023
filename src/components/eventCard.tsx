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
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { CalendarIcon } from '@mui/x-date-pickers';
import { Grid } from '@mui/material';

const EventCard = () => {
  return (
    <Box
      sx={{
        minWidth: 300,
      }}
    >
      <Card
        variant='outlined'
        sx={{
          border: '2px solid #004d40',
          borderRadius: '16px',
        }}
      >
        <CardContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ justifyContent: 'center' }}
          >
            <Grid item xs={2} sx={{}}>
              <CalendarIcon fontSize='large' />
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                display: 'flex',
              }}
            >
              <Typography sx={{ fontSize: 18 }} color='' gutterBottom>
                Sample Event
              </Typography>
            </Grid>
          </Grid>

          <Grid container></Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EventCard;

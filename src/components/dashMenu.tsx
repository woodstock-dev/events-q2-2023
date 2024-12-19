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

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home } from '@mui/icons-material';
import { Task } from '@mui/icons-material';
import { PunchClock } from '@mui/icons-material';
import { Info } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
type Anchor = 'top' | 'right' | 'bottom' | 'right';

export default function DashMenu() {
  const nav = useNavigate();
  const [state, setState] = React.useState({
    right: false,
  });
  const routeNames = [
    {
      text: 'Home',
      icon: <Home />,
      route: '/',
    },
    {
      text: 'Task Form',
      icon: <Task />,
      route: '/events/addEvents',
    },
    {
      text: 'Task View Dashboard',
      icon: <PunchClock />,
      route: '/events/',
    },
    {
      text: 'About',
      icon: <Info />,
      route: '/',
    },
  ];

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {routeNames.map((item, index) => {
          const { text, icon, route } = item;
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => nav(route)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{
              position: 'sticky',
              right: 200,
              color: 'inherit',
            }}
          >
            <Menu />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { GitHub } from '@mui/icons-material';
import DescriptionIcon from '@mui/icons-material/Description';

import PersonSearchIcon from '@mui/icons-material/PersonSearch';

export default function Footer() {
  const [value, setValue] = React.useState('recents');
  const [likeCount, setLikeCount] = React.useState(Number);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        id='likes-button'
        label='Likes'
        value='likes'
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction label='Github' value='github' icon={<GitHub />} />

      <BottomNavigationAction
        label='Resume'
        value='resume-icon'
        icon={<DescriptionIcon />}
      />
      <BottomNavigationAction
        label='Connect'
        value='connect-icon'
        icon={<PersonSearchIcon />}
      />
    </BottomNavigation>
  );
}

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

import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#449dfd',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#eceff1',
    },
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#21a625',
    },
    background: {
      default: '#4c4c4c',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.8rem',
    },
    h3: {
      fontSize: '2.4rem',
    },
    h4: {
      fontSize: '2rem',
    },
    h5: {
      fontSize: '1.7rem',
    },
  },
};
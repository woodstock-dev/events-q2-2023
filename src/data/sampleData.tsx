// Copyright 2023 Cody Black
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

import { Dayjs } from "dayjs"

export interface Event {
  id: number
  start: Dayjs
  end: Dayjs
  name:  string
  details?: string
  address?: string
}

export const sampleData: Event[] = [
  {id: 1,
    start: new Date(2023, 8, 1, 12, 0, 0, 0),
    end: new Date(2023, 8, 1, 1, 0, 0, 0),
    name: "Meeting",
  },
  {
    id: 2,
    start: new Date(2023, 8, 2, 12, 0, 0, 0),
    end: new Date(2023, 8, 2, 1, 0, 0, 0),
    name: "2nd Task"
  }
]


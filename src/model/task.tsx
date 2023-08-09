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

import { Dayjs } from 'dayjs';
import { v4 as uuid } from 'uuid';

export interface TaskContextType {
  getTasks(): Array<Task>
  getStartDate(): Dayjs
  getEndDate(): Dayjs
  setStartDate(d: Dayjs) : void
  setEndDate(d: Dayjs) : void
  addTask(task: Task): void
  updateTask(task: Task): void
  removeTask(task: Task) : void
}

export interface Task {
  id?: string
  start: Date
  end: Date
  name: string
  description?: string
  address?: Geolocation
  notes?: string
}

export const NewTask = (
  id: string | undefined,
  name: string, 
  description?: string | undefined,
  startDate?: Date | undefined,
  endDate?: Date | undefined)  : Task => {
  return {
    id: (id) ? id : uuid(),
    start: (startDate) ? startDate : new Date(Date.now()),
    end: (endDate) ? endDate : new Date(Date.now()),
    name: name,
    description: description
  }
}

export const InitialTaskData: Task[] = [
  NewTask(undefined, 
    'Example 1', 
    'Something cool', 
    new Date('2023-08-01T12:00:00'),
    new Date('2023-08-01T13:00:00')),
  NewTask(
    undefined, 
    'Example 2',
    'Something else cool',
    new Date('2023-08-02T12:00:00'),
    new Date('2023-08-02T13:00:00')
  )
]
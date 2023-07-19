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
import { useContext,createContext } from "react"
import * as React from 'react'

/**
 * 
 * const taskRow = ({task}: {task: task})
 * 
 * grid item = column in a row
 * 
 * using router to pass state
 * 
 * reducers, weak hashmap, userecoilstate, 
 */

export interface Task {
  id: string
  start: Date
  end: Date
  name: string
  description?: string
  address?: Geolocation
  notes?: string

  
}

export const allTasks : Array<Task> = [
  // A task with only required fields
  {
    id: '123',
    start: new Date('2023-08-01T12:00:00'),
    end: new Date('2023-09-01T13:00:00'),
    name: 'Example 1',
    description: 'Something cool'
  },
  {
    id: '1234',
    start: new Date('2023-08-02T12:00:00'),
    end: new Date('2023-10-02T13:00:00'),
    name: 'Example 2',
    description: 'Something else cool'
  },
  {
    id: '1235',
    start: new Date('2023-08-02T12:00:00'),
    end: new Date('2023-10-02T13:00:00'),
    name: 'Example 2',
    description: 'Something else cool'
  },
  {
    id: '1236',
    start: new Date('2023-08-02T12:00:00'),
    end: new Date('2023-10-02T13:00:00'),
    name: 'Example 2',
    description: 'Something else cool'
  },
  {
    id: '1237',
    start: new Date('2023-08-02T12:00:00'),
    end: new Date('2023-10-02T13:00:00'),
    name: 'Example 2',
    description: 'Something else cool'
  },
  {
    id: '1238',
    start: new Date('2023-08-02T12:00:00'),
    end: new Date('2023-10-02T13:00:00'),
    name: 'Example 2',
    description: 'Something else cool'
  },
  {
    id: '1239',
    start: new Date('2023-08-02T12:00:00'),
    end: new Date('2023-10-02T13:00:00'),
    name: 'Example 2',
    description: 'Something else cool'
  }
 ]
  
 
 
export const TaskContext = React.createContext<Task>(null!);
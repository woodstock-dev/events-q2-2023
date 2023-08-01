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

import { v4 as uuid } from 'uuid';

export interface AuthContextType {
  user: string | null;
  isAuthenticated: () => boolean;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
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

export interface TaskManager {
  getTasks(): Array<Task>
  filterTasks(): Array<Task>
  addTask(task: Task): void
  updateTask(task: Task): void
  removeTask(task: Task) : void
}


export const sampleData: Task[] = [
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

// This is a simple fake authentication provider
export const FakeAuthProvider = {
  isAuthenticated: false,

  // Creates a default signin function
  signin(callback: VoidFunction) {
    // Sets the authenticated value to true
    FakeAuthProvider.isAuthenticated = true;
    // Creates a fake lag time you may find in a normal login
    setTimeout(callback, 100); // fake async
  },

  // Creates a fake signout function
  signout(callback: VoidFunction) {
    // sets the authentication value to false
    FakeAuthProvider.isAuthenticated = false;

    // Creates a fake lag time similar to normal log outs
    setTimeout(callback, 100);
  },
};
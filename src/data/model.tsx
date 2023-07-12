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

export interface Event {
  id: string
  start: Date
  end: Date
  name: string
  description?: string
  address?: Geolocation
  notes?: string
}

// YYYY-MM-DDTHH:mm:ss.sssZ
export const sampleData: Event[] = [
  {
    id: '123',
    start: new Date('2023-08-01T12:00:00'),
    end: new Date('2023-08-01T13:00:00'),
    name: 'Example 1',
    description: 'Something cool'
  },
  {
    id: '1234',
    start: new Date('2023-08-02T12:00:00'),
    end: new Date('2023-08-02T13:00:00'),
    name: 'Example 2',
    description: 'Something else cool'
  }
]
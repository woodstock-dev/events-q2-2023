// Copyright 2023 Josilyn McGuinness
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

export interface PlanContextType {
  read: () => Array<Plan>;
  setStartDate(d: Date) : void
  setEndDate(d: Date) : void
  getStartDate(): Date
  getEndDate(): Date
  create: (plan: Plan) => void;
  delete: (plan: Plan) => void;
  update: (plan: Plan) => void;
}

export interface Plan {
  name: string
  id?: string
  startDate: Date    
  endDate: Date
  notes?: string
  location?: Geolocation
}

/*export interface Plan {
  id?: string
  start: Date
  end: Date
  name: string
  description?: string
  address?: Geolocation
  notes?: string
}*/


//Is this like a constructor??????????
export const NewPlan = (
  name: string,
  id?: string | undefined, 
  startDate?: Date | undefined,
  endDate?: Date | undefined)  : Plan => {
  return {
    name: name,
    id: (id) ? id : undefined,
    startDate: (startDate) ? startDate : new Date(Date.now()),
    endDate: (endDate) ? endDate : new Date(Date.now()),
  }
}

export const PlansData : Array<Plan> = [
  {
    id: '0001',
    name: 'Code Class',
    startDate: new Date('2023-08-14T12:00:00'),
    endDate: new Date('2023-08-14T13:30:00') 
  },
  {
    id: '0002',
    name: 'Code Time',
    startDate: new Date('2023-08-17T09:00:00'),
    endDate: new Date('2023-08-17T11:30:00') 
  },
  {
    id: '0003',
    name: 'Code Class',
    startDate: new Date('2023-08-18T12:00:00'),
    endDate: new Date('2023-08-18T13:30:00') 
  },
  {
    id: '0004',
    name: 'Code Class',
    startDate: new Date('2023-08-21T12:00:00'),
    endDate: new Date('2023-08-21T13:30:00') 
  },
  {
    id: '0005',
    name: 'Code Time',
    startDate: new Date('2023-08-24T09:00:00'),
    endDate: new Date('2023-08-24T11:30:00') 
  },
  {
    id: '0006',
    name: 'Code Class',
    startDate: new Date('2023-08-25T12:00:00'),
    endDate: new Date('2023-08-25T13:30:00') 
  },
  {
    id: '0007',
    name: 'Code Class',
    startDate: new Date('2023-08-28T12:00:00'),
    endDate: new Date('2023-08-28T13:30:00') 
  },
  {
     id: '0008',
     name: 'Code Time',
     startDate: new Date('2023-08-31T09:00:00'),
     endDate: new Date('2023-08-31T11:30:00')   
   },
  {
    id: '0009',
    name: 'Code Class',
    startDate: new Date('2023-09-01T12:00:00'),
    endDate: new Date('2023-09-01T13:30:00')
  }
]
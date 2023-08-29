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


export const selectTime = (time: Date, planTime: Date): Date => {
  const hours = time.getHours()
  const minutes = time.getMinutes()
  planTime.setHours(hours)
  planTime.setMinutes(minutes)
return planTime
}

export const selectDate = (date: Date, planDate: Date): Date => {
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
planDate.setFullYear(year)
planDate.setMonth(month)
planDate.setDate(day)
return planDate;
}
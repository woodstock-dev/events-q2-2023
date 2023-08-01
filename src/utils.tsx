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

export const padNumber = (value: number) => {
  return `${value}`.padStart(2, "0");
};

export const getDate = (value: Date) => {
  const month = padNumber(value.getMonth() + 1)
  const day = padNumber(value.getDate())
  const year = value.getFullYear()
  return `${day}/${month}/${year}`
}

export const getTime = (value: Date) => {
  const hour = value.getHours()
  const min = padNumber(value.getMinutes())
  const suffix = (hour > 12) ? 'AM' : 'PM'
  const twelveHour = (hour > 12) ? hour-12 : hour
  return `${twelveHour}:${min} ${suffix}`
}
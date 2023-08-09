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

import { useState } from "react"
import TaskContext from "../context/taskContext"
import { TaskContextType, Task, InitialTaskData,  } from "../model/task"
import dayjs, { Dayjs } from "dayjs"

import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"

/**
 * Is a supplier component that provides an implementation of the
 * TaskContextType
 * @param param0 - A single react node element
 * @returns - A JSX.Element
 */
const today = dayjs()

export const Tasks = ({children}: {children: React.ReactNode}) => {
  const [tasks, setTasks] = useState<Array<Task>>(InitialTaskData)
  const [startDate, setStartDate] = useState<Dayjs>(today)
  const [endDate, setEndDate] = useState<Dayjs>(today.add(5, 'day'))

  // an implementation of the interface TaskContextType
  const taskManager : TaskContextType = {
    getTasks(): Task[] {
      dayjs.extend(isSameOrAfter)
      dayjs.extend(isSameOrBefore)
      const out = tasks.filter(t => {
        const s = dayjs(t.start);
        const e = dayjs(t.end);
        return s.isSameOrAfter(startDate, 'date') && e.isSameOrBefore(endDate, 'date')
      })
      return [...out]
    },
    addTask(task: Task): void {
      const newTasks = [...tasks]
      newTasks.push(task)
      setTasks(newTasks)
    },
    updateTask(task: Task): void {
      const newTasks = tasks.filter(t => t.id !== task.id)
      newTasks.push(task)
      setTasks(newTasks)
    },
    removeTask(task: Task): void {
      const newTasks = tasks.filter(t => { t.id !== task.id })
      setTasks([...newTasks])
    },
    getStartDate: function (): Dayjs {
      return startDate
    },
    getEndDate: function (): Dayjs {
      return endDate
    },
    setStartDate: function (d: Dayjs): void {
      setStartDate(d)
    },
    setEndDate: function (d: Dayjs): void {
      setEndDate(d)
    }
  }

  return(
    <TaskContext.Provider value={taskManager}>
      {children}
    </TaskContext.Provider>
  )
}
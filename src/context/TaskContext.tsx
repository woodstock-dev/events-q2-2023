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
import { Task, TaskManager, sampleData } from "../model"
import React from "react"

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const TaskContext = React.createContext<TaskManager>(null!)

export const TaskProvider = ({children}: {children: React.ReactNode}) => {
  const [tasks, setTasks] = useState<Array<Task>>(sampleData)
  const taskManager = {
    getTasks: (): Task[] => {
      return [...tasks]
    },
    filterTasks: function (): Task[] {
      return [...tasks]
    },
    addTask: function (task: Task): void {
      const newTasks = [...tasks]
      newTasks.push(task)
      setTasks(newTasks)
    },
    updateTask: function (task: Task): void {
      const newTasks = tasks.filter(t => t.id !== task.id)
      newTasks.push(task)
      setTasks(newTasks)
    },
    removeTask: function (task: Task): void {
      const newTasks = tasks.filter(t => {t.id !== task.id})
      setTasks([...newTasks])
    }
  } as TaskManager

  return(
    <TaskContext.Provider value={taskManager}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
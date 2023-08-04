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

/**
 * Is a supplier component that provides an implementation of the
 * TaskContextType
 * @param param0 - A single react node element
 * @returns - A JSX.Element
 */
export const Tasks = ({children}: {children: React.ReactNode}) => {
  const [tasks, setTasks] = useState<Array<Task>>(InitialTaskData)

  // an implementation of the interface TaskContextType
  const taskManager : TaskContextType = {
    getTasks(): Task[] {
      return [...tasks]
    },
    filterTasks(): Task[] {
      return [...tasks]
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
      const newTasks = tasks.filter(t => {t.id !== task.id})
      setTasks([...newTasks])
    }
  }

  return(
    <TaskContext.Provider value={taskManager}>
      {children}
    </TaskContext.Provider>
  )
}

// Define the contract

interface Task {
  id: string
  name: string
  description?: string
  dateAndTime: Date
  durationInMinutes: number
  notes?: string
  location?: Geolocation
}

const allTasks : Task[] = [
  {
    id: '1',
    name: 'My Task',
    dateAndTime: new Date(2023, 8, 1, 12, 0, 0, 0),
    durationInMinutes: 60
  },
  {
    id: '2',
    description: 'Something really cool to do',
    name: 'My Other Task',
    dateAndTime: new Date(2023, 8, 2, 12, 0, 0, 0),
    durationInMinutes: 60,
    notes: 'Really looking forward to programming with typescript'
  },
]

export { allTasks }

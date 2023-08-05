interface EventD {
  id: number
  title: string
  date: string
  time: string 
}

const EventData: EventD[] = 
  [
    {
      id: 1,
      title: "go to store",
      date: "12/22/2023",
      time: "5:00 PM"
    },
    { 
      id: 2,
      title: "go to school",
      date: "11/10/2023",
      time: "8:00 AM"
    },
    { 
      id: 3,
      title: "go to bed",
      date: "10/10/2023",
      time: "7:00 PM"
    },
  ]

export default EventData
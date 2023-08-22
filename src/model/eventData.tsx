export interface eventD {
  id: number;
  title: string;
  date: Date;
}

const EventData: eventD[] = 
  [
    {
      id: 1,
      title: "go to store",
      date: new Date('2023-08-14T12:00:00'),
    },
    { 
      id: 2,
      title: "go to school",
      date: new Date('2023-08-16T14:00:00')
    },
    { 
      id: 3,
      title: "go to bed",
      date: new Date('2023-09-14T8:00:00'),
    },
  ]

export default EventData
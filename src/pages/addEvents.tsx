import './addEvents.css'

const AddEvents = () => {
  return(
    <div className="event-form">
      <h2 className="add-event-text">Add an Event</h2>
      <form>
        <input className="event-input" type="date" aria-label="date" placeholder="dd/mm/yyyy" />
        <input className="event-input" type="time" aria-label="time" placeholder="hh:mm" />
        <input className="event-input" type="text" aria-label="title" placeholder="Event Title" />
        <input className="event-input" type="text" aria-label="location" placeholder="Location" />
        <textarea className="event-input, text-area" aria-label="notes" placeholder="Notes" />
        <input type="submit" value="Submit" name="submit" />
      </form>
    </div>
  )
}

export default AddEvents;
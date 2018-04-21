import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../../css/calendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

const Calendar = ({ state, actions }) => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    return { 
      style: { backgroundColor: event.color } 
    }
  } 
  const onSelectEvent = (e) => {
    const date = {
      start: e.start,
      end: e.end
    };
    actions.selectDate(date);
  }

  return (
    <div id="calendar-wrapper">
      <BigCalendar
        selectable
        views = {['month']}
        defaultDate = {new Date()}
        onSelectSlot = {onSelectEvent}
        onSelectEvent = {onSelectEvent}
        eventPropGetter ={(eventStyleGetter)}
        events = {state.assignments[state.subjects[state.selectedSubject]]}
      />
    </div>
  )
}

export default Calendar;
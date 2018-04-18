import React from 'react';
import BigCalendar from 'react-big-calendar';
import SubjectList from './SubjectList';
import moment from 'moment';
import '../../css/calendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

const Calendar = ({ state, actions }) => {
  return (
    <div id="calendar-wrapper">
      <BigCalendar
        selectable
        onSelectEvent={(e) => {
          const date = {
            start: e.start,
            end: e.end
          }
          actions.selectDate(date) 
        }} 
        onSelectSlot={(e) => {
          const date = {
            start: e.start,
            end: e.end
          }
          actions.selectDate(date)
        }}
        events= {state.assignments[state.selectedSubject]}
        views= {['month']}
        defaultDate= {new Date()}
      />
      <SubjectList actions={actions} state={state} />
    </div>
  )
}

export default Calendar;
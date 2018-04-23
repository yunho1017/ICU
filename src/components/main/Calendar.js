import React from 'react';
import BigCalendar from 'react-big-calendar';
import Toolbar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../css/calendar.css';

BigCalendar.momentLocalizer(moment);

const Calendar = ({ state, selectDate, selectEvent }) => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    return { 
      style: { backgroundColor: event.color } 
    }
  } 
  return (
    <div id="calendar-section">
      <div id="calendar-wrapper">
        <BigCalendar
          selectable
          views = {['month']}
          defaultView = "month"
          defaultDate = {new Date()}
          components = {{toolbar : CustomToolbar}}
          onSelectSlot = {selectDate}
          onSelectEvent = {selectEvent}
          eventPropGetter = {(eventStyleGetter)}
          events = {state.assignments[state.subjects[state.selectedSubject]]}
        />
      </div>
    </div>
  )
}

class CustomToolbar extends Toolbar {
  render() {
    return (
      <div className='rbc-toolbar'>
        <span className="rbc-btn-group">
          <button type="button" onClick={() => this.navigate('TODAY')} >today</button>
          <button type="button" onClick={() => this.navigate('PREV')}>back</button>
          <button type="button" onClick={() => this.navigate('NEXT')}>next</button>
        </span>
        <span className="rbc-toolbar-label">{this.props.label}</span>
      </div>
    );
  }

  navigate = action => {
    console.log(action);
    
    this.props.onNavigate(action)
  }
}

export default Calendar;
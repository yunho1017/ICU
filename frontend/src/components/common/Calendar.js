import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import CustomToolbar from './CustomToolbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../css/calendar.css';

BigCalendar.momentLocalizer(moment);

const CalendarLayout = ({events, selectDateHandler, selectEventHandler, eventPropGetter, dateCellWrapper}) => {
  
  return (
    <div id="calendar-section">
      <div id="calendar-wrapper">
        <BigCalendar
          selectable
          events = {events}
          views = {['month']}
          defaultDate = { new Date() }
          onView = {() => {console.log('asdf')}}
          onSelectSlot = {selectDateHandler}
          onSelectEvent = {selectEventHandler}
          eventPropGetter = {eventPropGetter}
          components = {{
            toolbar : CustomToolbar,
            dateCellWrapper : dateCellWrapper
          }}
        />
      </div>
    </div>
  )
} 

class Calendar extends Component {
  state = {
    selectedStyle: { backgroundColor: '#eaf6ff' }
  }

  eventPropGetter = (event, start, end, isSelected) => {
    return { 
      style: { backgroundColor: event.color } 
    }
  } 
  
  dateCellWrapper = ({ value, children }) => {
    const { start, end } = this.props.selectedDate;

    return (start <= value && value <= end) ? <div className="rbc-day-bg" style={this.state.selectedStyle}>{children}</div> : children
  }

  render() {
    return (
      <CalendarLayout
        events = {this.props.events}
        selectDateHandler = {this.props.selectDateHandler}
        selectEventHandler = {this.props.selectEventHandler}
        eventPropGetter = {this.eventPropGetter}
        dateCellWrapper = {this.dateCellWrapper}
      />
    )
  }
}

export default Calendar;
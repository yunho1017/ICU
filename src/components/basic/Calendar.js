import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import Toolbar from 'react-big-calendar';
import moment from 'moment';
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
  eventPropGetter = (event, start, end, isSelected) => {
    return { 
      style: { backgroundColor: event.color } 
    }
  } 
  
  dateCellWrapper = ({ value, children }) => {
    const { start, end } = this.props.selectedDate;


    const style = {
      backgroundColor: '#e5e5e5',
      WebkitFlexBasis: '14.28571429%',
      flexBasis: '14.28571429%',
      borderLeft: '1px solid #DDD'
    };

    return (start <= value && value <= end) ? <div style={style}>{children}</div> : children;
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

  navigate = action => this.props.onNavigate(action);
}

export default Calendar;
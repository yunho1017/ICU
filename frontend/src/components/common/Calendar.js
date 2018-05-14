import React, { Component } from 'react';
import PropTypes from 'prop-types'
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

class CustomToolbar extends Toolbar {
  static propTypes = {
    view: PropTypes.string.isRequired,
    views: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.node.isRequired,
    messages: PropTypes.object,
    onNavigate: PropTypes.func.isRequired,
    onViewChange: PropTypes.func.isRequired,
  }

  state = {
    selectedMonth: new Date().getMonth() + 1
  }

  render() {
    let { messages, label } = this.props;
    
    return (
      <div className='rbc-toolbar'>
        <span className="rbc-btn-group">
          <button type="button" onClick={() => this.navigate('TODAY')} >{messages.today}</button>
          <button type="button" onClick={() => this.navigate('PREV')}>{messages.previous}</button>
          <button type="button" onClick={() => this.navigate('NEXT')}>{messages.next}</button>
        </span>
        <span className="rbc-toolbar-label">{label}</span>
      </div>
    );
  }

  navigate = action => {
    const selectedMonth = this.state.selectedMonth;

    switch(action) {
      case 'TODAY' : this.setState({ selectedMonth: new Date().getMonth() + 1 }); break;
      case 'PREV' : this.setState({ selectedMonth: selectedMonth - 1 }); break;
      case 'NEXT' : this.setState({ selectedMonth: selectedMonth + 1 }); break;
      default : break;
    }
    
    this.props.onNavigate(action);
  }
}

export default Calendar;
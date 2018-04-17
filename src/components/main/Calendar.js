import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../../css/calendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from './events';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  render() {
    return (
      <div id="calendar-wrapper">
        <BigCalendar
          selectable
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={slotInfo =>
            alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )}
          events= {events}
          views= {['month']}
          defaultDate= {new Date()}
        />
      </div>
    )
  }
}

export default Calendar;
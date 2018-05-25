import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Toolbar from 'react-big-calendar';
import PropTypes from 'prop-types';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import * as action from '../../action/request';

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

  async componentDidMount() {
    this.changeMonth(new Date().getDate() + 1);
  }

  changeMonth = async month => {
    this.setState({
      selectedDate: month
    });

    let requestData = {}

    if(!(localStorage.getItem('isAdmin') === 'true')) {
      requestData.month = this.state.selectedMonth;
      requestData.subjectId = this.props.selectedSubject;
    }

    await this.props.setAssignment(requestData, localStorage.getItem('token'), true);
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
    switch(action) {
      case 'TODAY' : this.changeMonth(new Date().getMonth() + 1 ); break;
      case 'PREV' : this.changeMonth(this.state.selectedMonth - 1 ); break;
      case 'NEXT' : this.changeMonth(this.state.selectedMonth + 1 ); break;
      default : break;
    }
    
    this.props.onNavigate(action);
  }
}

if(localStorage.getItem('isLogin') === 'true' && localStorage.getItem('isAdmin') === 'true') {
  
}
const mapStateToProps= (state) => {
  return {
    selectedSubject: state.student.selectedSubject
  } 
}

const mapDispatchToProps= (dispatch) => {
  return bindActionCreators({ ...action }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomToolbar);
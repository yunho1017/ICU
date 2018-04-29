import React from 'react';
import '../../css/selectedSubject.css';

const SelectedSubject = ({ subject }) => {
  return (
    <div id="selected-subject">{ subject }</div>
  )
}

export default SelectedSubject;
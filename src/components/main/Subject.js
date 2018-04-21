import React from 'react';
import '../../css/subject.css'
import PropTypes from 'prop-types';

const Subject = ({ name, handleEvent, styles, index }) => {
  return <div className= {"subject "+styles} onClick={() => handleEvent(index)} > {name}</div>
}

Subject.propTypes = {
  name: PropTypes.string.isRequired,
  handleEvent: PropTypes.func.isRequired,  
};

Subject.defualtProps = {
  name: ' ',
  handleEvent: () => {console.log('Props Error');}
}

export default Subject;
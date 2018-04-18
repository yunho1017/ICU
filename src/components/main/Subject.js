import React from 'react';
import '../../css/subject.css'
import PropTypes from 'prop-types';

const Subject = ({ name, clickEvnt, styles }) => {
  console.log(styles);
  
  return <div className= {"subject "+styles} onClick={() => clickEvnt(name)} > {name}</div>
}

Subject.propTypes = {
  name: PropTypes.string.isRequired,
  clickEvnt: PropTypes.func.isRequired,  
};

Subject.defualtProps = {
  name: ' ',
  clickEvnt: () => {console.log('Props Error');}
}

export default Subject;
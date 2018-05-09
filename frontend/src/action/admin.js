//admin 관련 action, action 생성자

export const actionTypes = {
  ADMIN_SET_DATE: 'ADMIN_SET_DATE',
  ADMIN_SELECT_DATE: 'ADMIN_SELECT_DATE',
  ADMIN_SELECT_SIDE_ITEM: 'ADMIN_SELECT_SIDE_ITEM',
  ADMIN_SELECT_ASSIGNMENT: 'ADMIN_SELECT_ASSIGNMENT',
}

export const setDateForAdmin = () => {
  return {
    type: actionTypes.ADMIN_SET_DATE
  }
}

export const selectSideItemForAdmin = (item) => {
  return {
    type: actionTypes.ADMIN_SELECT_SIDE_ITEM,
    item: item
  }
}

export const selectDateForAdmin = (date) => {
  return {
    type: actionTypes.ADMIN_SELECT_DATE,
    date: date
  }
}

export const selectAssignmentsForAdmin = (assignment) => {
  return {
    type: actionTypes.ADMIN_SELECT_ASSIGNMENT,
    assignment: assignment
  }
}
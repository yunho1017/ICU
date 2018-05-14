export const API_SERVER_DOMAIN = 'http://localhost:8080/api';

export const adminDefaultState = {
    subjects: [{
      id:'0',
      name: '소프트웨어 공학'
    }],
    items: [
      { id: '0', name: '과제 업로드'}, 
      { id: '1', name: '과제 다운로드'}
    ],
    selectedItem: '0',
    selectedDate: {
      start: new Date(),
      end: new Date()
    },
    assignments: [{
      key: 123,
      subject: '소프트웨어 공학',
      title: '프로젝트 제안서 제출',
      detail: '프로젝트 제안서를 제출하시오',
      auther: '양은정',
      color: '#ffa78c',
      assginmentDate: {
        start: new Date(2018, 4, 3),
        end: new Date(2018, 4, 7)
      },
      start: new Date(2018, 4, 7),
      end: new Date(2018, 4, 7)
    }],
    selectedAssignment: null
  }

  export const studentDefaultState = {
    subjects: [{
      id:'0',
      name: '소프트웨어 공학'
    }],
    selectedSubject: '0',
    selectedDate: { 
      start: new Date(),
      end: new Date()
    },
    assignments: [{
        key: 123,
        subject: '소프트웨어 공학',
        title: '프로젝트 제안서 제출',
        detail: '프로젝트 제안서를 제출하시오',
        auther: '양은정',
        color: '#ffa78c',
        assginmentDate: {
          start: new Date(2018, 4, 3),
          end: new Date(2018, 4, 7)
        },
        start: new Date(2018, 4, 3),
        end: new Date(2018, 4, 7)
      },
      {
        key: 124,
        subject: '소프트웨어 공학',
        title: '프로젝트 제안서 제출',
        detail: '프로젝트 제안서를 제출하시오',
        auther: '양은정',
        color: '#ffa78c',
        assginmentDate: {
          start: new Date(2018, 4, 23),
          end: new Date(2018, 4, 27)
        },
        start: new Date(2018, 4, 27),
        end: new Date(2018, 4, 27)
    }],
    assignmentsCardList: [],
    selectedAssignment: null,
  }
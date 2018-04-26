export const API_SERVER_DOMAIN = '';

export const adminDefaultState = {
    subjects: ['과제 업로드', '과제 다운로드'],
    selectedSubject: 0,
    selectedDate: {
      start: new Date(),
      end: new Date()
    },
    assignments: [{
      key: 123,
      subject: '과목',
      title: '프로젝트 제안서 제출',
      detail: '프로젝트 제안서를 제출하시오',
      auther: '양은정',
      color: '#ffa78c',
      start: new Date(2018, 3, 3),
      end: new Date(2018, 3, 7)
    }],
    selectedAssignment: null
  }

  export const studentDefaultState = {
    subjects: ['소프트웨어 공학'],
    selectedSubject:  0,
    selectedDate: { 
      start: new Date(),
      end: new Date()
    },
    assignments: {
      '소프트웨어 공학' : [{
        key: 123,
        subject: '소프트웨어 공학',
        title: '프로젝트 제안서 제출',
        detail: '프로젝트 제안서를 제출하시오',
        auther: '양은정',
        color: '#ffa78c',
        start: new Date(2018, 3, 3),
        end: new Date(2018, 3, 7)
      },
      {
        key: 124,
        subject: '소프트웨어 공학',
        title: '프로젝트 제안서 제출',
        detail: '프로젝트 제안서를 제출하시오',
        auther: '양은정',
        color: '#ffa78c',
        start: new Date(2018, 3, 26),
        end: new Date(2018, 3, 26)
      }]
    },
    assignmentsCardList: [],
    selectedAssignment: null,
  }
  
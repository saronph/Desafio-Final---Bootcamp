import produce from 'immer';

const INITIAL_STATE = {
  students: {
    data: [],
  },
  student: {},
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/REG_STUDENT_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@student/STUDENT_DELETE_REQUEST': {
        draft.loading = true;
        break;
      }

      default:
        return state;
    }
  });
}

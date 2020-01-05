export function regStudentRequest(name, email, age, weight, height, token) {
  return {
    type: '@student/REG_STUDENT_REQUEST',
    payload: { name, email, age, weight, height, token },
  };
}

export function studentDeleteRequest(id) {
  return {
    type: '@student/STUDENT_DELETE_REQUEST',
    payload: { id },
  };
}

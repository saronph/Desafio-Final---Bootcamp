export function regStudentRequest(name, email, age, weight, height) {
  return {
    type: '@user/REG_STUDENT_REQUEST',
    payload: { name, email, age, weight, height },
  };
}

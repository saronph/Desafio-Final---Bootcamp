export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function regStudentRequest(name, email, age, weight, height, token) {
  return {
    type: '@auth/REG_STUDENT_REQUEST',
    payload: { name, email, age, weight, height, token },
  };
}

export function regPlanRequest(title, duration, price, token) {
  return {
    type: '@plan/REG_PLAN_REQUEST',
    payload: { title, duration, price, token },
  };
}

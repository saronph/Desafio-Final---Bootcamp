import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Authentication fails, verify your data');
    yield put(signFailure());
  }
}

export function* regStudent({ payload }) {
  try {
    const { name, email, age, weight, height } = payload;

    yield call(api.post, 'students', {
      name,
      email,
      age,
      weight,
      height,
    });

    toast.success('Student successfully registered');
    history.push('/');
  } catch (err) {
    const emailExist = 400;

    if (emailExist) {
      return toast.error('The student already has a registration');
    }

    return toast.error('Error, check the data');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/REG_STUDENT_REQUEST', regStudent),
]);

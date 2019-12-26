import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

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

    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro');
  }
}

export default all([takeLatest('@user/REG_STUDENT_REQUEST', regStudent)]);

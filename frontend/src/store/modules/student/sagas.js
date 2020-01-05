import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import history from '~/services/history';

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

function* deleteStudent({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `students/${id}`);

    toast.success('Aluno removido com sucesso');
    yield put(id);
  } catch (error) {
    toast.error('Erro remover alunos!');
  }
}

export default all([
  takeLatest('@student/REG_STUDENT_REQUEST', regStudent),
  takeLatest('@student/STUDENT_DELETE_REQUEST', deleteStudent),
]);

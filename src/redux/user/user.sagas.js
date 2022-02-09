import { takeLatest, put, all, call } from 'redux-saga/effects';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

import { googleSignInFailure, googleSignInSuccess } from './user.actions';

import UserActionTypes from './user.types';

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapShot = yield userRef.get();
        yield put(googleSignInSuccess({ id: userSnapShot.is, ...userSnapShot.data() }));
    } catch(error) {
        yield put(googleSignInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart)]);
}
import { db } from './firebase';

// User API
export const doCreateUser = (id, username, email,admin) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    admin,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const GetUsersRole = (uid) =>
    !!uid ?db.ref('users').child(uid).once('value') : '';

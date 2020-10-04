import firebase from "../firebase";

const db = firebase.database().ref("/tutorials");
const user = firebase.database().ref("/users");

const getAll = () => {
  return db;
};

const create = ({ data, source }) => {
  if (source === "user") {
    user.push(data);
  }
  return db.push(data);
};

const update = (key, data) => {
  return db.child(key).update(data);
};

const remove = (key) => {
  return db.child(key).remove();
};

const removeAll = () => {
  return db.remove();
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
};

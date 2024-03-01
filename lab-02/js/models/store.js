let store = [];
let instance;

const createStore = async (movies) => {
  if (instance) {
    throw new Error("New instance cannot be created!!");
  }
  instance = 1;

  store = movies;

  if (store.length) {
    return true;
  }
};

const getStore = () => {
  return store;
};

const removeFromStore = (uid) => {
  store = store.filter((movie) => movie.uid !== uid);
  return store; // return the new store
};

export { getStore, createStore, removeFromStore };

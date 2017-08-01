import PouchDB from 'pouchdb';

const myPouchDB = new PouchDB('shopping');

function addItem(item) {
  console.log(item)
}

export { addItem }
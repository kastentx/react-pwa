import PouchDB from 'pouchdb';

const localDB = new PouchDB('http://localhost:5984/shoppingList');

function addItem(item) {
  if (item.length) {
    return localDB.post({
      text: item
    }).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
  }
}

function getAllDocs() {
  console.log('getalldocs called');
  return localDB.allDocs({
    include_docs: true
  })
}

export { addItem, getAllDocs }
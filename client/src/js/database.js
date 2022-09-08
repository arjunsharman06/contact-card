// Configuration file for indexedDB

import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

// unction to open a connection with the IndexedDB API,
//configure it
//initialize an IndexedDB database.
export const initdb = async () => {
  // name of our database as well as a version number
  openDB('contact_db', 1, {
    // Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('contacts')) {
        console.log('contacts store already exists');
        return;
      }

      // Create a new object store for the data and give it a key name of 'id' which will increment automatically
      // 'contacts' is the name of the table
      db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
      console.log('contacts store created');
    },
  });
};

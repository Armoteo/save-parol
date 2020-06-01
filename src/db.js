import * as SQLite from 'expo-sqlite';

//create or open db
const db = SQLite.openDatabase('data.db')

export class DB {
  //create db
  static init() {
    return new Promise((resolve, reject)=>{
     db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, login TEXT NOT NULL, pass TEXT NOT NULL, url TEXT NOT NULL)',
        [],
        resolve,
        (_, error)=> reject(error)
      )
     }) 
    })
  }

  //get the data
  static getData() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM data',
          [],
          (_, result) => resolve(result.rows._array),
          (_, error)=> reject(error)
        )
      })
    })
  }

  //create element DB
  //  -> const id = await DB.createData(data)
  // -> data.id = id
  static createData({name, login, pass, url}) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO data (name, login, pass, url) VALUES (?, ?, ?, ?)`,
          [name, login, pass, url],
          (_, result) => resolve(result.insertId),
          (_, error)=> reject(error)
        )
      })
    })
  }

  static updateData(data) {
    return new Promise((resolve, reject)=>{
      db.transaction(tx => {
       tx.executeSql(
         'UPDATE data SET name = ? WHERE id = ?',
         [data],
         resolve,
         (_, error)=> reject(error)
       )
      }) 
     })
  }

  static deleteData(id) {
    return new Promise((resolve, reject)=>{
      db.transaction(tx => {
       tx.executeSql(
         'DELETE FROM data WHERE id = ?',
         [id],
         resolve,
         (_, error)=> reject(error)
       )
      }) 
     })
  }
}
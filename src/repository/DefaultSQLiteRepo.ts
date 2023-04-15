import * as FileSystem from 'expo-file-system'
import { Asset } from 'expo-asset'
import * as SQLite from 'expo-sqlite'

export class DefaultSQLiteRepo {
  constructor() {

  }

  private async openDatabase(dbRerquired: any): Promise<SQLite.WebSQLDatabase> {
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite/')).exists) {
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite/', { intermediates: true });
    }

    const db = Asset.fromModule(dbRerquired)
    await FileSystem.downloadAsync(
      db.uri,
      FileSystem.documentDirectory + 'SQLite/pets.db'
    );
    return SQLite.openDatabase('pets.db');
  }

  private async getDbInstance(): Promise<SQLite.WebSQLDatabase> {
    const db = require('../../assets/db/pets.db')
    return await this.openDatabase(db)
  }

  async executeSelectQuery<T>(query, params = []): Promise<T[]> {

    const db = await this.getDbInstance()
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          query,
          params,
          (_, { rows }) => {
            resolve(rows._array);
          },
          (_, error): any => {
            reject(error);
          }
        );
      });
    });
  };

  async executeInsertQuery(query, params = []): Promise<number> {

    const db = await this.getDbInstance()
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          query,
          params,
          (_, { insertId }) => {
            resolve(insertId);
          },
          (_, error): any => {
            reject(error);
          }
        );
      });
    });
  };
}
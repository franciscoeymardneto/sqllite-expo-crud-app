import * as FileSystem from 'expo-file-system'
import { Asset } from 'expo-asset'
import * as SQLite from 'expo-sqlite'

export class DefaultSQLiteRepo {
  constructor() {

  }

  private async openDatabase(dbRerquired: any): Promise<SQLite.WebSQLDatabase> {
    // const database = SQLite.openDatabase("petsv1.db")
    // database.closeAsync()
    const internalDatabaseName = 'petsv1.db'
    const sqlDir = FileSystem.documentDirectory + 'SQLite/'

    if (!(await FileSystem.getInfoAsync(sqlDir + internalDatabaseName)).exists) {
      await FileSystem.makeDirectoryAsync(sqlDir, {intermediates: true});
      const asset = Asset.fromModule(dbRerquired)
      await FileSystem.downloadAsync(
        asset.uri,
        sqlDir + internalDatabaseName
      );
    }
    

    return SQLite.openDatabase('petsv1.db');
  }

  private async getDbInstance(): Promise<SQLite.WebSQLDatabase> {
    return await this.openDatabase(require('../../assets/db/petsv1.db'))
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
            // db.closeAsync()
          },
          (_, error): any => {
            reject(error);
            // db.closeAsync()
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
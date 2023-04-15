import * as FileSystem from 'expo-file-system'
import { Asset } from 'expo-asset'
import * as SQLite from 'expo-sqlite'

export class DefaultSQLiteRepo {
    constructor(){

    }

    private async openDatabase(dbRerquired: any): Promise<SQLite.WebSQLDatabase> {
        if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
          await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
        }

        const db = Asset.fromModule(dbRerquired)
        await FileSystem.downloadAsync(
          db.uri,
          FileSystem.documentDirectory + 'SQLite/pets.db'
        );
        return SQLite.openDatabase('pets.db');
    }

    async getDbInstance(): Promise<SQLite.WebSQLDatabase> {
        const db = require('../../db/pets.db')
        return await this.openDatabase(db)
    }
}
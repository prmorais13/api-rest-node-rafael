import * as mongoose from 'mongoose'
import { truncateSync } from 'fs';

class DataBase {
  private DB_URI = 'mongodb://localhost/ts-rest-api'
  private DB_CONNECTION

  constructor() {}

  createConnection() {
    mongoose.connect(this.DB_URI, { useNewUrlParser: true})
    this.logger(this.DB_URI)
  
  }

  logger(uri) {
    this.DB_CONNECTION = mongoose.connection
    this.DB_CONNECTION.on('Connected', () => console.log(`Mongoose está conectado ao ${ uri }`))
    this.DB_CONNECTION.on('Error', error => console.error.bind(console, `Erro na conexão: ${ error }`))
    this.DB_CONNECTION.on('Disconnected', () => console.log(`Mongoose está desconectado do ${ uri }`))
  }

  closeConnection(msg, callback) {
    this.DB_CONNECTION.close(() => {
      console.log(`O banco foi desconectado por: ${msg}`)
      callback()
    })
  }
}
export default DataBase
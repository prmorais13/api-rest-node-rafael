import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParse from 'body-parser'

class App {
  app: express.Application
  private morgan: morgan.Morgan
  private bodyParser

  constructor() {
    this.app = express()
    this.middleware()
    this.routes()
  }

  middleware() {
    this.app.use(morgan('dev'))
    this.app.use(bodyParse.json())
    this.app.use(bodyParse.urlencoded({ extended: true}))
  }

  routes() {
    this.app.route('/').get((req, res, next) => {
      res.status(200).json({
        message: 'Teste de rota'
      })
    })
  }
}
export default new App()
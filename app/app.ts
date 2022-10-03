import express from 'express';
import routes from './src/routes';
import Database from './src/database';
import bodyParser from 'body-parser';

import { Application } from 'express';

class App {
  public express: Application;

  constructor(port: number) {
    this.express = express();
    
    this.middlewares();
    this.database();
    this.routes();
    this.listen(port);
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(bodyParser.json());
    this.express.use(express.static(__dirname + '/public'))
  }

  private database(): void {
    const db = new Database();
    db.init()
  }

  private routes(): void {
    this.express.use(routes);
  }

  private listen(port: number): void {
    this.express.listen(port, function() { 
      console.log('[SERVER] Server ON');
    })
  }
}

export default App
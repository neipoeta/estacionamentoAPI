import express, { Response, Request }from 'express';
import  { routes }  from './routes'
import cors from 'cors';

class App {
    public express: express.Application

    public constructor () {
        this.express = express()
        this.middlewares()
        this.routes()
    }

    private middlewares ():void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private routes ():void {
        this.express.use(routes)
    }

    private database (): void {
        
    }
}

export default new App().express
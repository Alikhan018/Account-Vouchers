const express = require("express");
const path = require("path")
const sequelize = require("./controllers/databaseConnection/db");
const homeController = require("./controllers/home/homeController"); 
const AccountsRouter = require("./routes/accountsRoute/accountsRoute");
const VouchersRouter = require("./routes/vouchersRoute/vouchersRoute");

class Server {
    //initializing some basic express
    constructor() {
        this.app = express();
        this.port = 3000;
        this.host = '127.0.0.1';
        this.app.set('view engine', 'ejs');
        this.app.set('views', path.join(__dirname,'views'))
        this.app.use(express.static(path.join(__dirname,'public')));
        this.app.use(express.urlencoded({extended : true}))
        this.app.use(express.json())
        this.start();
        this.routes();
    }

    //declaration of routes
    routes() {
        this.app.get('/', homeController);
        this.app.use('/accounts', AccountsRouter);
        this.app.use('/vouchers', VouchersRouter);
    }

    //starting express server
    start() {
        this.app.listen(this.port,this.host, () => {
            console.log(`Server started on http://${this.host}:${this.port}`)
        })
    }
}

module.exports = Server;
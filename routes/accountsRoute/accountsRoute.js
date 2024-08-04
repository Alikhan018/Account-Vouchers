const express = require("express");
const AccountsController = require("../../controllers/accounts/accountsController")
class AccountRouter {
    //initialzing express router
    constructor() {
        this.router = express.Router();
        this.routes();
    }

    //defining routes and their respective callbacks
    routes() {
        this.router.get('/', AccountsController.viewAccountsController);
        this.router.post('/getAccount', AccountsController.getAccount);
        this.router.get('/edit', AccountsController.updateAccountPage);
        this.router.post('/update', AccountsController.updateAccountData);
        this.router.delete('/delete', AccountsController.deleteAccountsController);
        this.router.get('/newpage', AccountsController.createPage);
        this.router.post('/create', AccountsController.createAccount);
    }
}

module.exports = new AccountRouter().router;